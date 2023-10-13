import React from 'react'
import { useGLTF } from '@react-three/drei'

function Model({filePath}) {
    console.log(filePath)
    let fileName = filePath.split("\\").pop()
    console.log(fileName)
    let model = useGLTF("http://localhost:3001/media/"+fileName)
    console.log(model)
  return (
    <primitive object={model.scene} />
  )
}

export default Model