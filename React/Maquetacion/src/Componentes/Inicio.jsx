import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'

function Inicio() {
    const [esRegistro, setEsRegistro] = useState(false);
    const navigate = useNavigate();

    const alternarFormulario = () => {
        setEsRegistro(!esRegistro);
    }

    const ingresar = () => {
        navigate('/principal'); // Usamos navigate() para redirigir
    };

    return (
        <div className='Padre'>
            {!esRegistro ? (
                <div className='Contenedor'>
                    <input type="text" placeholder='Usuario' className='Sesion' />
                    <input type="password" placeholder='Contraseña' className='Sesion' />
                    <button onClick={ingresar} className='BotonInicio'>Iniciar Sesión</button>
                    <button onClick={alternarFormulario} className='Registro'>¿No estás registrado?</button>
                </div>
            ) : (
                <div className='ContenedorRegistro'>
                    <input type="text" placeholder='Nombre' className='Sesion' />
                    <input type="text" placeholder='Usuario' className='Sesion' />
                    <input type="email" placeholder='Correo' className='Sesion' />
                    <input type="password" placeholder='Contraseña' className='Sesion' />
                    <button onClick={ingresar} className='BotonInicio'>Registrarse</button>
                    <button onClick={alternarFormulario} className='Registro'>¿Ya tienes cuenta?</button>
                </div>
            )}
        </div>
    );
}

export default Inicio
