import useLobbyInfo from "../../hooks/useLobbyInfo";

export const Lobby = () => {
  const images = ["lobby1.png", "lobby2.png", "lobby3.png"];
  const titles = [
    "Aquí recargas, envías y pagas, como y cuando quieras",
    "Con tu tarjeta MOVii, compra lo que sea en cualquier lugar",
    "En MOVii sabemos cómo ser tu primer no banco",
  ];

  // Hook loop de fondo y título
  const { indexInfo } = useLobbyInfo();

  return (
    <div className="lobby-main-container" style={{ backgroundImage: `url(${images[indexInfo]})` }}>
      <section className="lobby-form-container">
        <h1 className="lobby-title">{titles[indexInfo]}</h1>

        <div className="lobby-button-container">
          <button className="lobby-button-1">Crear tu cuenta gratis</button>
          <button className="lobby-button-2">Entrar a tu cuenta</button>
        </div>
      </section>
    </div>
  );
};
