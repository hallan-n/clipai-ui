
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Channels from "./pages/Channels";
import Home from "./pages/Home";
import Login from "./pages/Login";


export default function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Channels />} />
      </Routes>
  );
}
