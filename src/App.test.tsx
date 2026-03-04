import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'
import { MockCanvas, MockOrbitControls } from './testing/threeTestUtils'

vi.mock('@react-three/fiber', async () => {
  const actual = await vi.importActual<typeof import('@react-three/fiber')>('@react-three/fiber')

  return {
    ...actual,
    Canvas: ({ children }: { children: React.ReactNode }) => (
      <MockCanvas testId="canvas-root">{children}</MockCanvas>
    ),
  }
})

vi.mock('@react-three/drei', async () => {
  const actual = await vi.importActual<typeof import('@react-three/drei')>('@react-three/drei')

  return {
    ...actual,
    OrbitControls: ({ children }: { children?: React.ReactNode }) => (
      <MockOrbitControls>{children}</MockOrbitControls>
    ),
  }
})

describe('App', () => {
  it('renders the full-screen container with the scene', () => {
    const { container } = render(<App />)

    const rootDiv = container.firstElementChild as HTMLDivElement | null
    expect(rootDiv).not.toBeNull()
    expect(rootDiv?.style.width).toBe('100vw')
    expect(rootDiv?.style.height).toBe('100vh')

    expect(screen.getByTestId('canvas-root')).toBeInTheDocument()
  })

  it('renders building and ground elements inside the scene', () => {
    render(<App />)

    const meshes = document.querySelectorAll('mesh')
    const groups = document.querySelectorAll('group')

    expect(groups.length).toBeGreaterThan(0)
    expect(meshes.length).toBeGreaterThan(0)
  })
})

