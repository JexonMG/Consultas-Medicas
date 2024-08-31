import { useState, useEffect } from 'react'
import './App.css'
import { fetchCitas } from '../../utils/api'
import CreateDoctor from '../../components/Doctores/CreateDoctor'
import FetchDoctores from '../../components/Doctores/FetchDoctores'
import CreateConsulta from '../../components/Consultas/CreateConsulta'
import FetchConsultas from '../../components/Consultas/FetchConsultas'
function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    fetchCitas().then(setCitas)
  }, [])

  console.log(citas)
  return (
    <div>
      <CreateDoctor />
      <FetchDoctores />
      <CreateConsulta />
      <FetchConsultas />
      {citas && citas.map((cita) => (
        <div key={cita.id}>
          <h2>{cita.nombre}</h2>
          <p>{cita.fecha}</p>
        </div>
      ))}
    </div>
  )
}

export default App
