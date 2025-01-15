import { Environment, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Effects } from "../Effects"

function Loader() {
    
    const { progress } = useProgress()

    return (
        <Html center>
            <div className="w-full h-full" style={{color: "white"}}>{Math.floor(progress)}%</div>
        </Html>
    )
}

export default function EnvTesting() {

    const boxRef = useRef()

    return (
        <div className="w-full h-full bg-black">
             <Canvas>
                
                <Effects />

             <mesh position={[0, 0, 0]}>
                    <boxGeometry ref={boxRef} args={[2, 2, 2]} />
                    <meshStandardMaterial 
                    color="white" 
                    metalness={1}
                    roughness={0}
                    />
                </mesh>

                <Suspense fallback={<Loader />}>
                <Environment
                // background
                files={[
                    '/map/px.png', 
                    '/map/nx.png', 
                    '/map/py.png', 
                    '/map/ny.png', 
                    '/map/pz.png', 
                    '/map/nz.png'
                ]}
                />
                </Suspense>


                <OrbitControls />

                </Canvas>   
        </div>
    )

}