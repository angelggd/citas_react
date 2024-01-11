const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintoma, id} = paciente

    const handleEliminar = () =>{
        console.log('elimiando paciente...', id)
        const respuesta = confirm('Deseas eliminar el paciente ')
        if(respuesta)
        {
            eliminarPaciente(id) 
        }

    }

    return (
        <>
            <div className="bg-white m-3 py-10 px-5 shadow-md rounded-lg">
                <p className="font-bold uppercase text-gray-600 mb-3">Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold uppercase text-gray-600 mb-3">Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold uppercase text-gray-600 mb-3">Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold uppercase text-gray-600 mb-3">Fecha Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold uppercase text-gray-600 mb-3">Sintomas: {''}
                    <span className="font-normal normal-case">{sintoma}</span>
                </p>

                <div className="flex justify-between mt-10">
                    <button
                        className="bg-indigo-600 text-white font-bold py-3 px-10 uppercase hover:bg-indigo-700 rounded-md"
                        onClick={() => {setPaciente(paciente)}}
                    >Editar</button>
                    <button
                        className="bg-red-600 text-white font-bold py-3 px-10 uppercase hover:bg-red-700 rounded-md"
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default Paciente