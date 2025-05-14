import "./Contacto.css";
import Whats from "../assets/Whats.png";
import Cel from "../assets/Telefono.svg";
import Lugar from "../assets/Lugar.png"

function Contacto() {
  return (
    <div className="ContenedorC">
      <h1>Contactos</h1>
      <div className="CFijo">
        <img src={Whats} alt="" className="Imagen" />
        <h3>Whatsapp: +57 3216382548</h3>
      </div>
      <div className="CFijo">
        <img src={Cel} alt="" className="Imagen" />
        <h3>Fijo: +57 (920) 307-1175</h3>
      </div>
      <div className="CFijo">
        <img src={Lugar} alt="" className="Imagen"/>
        <h3>Direccion: 575 Imelda Ports Suite 411</h3>
      </div>
    </div>
  );
}

export default Contacto;
