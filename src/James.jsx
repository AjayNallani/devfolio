import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function James()
{   
    const james = useGLTF("model.gltf")
    console.log(james)

    return <>
        <RigidBody type="kinematicPosition">
            <primitive scale={[0.4, 0.4, 0.4]} position={[2, -1, 1]}
                object={ james.scene }  
            />
        </RigidBody>

    </>
}