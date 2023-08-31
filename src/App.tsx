import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { DesignSystem } from "./pages/DesignSystem";
import { SignIn } from "./pages/SignIn";
import { ChatFE } from "./pages/ChatFE";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignSystem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chat" element={<ChatFE />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
