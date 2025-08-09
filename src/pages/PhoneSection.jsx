const PhoneSection = ({ phone, onFocus, isValidPhone, onContinue }) => {
  return (
    <div className="input-section-1 phone">
      <div className="top-section">
        <label htmlFor="phone">Escribe tu celular</label>

        <input id="phone" type="text" placeholder="Ej: 310 341 1294" value={phone} onFocus={onFocus} readOnly />
      </div>

      <div className="bottom-section">
        <button
          className={`enter-keyboard-button ${isValidPhone() ? "valid" : ""}`}
          disabled={!isValidPhone()}
          onClick={onContinue}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default PhoneSection;
