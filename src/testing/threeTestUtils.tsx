import React from 'react'

type MockCanvasProps = {
  children: React.ReactNode
  testId: string
}

export function MockCanvas({ children, testId }: MockCanvasProps) {
  return <div data-testid={testId}>{children}</div>
}

type MockOrbitControlsProps = {
  children?: React.ReactNode
}

export function MockOrbitControls({ children }: MockOrbitControlsProps) {
  return <>{children}</>
}

