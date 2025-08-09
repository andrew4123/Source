import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordSection = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordArray = Array(4)
    .fill("")
    .map((_, i) => password[i] || "");

  return (
    <div className="input-section-1 password">
      <label>Escribe tu clave</label>
      <div className="digit-boxes">
        {passwordArray.map((digit, idx) => (
          <div key={idx} className="digit-box">
            {digit ? (showPassword ? digit : "*") : ""}
          </div>
        ))}
      </div>
      <button className="toggle-password-button" onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? (
          <>
            <Eye size={15} />
            <span>Ocultar clave</span>
          </>
        ) : (
          <>
            <EyeOff size={15} />
            <span>Mostrar clave</span>
          </>
        )}
      </button>
    </div>
  );
};

export default PasswordSection;
