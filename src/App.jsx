import { useContext, useState } from 'react'
import './styles/App.css'
import TitleBar from './TitleBar'
import Search from './Search'
import AirportInfo from './AirportBody/AirportInfo'
import { MetarContext } from './context/Metar'


function App() {
  const { airportData } = useContext(MetarContext)

  return (
    <div className="App">
      <TitleBar />
      <Search />
      { airportData ? <AirportInfo /> : null }
    </div>
)}

export default App
