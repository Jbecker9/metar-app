import { useState } from 'react'
import './styles/App.css'
import TitleBar from './TitleBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TitleBar />
    </div>
)}

export default App
