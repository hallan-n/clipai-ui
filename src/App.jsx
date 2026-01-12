
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Channels from "./pages/Channels";
import Home from "./pages/Home";


export default function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="*" element={<Channels />} />
      </Routes>
  );
}
