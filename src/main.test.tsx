import { describe, expect, it, vi } from 'vitest'

vi.mock('react-dom/client', () => {
  const render = vi.fn()

  return {
    createRoot: vi.fn(() => ({ render })),
  }
})

describe('main entrypoint', () => {
  it('mounts the React app into the root element', async () => {
    const rootElement = document.createElement('div')
    rootElement.id = 'root'
    document.body.appendChild(rootElement)

    await import('./main')

    const { createRoot } = await import('react-dom/client')

    expect(createRoot).toHaveBeenCalledTimes(1)
    expect(createRoot).toHaveBeenCalledWith(rootElement)
  })
})

