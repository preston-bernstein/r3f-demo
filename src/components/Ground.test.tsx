import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import Ground from './Ground'

describe('Ground', () => {
  it('renders a ground mesh with default props', () => {
    render(<Ground /> as React.ReactElement)

    const meshes = document.querySelectorAll('mesh')
    const planeGeometries = document.querySelectorAll('planeGeometry')
    const materials = document.querySelectorAll('meshStandardMaterial')

    expect(meshes.length).toBeGreaterThan(0)
    expect(planeGeometries.length).toBeGreaterThan(0)
    expect(materials.length).toBeGreaterThan(0)
  })

  it('applies custom color via props', () => {
    const customColor = '#ff0000'
    render(<Ground color={customColor} /> as React.ReactElement)

    const material = document.querySelector('meshStandardMaterial')
    expect(material).not.toBeNull()
    expect(material?.getAttribute('color')).toBe(customColor)
  })
})

