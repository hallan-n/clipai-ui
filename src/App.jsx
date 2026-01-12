
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Channels from "./pages/Channels";


export default function App() {
  return (
      <Routes>
        <Route path="/channels" element={<Channels />} />


        <Route path="*" element={<Channels />} />
      </Routes>
  );
}
