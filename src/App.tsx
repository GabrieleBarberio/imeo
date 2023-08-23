import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Navbar } from "./component/shared/Navbar";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { DesignSystem } from "./pages/DesignSystem";
import { SignIn } from "./pages/SignIn";
import { Sidebar } from "./component/Sidebar";

// import { ChatPage } from "./pages/ChatPage";
import { Chat } from "./component/Chat";
import { ChatFE } from "./pages/ChatFE";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignSystem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/chatlayout" element={<ChatFE />} />
      </Routes>
    </>
  );
}

export default App;
