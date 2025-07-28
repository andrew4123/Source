import { Routes, Route } from "react-router-dom";
import { Lobby } from "./pages/Lobby";
import { CreateAccount } from "./pages/CreateAccount";
import { AuthPage } from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/crear-cuenta" element={<CreateAccount />} />
      <Route path="/ingresar" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
