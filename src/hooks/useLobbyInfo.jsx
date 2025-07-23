import { useEffect, useState } from "react";

const useLobbyInfo = () => {
  // State del index imagen y título
  const [indexInfo, setIndexInfo] = useState(0);

  // Loop de imagen y título
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexInfo((prevIndex) => (prevIndex + 1) % 3);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return { indexInfo };
};

export default useLobbyInfo;
