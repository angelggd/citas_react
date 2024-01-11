import { useState, useEffect} from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintoma, setSintoma] = useState('')
  const [error, setError] = useState(false)

  useEffect(()=>{    

    if(Object.keys(paciente).length > 0)
    {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintoma(paciente.sintoma)
    }
    
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, propietario, email, fecha, sintoma].includes(''))
    {
      setError(true)
      return
    }
    setError(false)

    //creamos objeto pacientes
    const objetoPacientes = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintoma,
      //id : generarId()
    }

    if(paciente.id)
    {
      console.log('editar paciente')
      objetoPacientes.id = paciente.id
      const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
      setPacientes(pacientesActualizados)

      setPaciente({})
    }else{
      console.log('nuevo paciente')
      objetoPacientes.id = generarId()
      setPacientes([...pacientes, objetoPacientes])    
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintoma('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-3">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl text-center mt-5 pb-10">Añade pacientes y {""} 
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error><p>Todos Los Campos Son Requeridos !!</p></Error>}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">
            Nombre Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => {setPropietario(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
            Alta
          </label>

          <input
            id="alta"
            type="date"        
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=>{setFecha(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sistomas"
            value={sintoma}
            onChange={(e)=>{setSintoma(e.target.value)}}
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-500 w-full text-white font-bold p-3 hover:bg-indigo-600 cursor-pointer rounded-lg uppercase transition-all" 
          value={paciente.id ? "Editar Mascota" : "Registrar Mascota"}
        />
      </form>
    </div>
  )
}

export default Formulario
