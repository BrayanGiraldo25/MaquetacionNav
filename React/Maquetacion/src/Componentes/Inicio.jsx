import React from "react";
import Swal from "sweetalert2";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  const [esRegistro, setEsRegistro] = useState(false);
  const navigate = useNavigate();

  const alternarFormulario = () => {
    setEsRegistro(!esRegistro);
  };

  const ingresarInicio = () => {
    let timerInterval;
    Swal.fire({
      title: "Bienvenido devuelta!",
      icon: "success",
      html: "Entrando al servidor",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        navigate("/principal");
      }
    });
  };

  const ingresarRegistro = () => {
    let timerInterval;
    Swal.fire({
      title: "Nos alegra tenerte!",
      icon: "success",
      html: "Entrando al servidor",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        navigate("/principal");
      }
    });
  };

  return (
    <div className="Padre">
      {!esRegistro ? (
        <div className="Contenedor">
          <img src={logo} alt="Logo" className="imagen" />
          <input type="text" placeholder="Usuario" className="Sesion" />
          <input type="password" placeholder="Contraseña" className="Sesion" />
          <button onClick={ingresarInicio} className="BotonInicio">
            Iniciar Sesión
          </button>
          <button onClick={alternarFormulario} className="Registro">
            ¿No estás registrado?
          </button>
        </div>
      ) : (
        <div className="ContenedorRegistro">
          <img src={logo} alt="Logo" className="imagen" />
          <input type="text" placeholder="Nombre" className="Sesion" />
          <input type="text" placeholder="Usuario" className="Sesion" />
          <input type="email" placeholder="Correo" className="Sesion" />
          <input type="password" placeholder="Contraseña" className="Sesion" />
          <button onClick={ingresarRegistro} className="BotonInicio">
            Registrarse
          </button>
          <button onClick={alternarFormulario} className="Registro">
            ¿Ya tienes cuenta?
          </button>
        </div>
      )}
    </div>
  );
}

export default Inicio;
