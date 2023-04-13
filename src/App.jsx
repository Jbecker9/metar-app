import { useState } from 'react'
import './styles/App.css'
import TitleBar from './TitleBar'
import Search from './Search'
import AirportInfo from './AirportInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TitleBar />
      <Search />
      <AirportInfo />
    </div>
)}

export default App
