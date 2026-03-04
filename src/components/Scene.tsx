import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Ground from './Ground'
import Building from './Building'
import { CAMERA_CONFIG, LIGHT_CONFIG } from '../config/sceneConfig'

type SceneProps = {
  cameraConfig?: typeof CAMERA_CONFIG
  lightConfig?: typeof LIGHT_CONFIG
}

function Scene({
  cameraConfig = CAMERA_CONFIG,
  lightConfig = LIGHT_CONFIG,
}: SceneProps) {
  return (
    <Canvas shadows camera={cameraConfig}>
      <ambientLight intensity={lightConfig.ambientIntensity} />
      <directionalLight
        position={lightConfig.directionalPosition}
        intensity={lightConfig.directionalIntensity}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Ground />
      <Building />
      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={3}
        maxDistance={15}
      />
    </Canvas>
  )
}

export default Scene
