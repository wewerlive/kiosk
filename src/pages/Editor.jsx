import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlusMarkSvg } from '../assets/Svg';
import { siteState } from '../state/siteState';
import { useSnapshot } from 'valtio';
import axios from '../api/Axios';
import { getDesignRoute, fileUploadRoute } from '../api/routes';

const Editor = () => {
  const designId = useParams().id;
  let labId = designId
  console.log(designId);

  axios.get(getDesignRoute, {
    designId: designId
  }).then((res) => {
    console.log(res.data);
  });

  function uploadAsset(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    axios.post(fileUploadRoute, formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      },
    ).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
      <aside
        id='logo-sidebar'
        class='fixed -top-[0.99rem] left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div class='h-full px-3 pb-4 overflow-y-auto bg-gray-700 dark:bg-gray-800'>
          <div className='w-full flex justify-between items-center'>
            <button className='rounded-full m-2 bg-gray-300 text-2xl p-2 drop-shadow-xl'>
              👗
            </button>

            {/* if labId === 0 then cosmetic lab if === 1 then Lens lab if === 2 then dress lab if === 3 then shoes lab */}

            {labId === '0' ? (
              <p className='text-lg font-semibold tracking-wider'>
                Cosmetic Lab
              </p>
            ) : labId === '1' ? (
              <p className='text-lg font-semibold tracking-wider'>Shades Lab</p>
            ) : labId === '2' ? (
              <p className='text-lg font-semibold tracking-wider'>Dress Lab</p>
            ) : labId === '3' ? (
              <p className='text-lg font-semibold tracking-wider'>Shoes Lab</p>
            ) : null}
          </div>
          <hr className='mb-4 mt-2' />
          <div className='flex gap-x-2 justify-center items-center mb-4'>
            <h2 className='text-xl text-start mb-2 font-semibold tracking-wider'>
              Assets
            </h2>
            <hr className='w-full border-double rounded-xl mb-1' />
          </div>
          <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-grow items-center justify-center h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
                <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
                  <PlusMarkSvg size={`h-1 w-1`} />
                </button>
              </div>

              {/* / */}
              <div className='flex flex-grow items-center justify-center h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
                <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
                  <PlusMarkSvg size={`h-1 w-1`} />
                </button>
              </div>

              {/* / */}
              <div className='flex flex-grow items-center justify-center h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
                <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
                  <PlusMarkSvg size={`h-1 w-1`} />
                </button>
              </div>

              {/* / */}
              <div className='flex flex-grow items-center justify-center h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
                <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
                  <PlusMarkSvg size={`h-1 w-1`} />
                </button>
              </div>

              {/* / */}
              <div className='flex flex-grow items-center justify-center h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-500'>
                <button className='text-2xl text-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-700 backdrop-blur-3xl drop-shadow-2xl'>
                  <PlusMarkSvg size={`h-1 w-1`} />
                </button>
              </div>
            </div>
          </div>
          <div className='w-full mt-4 overflow-hidden border-none'>
            <input type='file' className='rounded-md hover:bg-gray-400 hover:text-gray-800 border-none' onChange={(e) => {
              uploadAsset(e)
            }} />
          </div>
        </div>

      </aside>
      <main className='bg-white h-full w-screen border-2'>game of throme</main>
    </>
  );
};

export default Editor;
