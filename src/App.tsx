import './App.css'
import Scene from './components/Scene'
import { SCENE_BACKGROUND } from './config/sceneConfig'
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: SCENE_BACKGROUND }}>
      <Scene />
    </div>
  )
}

export default App
