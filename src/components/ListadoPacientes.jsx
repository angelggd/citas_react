import Paciente from "./Pacientes";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {




   return(
        <div className="m-3 md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
            {pacientes && pacientes.length ? //validamos si hay pacientes
                (
                    <>
                        <h2 className="text-3xl font-black text-center">Listado Pacientes</h2>
                        <p className="text-xl text-center mt-5 mb-10">Administra {""}
                            <span className="text-indigo-600 font-bold" >Tus Pacientes y Citas</span>
                        </p>

                        {pacientes.map((paciente) => (
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </>
                ):(
                    <>
                        <h2 className="text-3xl font-black text-center">No Hay Pacientes</h2>
                        <p className="text-xl text-center mt-5 mb-10">Comienza agregando pacientes {""}
                            <span className="text-indigo-600 font-bold" >y apareceran en este lugar</span>
                        </p>
                    </>
                )
            }
            

                  
            
        </div>
    )
}

export default ListadoPacientes;