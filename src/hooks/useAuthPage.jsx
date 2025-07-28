import { useState } from "react";

const useAuthPage = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [phone, setPhone] = useState("");

  const handleKeyClick = (num) => {
    if (phone.length < 10) setPhone(phone + num);
  };

  const handleDelete = () => {
    setPhone(phone.slice(0, -1));
  };

  const isValidPhone = () => {
    const regex = /^3\d{9}$/;
    return regex.test(phone);
  };

  return {
    inputFocused,
    setInputFocused,
    phone,
    handleKeyClick,
    handleDelete,
    isValidPhone,
  };
};

export default useAuthPage;
