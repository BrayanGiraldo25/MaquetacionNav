import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideNav.css";
import logo from "../assets/logo.png";
import Servicio from "./Servicio.jsx";
import Contacto from "./Contacto.jsx";
import Acerca from "./Acerca.jsx";
import Swal from "sweetalert2";

function SideNav() {
  const [vista, setVista] = useState("");
  const navigate = useNavigate();

  const cerrar = () => {
    let timerInterval;
    Swal.fire({
      title: "Vuelve Pronto!",
      html: "Siempre seras bienvenido",
      timer: 2000,
      imageUrl: "https://thefreenature.com/wp-content/uploads/2022/06/bosque.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
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
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <div className="sideNav">
        <img src={logo} alt="Logo" className="imagen" />
        <button onClick={() => setVista("servicio")} className="Boton">
          Servicio
        </button>
        <button onClick={() => setVista("contacto")} className="Boton">
          Contacto
        </button>
        <button onClick={() => setVista("acerca")} className="Boton">
          Acerca De
        </button>
        <button onClick={cerrar} className="Boton">
          Cerrar Sesión
        </button>
      </div>

      <div className="contenido">
        {vista === "servicio" && <Servicio />}
        {vista === "contacto" && <Contacto />}
        {vista === "acerca" && <Acerca />}
      </div>
    </div>
  );
}

export default SideNav;
