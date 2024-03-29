import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Asteroid()
{   
    const asteroid = useGLTF("Asteroid.glb")
    console.log(asteroid)

    return <>
        <RigidBody type="kinematicPosition">
            <primitive scale={[0.1, 0.1, 0.1]} position={[0, -1, -4]}
                object={ asteroid.scene }  
            />
        </RigidBody>

    </>
}