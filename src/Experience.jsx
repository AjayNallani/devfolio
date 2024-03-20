import {Center, Text, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{

    const ajay = useGLTF('https://models.readyplayer.me/61d7c56c1ee1d0492ab9cf5e.glb')
    return <>

        <Environment preset='city' />

        <color args={ [ '#2f2f2f' ] } attach="background" />
        
        <PresentationControls 
            rotation={ [ -0.25, -0.50, -0.15 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Center bottom>
                <primitive object={ ajay.scene }  
                />
            </Center>
            
        </PresentationControls>

        <ContactShadows position-y={ - 1.9 } />

        

        <Text
            font="Bulgatti-xgMV.ttf"
            fontSize={ 0.2 }
            position-y={ 1.6 }
            rotation-y={ - 0.5 }
        >
            Ajay Chandra Nallani
        </Text>

       
            
    </>
}