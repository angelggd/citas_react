import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {  
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(()=>{
    const obtenerPacientesLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }

    obtenerPacientesLS()
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))  
  }, [pacientes])

  function eliminarPaciente(id)
  {
    console.log('Eliminando paciente',id)
    const pacientesActuales = pacientes.filter((paciente) => paciente.id !== id)
    setPacientes(pacientesActuales)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>  

      <div className="mt-5 md:flex">
        <Formulario     
          pacientes={pacientes}     
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />    
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}    
          eliminarPaciente={eliminarPaciente}      
        /> 
      </div>

    </div>
  )
}

export default App
