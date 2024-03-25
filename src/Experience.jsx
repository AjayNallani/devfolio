import {Center, Text, ContactShadows, PresentationControls, Environment} from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Ajay from './Ajay.jsx'

export default function Experience()
{
    return <>
        <Environment preset='city' />

        <color args={ [ '#2f2f2f' ] } attach="background" />
        
        <Physics debug={ false }>
        <PresentationControls 
            global
            rotation={ [ -0.25, -0.60, -0.15 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 50, tension: 200 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Center bottom>
                <Ajay />
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

        </Physics>
       
            
    </>
}