import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Delete } from "lucide-react";
import { MainContext } from "../context/MainContext";
import moviiLogo from "../assets/movii-logo.svg";
import useAuthPage from "../hooks/useAuthPage";
import PhoneSection from "./PhoneSection";
import PasswordSection from "./PasswordSection";
import CodeSection from "./CodeSection";

export const AuthPage = () => {
  const navigate = useNavigate();
  const { setData } = useContext(MainContext);
  const {
    inputFocused,
    setInputFocused,
    step,
    setStep,
    phone,
    password,
    code,
    setPassword,
    handleKeyClick,
    handleDelete,
    isValidPhone,
  } = useAuthPage();

  return (
    <div className={`auth-page ${inputFocused ? "keyboard-active" : ""}`}>
      <div className="welcome-section" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}auth-image.png)` }}>
        <header>
          <button className="auth-page-back-button" onClick={() => navigate(-1)}>
            <ChevronLeft size={24} color="white" strokeWidth={1} />
          </button>
          <img src={moviiLogo} alt="logo" />
        </header>
        <h2>Te damos la bienvenida a tu primer no banco</h2>
      </div>

      <div className="input-section">
        {inputFocused && (
          <button
            className="close-keyboard-button"
            onClick={() => {
              if (step === "password") {
                setStep("phone");
              } else if (step === "code") {
                setStep("password");
                setPassword("");
              } else {
                setInputFocused(false);
              }
            }}
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
        )}

        {step === "phone" && (
          <PhoneSection
            phone={phone}
            onFocus={() => setInputFocused(true)}
            isValidPhone={isValidPhone}
            onContinue={() => {
              setData((prev) => ({ ...prev, phoneString: phone }));
              setStep("password");
              setInputFocused(true);
            }}
          />
        )}

        {step === "password" && <PasswordSection password={password} />}
        {step === "code" && <CodeSection code={code} phone={phone} />}

        <div className="input-section-2">
          {inputFocused && (
            <div className="custom-keyboard">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button key={num} onClick={() => handleKeyClick(num)}>
                  {num}
                </button>
              ))}
              <div className="empty-key" />
              <button onClick={() => handleKeyClick(0)}>0</button>
              <button className="delete-button" onClick={handleDelete}>
                <Delete size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
