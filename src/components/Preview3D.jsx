import React from 'react'
import { siteState } from '../state/siteState'
import { useSnapshot } from 'valtio'
import Model from './Model'

function Preview3D() {
    let siteSnap = useSnapshot(siteState)
    console.log(siteSnap.design)
    return (
    <>
        {
            siteSnap.design?.assets?.map((asset) => (
                <Model filePath={asset} />
            ))
        }
    </>
  )
}

export default Preview3D