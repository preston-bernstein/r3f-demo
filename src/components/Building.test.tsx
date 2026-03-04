import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import Building from './Building'

describe('Building', () => {
  it('renders a building group with meshes', () => {
    render(<Building /> as React.ReactElement)

    const groups = document.querySelectorAll('group')
    const meshes = document.querySelectorAll('mesh')
    const boxGeometries = document.querySelectorAll('boxGeometry')
    const materials = document.querySelectorAll('meshStandardMaterial')

    expect(groups.length).toBeGreaterThan(0)
    expect(meshes.length).toBeGreaterThan(0)
    expect(boxGeometries.length).toBeGreaterThan(0)
    expect(materials.length).toBeGreaterThan(0)
  })

  it('applies custom base and roof colors via props', () => {
    const baseColor = '#00ff00'
    const roofColor = '#0000ff'
    render(<Building color={baseColor} roofColor={roofColor} /> as React.ReactElement)

    const materials = Array.from(document.querySelectorAll('meshStandardMaterial'))
    expect(materials.length).toBeGreaterThanOrEqual(2)

    const colors = materials.map((el) => el.getAttribute('color'))
    expect(colors).toContain(baseColor)
    expect(colors).toContain(roofColor)
  })
})

