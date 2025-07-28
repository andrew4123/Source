import { useEffect, useState } from "react";

const useLobbyInfo = () => {
  const [indexInfo, setIndexInfo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexInfo((prevIndex) => (prevIndex + 1) % 3);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return { indexInfo };
};

export default useLobbyInfo;
