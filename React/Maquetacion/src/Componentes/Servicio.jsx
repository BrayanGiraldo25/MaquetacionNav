import './Servicio.css'
import Educacion from "../assets/Educacion.jpg"
import Cuidado from "../assets/Cuidado.jpg"

function Servicio() { 
  return (
    <div className='ContenedorS'>
      <h1>Servicios</h1>
      <div className='ContenedorImg'>
      <div className='Tarjeta'>
        <img src={Educacion} alt="Educación ambiental" />
        <p>Educación sobre el medio ambiente</p>
      </div>

      <div className='Tarjeta'>
        <img src={Cuidado} alt="Cuidado ecológico" />
        <p>Servicios de conservación y cuidado</p>
      </div>
      </div>

    </div>
  )
}

export default Servicio;