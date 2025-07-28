import { useState } from "react";

const useLoading = (time) => {
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleContinue = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setErrorMessage("Error desconocido, intentar más tarde.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2500);
    }, time);
  };

  return { isLoading, errorMessage, handleContinue };
};

export default useLoading;
