import {Center, Text, ContactShadows, PresentationControls, Environment, Float} from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Ajay from './Ajay.jsx'
import James from './James.jsx'
import Asteroid from './Asteroid.jsx'

export default function Experience()
{
    return <>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr"/>

        <color args={ [ '#2f2f2f' ] } attach="background" />
        
        <Physics debug={ false }>
        <PresentationControls 
            global
            rotation={ [ -0.25, -0.60, -0.15 ] }
            polar={ [ - 0.2, 0.2 ] }
            azimuth={ [ - 0, 0.0 ] }
            config={ { mass: 50, tension: 200 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Center bottom>
                <Ajay />
            </Center>
            
        </PresentationControls>
        <Float>
            <James />
            <Asteroid />
        </Float>
        <ContactShadows position-y={ - 1.9 } />
{/* 
        <Suspense fallback={null}>
            <About />
        </Suspense> */}

        <Text
            font="Bulgatti-xgMV.ttf"
            fontSize={ 0.2 }
            position-y={ 1.6 }
            rotation-y={ - 0.5 }
        >
            Ajay Chandra Nallani
        </Text>

        </Physics>
       
            
    </>
}