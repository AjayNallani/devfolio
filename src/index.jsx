import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 35,
            near: 0.5,
            far: 2000,
            position: [ -3.9, 1.5, 5 ]
        } }
    >
    <Experience />
    </Canvas>
)