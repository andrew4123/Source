import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoading from "../hooks/useLoading";
import StatusOverlay from "./StatusOverlay";
import nextButton from "../assets/next-button.svg";
import backButton from "../assets/back-button.svg";
import documentLogo from "../assets/document-logo.svg";

export const CreateAccount = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const { isLoading, errorMessage, handleContinue } = useLoading(2000);

  return (
    <div className="create-account-container">
      <StatusOverlay isLoading={isLoading} errorMessage={errorMessage} />

      <header className="create-account-header">
        <button className="create-account-back-button" onClick={() => navigate(-1)}>
          <img src={backButton} alt="back" />
        </button>
        <h1 className="create-account-header-title">Crear tu cuenta</h1>
      </header>

      <h2 className="create-account-subtitle">La transparencia ante todo, lee nuestras condiciones:</h2>

      <button className="create-account-conditions-button" onClick={handleContinue} disabled={isLoading}>
        <section className="create-account-conditions">
          <img id="icon1" src={documentLogo} alt="document logo" />
          <img id="icon2" src={nextButton} alt="next" />
          <div className="condition-text-container">
            <h3>Contrato MOVii</h3>
            <p>Acá están los términos y condiciones que debes aceptar para tener y usar tu cuenta MOVii.</p>
          </div>
        </section>
      </button>

      <button className="create-account-conditions-button" onClick={handleContinue} disabled={isLoading}>
        <section className="create-account-conditions">
          <img id="icon1" src={documentLogo} alt="document logo" />
          <img id="icon2" src={nextButton} alt="next" />
          <div className="condition-text-container">
            <h3>Política de privacidad</h3>
            <p>
              Acá está la política de privacidad bajo la cual debes autorizar a MOVii para tratar tus datos, incluso con
              terceros.
            </p>
          </div>
        </section>
      </button>

      <footer className="create-account-footer">
        <p className="create-account-restiction">
          *Si eres menor de edad, tu tutor legal debe ser quien acepte nuestro contrato y autorice el tratamiento de tus
          datos
        </p>

        <div className="create-account-footer-textbox">
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          <p>Acepto el contrato MOVii y autorizo de forma previa, expresa e informada el tratamiento de mis datos</p>
        </div>

        <button className="create-account-footer-button" disabled={!isChecked} onClick={handleContinue}>
          Continuar
        </button>
      </footer>
    </div>
  );
};
