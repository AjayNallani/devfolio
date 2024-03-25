import { Text, useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'

export default function Ajay()
{   
    const group = useRef()
    const ajay = useGLTF("https://models.readyplayer.me/61d7c56c1ee1d0492ab9cf5e.glb")
    const {animations: waving_animation} = useFBX("Waving.fbx")

    waving_animation[0].name = "Waving";

    const {actions} = useAnimations(waving_animation, group)

    useEffect(() => {
        actions["Waving"].reset().play()
    }, [])

    return <>
        <group ref={group}>
            <RigidBody type="kinematicPosition">
                <primitive object={ ajay.scene }  
                />
            </RigidBody>
        </group>
    </>
}