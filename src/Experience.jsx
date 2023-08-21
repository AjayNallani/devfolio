import {Text, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{


    const ajay = useGLTF('https://models.readyplayer.me/61d7c56c1ee1d0492ab9cf5e.glb')


    return <>

        <Environment preset='city' />

        <color args={ [ '#241a1a' ] } attach="background" />
        
        <OrbitControls makeDefault />
        
        <PresentationControls 
            global
            rotation={ [ 0.1, -0.5, 0.05 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float
                rotationIntensity={ 0.4 }
            >
                <primitive object={ ajay.scene }
                            position-y={ - 1.2 }
                />
            </Float>
        </PresentationControls>

        <ContactShadows position-y={ - 1.4 } />

        <Float rotationIntensity={ 0.4 } >

            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 0.8 }
                position-y={ 1.1 }
                rotation-y={ - 0.5 }
            >
                Ajay Chandra Nallani
            </Text>

        </Float>
            
    </>
}