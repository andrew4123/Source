import { useNavigate } from "react-router-dom";
import useLobbyInfo from "../hooks/useLobbyInfo";

export const Lobby = () => {
  const navigate = useNavigate();

  const images = [
    `${import.meta.env.BASE_URL}lobby1.png`,
    `${import.meta.env.BASE_URL}lobby2.png`,
    `${import.meta.env.BASE_URL}lobby3.png`,
  ];

  const titles = [
    "Aquí recargas, envías y pagas, como y cuando quieras",
    "Con tu tarjeta MOVii, compra lo que sea en cualquier lugar",
    "En MOVii sabemos cómo ser tu primer no banco",
  ];

  const { indexInfo } = useLobbyInfo();

  return (
    <div className="lobby-main-container" style={{ backgroundImage: `url(${images[indexInfo]})` }}>
      <section className="lobby-form-container">
        <h1 className="lobby-title">{titles[indexInfo]}</h1>

        <div className="lobby-button-container">
          <button className="lobby-button-1" onClick={() => navigate("crear-cuenta")}>
            Crear tu cuenta gratis
          </button>
          <button className="lobby-button-2" onClick={() => navigate("ingresar")}>
            Entrar a tu cuenta
          </button>
        </div>
      </section>
    </div>
  );
};
