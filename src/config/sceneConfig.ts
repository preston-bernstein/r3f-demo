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

export {
  SCENE_BACKGROUND,
  GROUND_COLOR,
  BUILDING_COLOR,
  ROOF_COLOR,
  CAMERA_CONFIG,
  LIGHT_CONFIG,
}
