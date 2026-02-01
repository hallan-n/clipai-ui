import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Manage from "./pages/Manage";

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </>
  );
}
