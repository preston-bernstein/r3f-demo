import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

const SCENE_BACKGROUND = '#f5f5f5'
const GROUND_COLOR = '#e0e0e0'
const BUILDING_COLOR = '#cfcfcf'
const ROOF_COLOR = '#b0b0b0'

const CAMERA_CONFIG = {
  position: [5, 4, 6] as const,
  fov: 45,
}

const LIGHT_CONFIG = {
  ambientIntensity: 0.4,
  directionalIntensity: 0.9,
  directionalPosition: [5, 10, 5] as const,
}

function Building() {
  return (
    <group position={[0, 0.5, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 1, 3]} />
        <meshStandardMaterial color={BUILDING_COLOR} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.1, 0.1, 3.1]} />
        <meshStandardMaterial color={ROOF_COLOR} />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color={GROUND_COLOR} />
    </mesh>
  )
}

function Scene() {
  return (
    <Canvas shadows camera={CAMERA_CONFIG}>
      <ambientLight intensity={LIGHT_CONFIG.ambientIntensity} />
      <directionalLight
        position={LIGHT_CONFIG.directionalPosition}
        intensity={LIGHT_CONFIG.directionalIntensity}
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

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: SCENE_BACKGROUND }}>
      <Scene />
    </div>
  )
}

export default App
