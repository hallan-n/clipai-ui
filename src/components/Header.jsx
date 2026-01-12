
import { Link } from "react-router-dom";

export default function Header() {
    return (
        // <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50">
        //     <div className="mx-auto flex items-center justify-between max-w-[1200px]">
        //         <h1 className="text-gray-400 text-2xl">ClipAI</h1>
        //         <div className="flex gap-2">
        //             <Link to="/" className="cursor-pointer p-2 px-4 bg-gray-800 hover:text-gray-600 transition text-gray-400">
        //                 Início
        //             </Link>
        //             <Link to="/channels" className="cursor-pointer p-2 px-4 bg-gray-800 hover:text-gray-600 transition text-gray-400">
        //                 Canais
        //             </Link>
        //         </div>
        //     </div>
        // 
      <header className="border-b border-white/10 backdrop-blur sticky top-0 z-50 text-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600" />
            <span className="font-bold tracking-tight">ClipAI</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-300 px-4">
            <Link to="/" className="hover:text-white transition">Como funciona</Link>
            <Link to="/channels" className="hover:text-white transition">Preços</Link>
            <Link to="/channels" className="hover:text-white transition">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition">
              Entrar
            </button>
            <Link to="/channels"
              className="px-4 py-2 rounded-lg text-sm bg-purple-600 hover:bg-purple-700 transition font-semibold"
            >
              Testar Demo
            </Link>
          </div>
        </div>
      </header>
    );
}

