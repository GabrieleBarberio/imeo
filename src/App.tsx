import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Login } from "./pages/Login";
import { Navbar } from "./component/shared/Navbar";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { DesignSystem } from "./pages/DesignSystem";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignSystem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
