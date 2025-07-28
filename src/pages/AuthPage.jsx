import { useNavigate } from "react-router-dom";
import useAuthPage from "../hooks/useAuthPage";
import backButtonWhite from "../assets/back-button-wht.svg";
import backButton from "../assets/back-button.svg";
import moviiLogo from "../assets/movii-logo.svg";
import deleteButton from "../assets/delete-button.svg";

export const AuthPage = () => {
  const navigate = useNavigate();

  const { inputFocused, setInputFocused, phone, handleKeyClick, handleDelete, isValidPhone } = useAuthPage();

  return (
    <div className={`auth-page ${inputFocused ? "keyboard-active" : ""}`}>
      <div className="welcome-section">
        <header>
          <button className="auth-page-back-button" onClick={() => navigate(-1)}>
            <img src={backButtonWhite} alt="back" />
          </button>

          <img src={moviiLogo} alt="logo" />
        </header>

        <h2>Te damos la bienvenida a tu primer no banco</h2>
      </div>

      <div className="input-section">
        {inputFocused && (
          <button className="close-keyboard-button" onClick={() => setInputFocused(false)}>
            <img src={backButton} alt="back" />
          </button>
        )}

        <div className="input-section-1">
          <label htmlFor="phone">Escribe tu celular</label>

          <input
            id="phone"
            type="text"
            placeholder="Ej: 310 341 1294"
            value={phone}
            onFocus={() => setInputFocused(true)}
            readOnly
          />
        </div>

        <div className="input-section-2">
          <button className={`enter-keyboard-button ${isValidPhone() ? "valid" : ""}`} disabled={!isValidPhone()}>
            Entrar
          </button>

          {inputFocused && (
            <div className="custom-keyboard">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, idx) => (
                <button key={idx} onClick={() => handleKeyClick(num)}>
                  {num}
                </button>
              ))}
              <div className="empty-key" />
              <button onClick={() => handleKeyClick(0)}>0</button>
              <button className="delete-button" onClick={handleDelete}>
                <img src={deleteButton} alt="" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
