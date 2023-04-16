import { useContext, useState } from 'react'
import './styles/App.css'
import TitleBar from './TitleBar'
import Search from './Search'
import AirportInfo from './AirportBody/AirportInfo'
import { MetarContext } from './context/Metar'
import Disclaimer from './Disclaimer'


function App() {
  const { airportData } = useContext(MetarContext)

  return (
    <div className="App">
      <TitleBar />
      <Search />
      { airportData ? <AirportInfo /> : null }
      <Disclaimer />
    </div>
)}

export default App
