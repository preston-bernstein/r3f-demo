import { BUILDING_COLOR, ROOF_COLOR } from '../config/sceneConfig'

type BuildingProps = {
  color?: string
  roofColor?: string
  baseSize?: [number, number, number]
  roofSize?: [number, number, number]
}

const DEFAULT_BASE_SIZE: [number, number, number] = [2, 1, 3]
const DEFAULT_ROOF_SIZE: [number, number, number] = [2.1, 0.1, 3.1]

function Building({
  color = BUILDING_COLOR,
  roofColor = ROOF_COLOR,
  baseSize = DEFAULT_BASE_SIZE,
  roofSize = DEFAULT_ROOF_SIZE,
}: BuildingProps) {
  return (
    <group position={[0, 0.5, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={baseSize} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={roofSize} />
        <meshStandardMaterial color={roofColor} />
      </mesh>
    </group>
  )
}

export default Building
