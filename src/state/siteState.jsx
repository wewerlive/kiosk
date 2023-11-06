import { proxy } from "valtio";

export const siteState = proxy({
    userData:null,
    devicePairModal:false,
    projectListModal:false,
    design:{
        assets:[]
    }
});