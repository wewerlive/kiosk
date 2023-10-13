import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PlusMarkSvg } from "../assets/Svg";
import { siteState } from "../state/siteState";
import { useSnapshot } from "valtio";
import axios from "../api/Axios";
import { getDesignRoute, getAssetsRoute } from "../api/routes";
import { Canvas } from "@react-three/fiber";
import Preview3D from "../components/Preview3D";
import { OrbitControls } from "@react-three/drei";

const Editor = () => {
  const designId = useParams().id;
  let labId = designId;
  let siteSnap = useSnapshot(siteState);
  console.log(designId);
  let design;
  axios.get(getDesignRoute + "/" + designId).then((res) => {
    siteState.design = res.data.design;
    design = res.data;
    console.log(res.data);
  });

  console.log(siteSnap.userData);

  const uploadFile = (file, filename = null) => {
    const baseUrl = "http://localhost:3001";
    let formData = new FormData();

    formData.append("file", file);
    console.log(design.design.labType);
    formData.append("type", design.design.labType);
    formData.append("username", siteState.userData.user);
    // fetch POST request to express server
    return fetch(baseUrl + "/file", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json().then((json) => ({ json, response })))
      .then(({ json, response }) =>
        !response.ok ? Promise.reject(json) : json
      )
      .then(
        (response) => response,
        (error) => error
      );
  };

  return (
    <>
      <div className=" flex flex-row" style={{ width: "100%", height: "90vh" }}>
        <aside
          id="logo-sidebar"
          class="w-64 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-700 dark:bg-gray-800">
            <div className="w-full flex justify-between items-center">
              <button className="rounded-full m-2 bg-gray-300 text-2xl p-2 drop-shadow-xl">
                {siteSnap.design?.labType === "Dress" && "👗"}
                {siteSnap.design?.labType === "Cosmetic" && "💄"}
                {siteSnap.design?.labType === "Shades" && "🕶️"}
                {siteSnap.design?.labType === "Shoes" && "👟"}
              </button>
              {siteSnap.design?.designName}
              {/* if labId === 0 then cosmetic lab if === 1 then Lens lab if === 2 then dress lab if === 3 then shoes lab */}
            </div>
            <hr className="mb-4 mt-2" />
            <div className="flex gap-x-2 justify-center items-center mb-4">
              <h2 className="text-xl text-start mb-2 font-semibold tracking-wider">
                Assets
              </h2>
              <hr className="w-full border-double rounded-xl mb-1" />
            </div>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {siteSnap.assets?.map((asset) => {
                  return (
                    <div className="flex flex-grow items-center justify-center h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500">
                      <button
                        path={asset.filePath}
                        onClick={(e) => {
                          console.log(asset);
                          if(siteState.design.assets === undefined){
                            siteState.design.assets = [];
                          }
                          console.log(siteState.design.assets)
                          if(siteState.design.assets.includes(asset.assetPath)){
                            siteState.design.assets = siteState.design.assets.filter((item) => item !== asset.assetPath);
                          }
                          else{
                            siteState.design.assets.push(asset.assetPath);
                          }
                        }}
                        className="text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl"
                      >
                        <PlusMarkSvg size={`h-1 w-1`} />
                      </button>
                      {asset.assetPath}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full mt-4 overflow-hidden border-none">
              <input
                type="file"
                className="rounded-md hover:bg-gray-400 hover:text-gray-800 border-none"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  uploadFile(e.target.files[0]).then((res) => {
                    console.log(res);
                  });
                }}
              />
            </div>
          </div>
        </aside>
        <main className="bg-white" style={{ width: "100%" }}>
          <Canvas style={{ height: "100%", width: "100%" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Preview3D />
          </Canvas>
        </main>
      </div>
    </>
  );
};

export default Editor;
