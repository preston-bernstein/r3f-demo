import { GROUND_COLOR } from '../config/sceneConfig'

type GroundProps = {
  color?: string
  size?: [number, number]
  rotation?: [number, number, number]
}

const DEFAULT_GROUND_SIZE: [number, number] = [20, 20]
const DEFAULT_GROUND_ROTATION: [number, number, number] = [-Math.PI / 2, 0, 0]

function Ground({
  color = GROUND_COLOR,
  size = DEFAULT_GROUND_SIZE,
  rotation = DEFAULT_GROUND_ROTATION,
}: GroundProps) {
  return (
    <mesh rotation={rotation} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Ground
