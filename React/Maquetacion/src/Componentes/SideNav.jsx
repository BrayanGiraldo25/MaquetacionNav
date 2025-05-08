import React from 'react'
import './SideNav.css'
import { useNavigate } from 'react-router-dom'

function SideNav() {
  const navigate = useNavigate()

  const cerrar = () => {
    navigate('/')
  }
  return (
    <div className='sideNav'>
      <h2 className='Titulo'>Home</h2>
      <button className='Boton'>Servicio</button>
      <button className='Boton'>Contacto</button>
      <button className='Boton'>Acerca De</button>
      <button onClick={cerrar} className='Boton'>Cerrar Sesion</button>
    </div>
  )
}

export default SideNav
