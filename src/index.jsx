import './style.css'
import ReactDOM from 'react-dom/client'
import { KeyboardControls, Points, PointMaterial } from '@react-three/drei'
import { Canvas, useFrame} from '@react-three/fiber'
import { useState, useRef } from 'react'
import Experience from './Experience.jsx'

import {random} from 'maath'


const root = ReactDOM.createRoot(document.querySelector('#root'))

function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 5.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 25
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="#ffa0e0" size={0.020} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }

root.render(
    <KeyboardControls map={ [] }>
        <Canvas
            camera={ {
                fov: 35,
                near: 0.5,
                far: 2000,
                position: [ -3.9, 1.5, 5 ]
            } }
        >
        <Stars /> <Experience /> 
        </Canvas>
    </KeyboardControls>
)