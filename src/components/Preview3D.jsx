import React from 'react'
import { siteState } from '../state/siteState'
import { useSnapshot } from 'valtio'

function Preview3D() {
    let siteSnap = useSnapshot(siteState)
    console.log(siteSnap.design)
    return (
    <>
        <mesh>
            {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    </>
  )
}

export default Preview3D