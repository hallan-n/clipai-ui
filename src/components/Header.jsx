
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50">
      <div className="mx-auto flex items-center justify-between max-w-[1200px]">
        <h1 className="text-gray-400 text-2xl">ClipAI</h1>
        <div className="flex gap-2">
          <Link to="/channels" className="cursor-pointer p-2 px-4 bg-gray-800 hover:text-gray-600 transition text-gray-400">
            Canais
          </Link>
        </div>
      </div>
    </header>
  );
}


