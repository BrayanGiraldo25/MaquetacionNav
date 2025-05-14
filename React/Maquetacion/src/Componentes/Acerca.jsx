import './Acerca.css'
import Logo from '../assets/logo.png'

function Acerca() {
  return (
    <div className='ContenedorA'>
        <div className='Textos'>
        <h2>Acerca de</h2>
        <div className='Ambiental'>
        <h1>Ambiental Consciousness</h1>
        <img src={Logo} alt="" />
         </div>
        <h3>Somos Ambiental Consciousness, una empresa la cual se encarga del cuidado ambiental de Colombia y de hacerle llegar el mensaje a la gente sobre la importancia del medio ambiente y las implicancias de un mal cuidado de este, tenemos cursos de cuidado medio ambiental junto a viajes para limpiar zonas afectadas por la enorme contaminacion en colombia, ¿que esperas para unirte?</h3>
        </div>
    </div>
  )
}

export default Acerca