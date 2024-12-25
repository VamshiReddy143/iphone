import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
        <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    </Html>
  )
}

export default Loader