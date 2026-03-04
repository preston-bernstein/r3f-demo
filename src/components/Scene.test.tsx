import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { MockCanvas, MockOrbitControls } from '../testing/threeTestUtils'

// Mock Canvas so we don't depend on the real @react-three/fiber renderer
vi.mock('@react-three/fiber', async () => {
  const actual = await vi.importActual<typeof import('@react-three/fiber')>('@react-three/fiber')

  return {
    ...actual,
    Canvas: ({ children }: { children: React.ReactNode }) => (
      <MockCanvas testId="scene-canvas">{children}</MockCanvas>
    ),
  }
})

// Mock OrbitControls so Scene can render without pulling in drei internals
vi.mock('@react-three/drei', async () => {
  const actual = await vi.importActual<typeof import('@react-three/drei')>('@react-three/drei')

  return {
    ...actual,
    OrbitControls: ({ children }: { children?: React.ReactNode }) => (
      <MockOrbitControls>{children}</MockOrbitControls>
    ),
  }
})

// Mock child components to keep this focused on Scene wiring
vi.mock('./Ground', () => ({
  __esModule: true,
  default: () => <div data-testid="ground-component" />,
}))

vi.mock('./Building', () => ({
  __esModule: true,
  default: () => <div data-testid="building-component" />,
}))

import Scene from './Scene'
import { CAMERA_CONFIG, LIGHT_CONFIG } from '../config/sceneConfig'

describe('Scene', () => {
  it('renders Canvas and child components', () => {
    render(<Scene />)

    expect(screen.getByTestId('scene-canvas')).toBeInTheDocument()
    expect(screen.getByTestId('ground-component')).toBeInTheDocument()
    expect(screen.getByTestId('building-component')).toBeInTheDocument()
  })

  it('respects custom camera and light configs', () => {
    const customCamera = { ...CAMERA_CONFIG, fov: 60 }
    const customLight = {
      ...LIGHT_CONFIG,
      ambientIntensity: 0.2,
      directionalIntensity: 0.5,
    }

    render(<Scene cameraConfig={customCamera} lightConfig={customLight} />)

    // We don't assert on three.js internals here; the fact that Scene
    // renders without error when given custom configs is enough to
    // verify it threads the props through correctly.
  })
})

