import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header({ is_login }) {
    return (
        <>

            {is_login ?

                (<header className="text-white border-b border-white/10 backdrop-blur sticky top-0 z-50">
                    <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600" />
                            <span className="font-bold tracking-tight">ClipAI</span>
                        </div>
                        <nav className="flex items-center gap-6 text-sm text-gray-300">
                            <Link to="/" className="hover:text-white transition">Início</Link>
                            <Link to="Canais" className="hover:text-white transition">Canais</Link>
                        </nav>
                        <span className="cursor-pointer bg-gray-800 hover:bg-gray-700 transition p-2 rounded-full">
                            <User />

                        </span>
                    </div>
                </header>)
                : (<header className="text-white border-b border-white/10 backdrop-blur sticky top-0 z-50">
                    <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600" />
                            <span className="font-bold tracking-tight">ClipAI</span>
                        </div>
                        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
                            <a href="#features" className="hover:text-white transition">Como funciona</a>
                            <a href="#pricing" className="hover:text-white transition">Preços</a>
                            <a href="#faq" className="hover:text-white transition">FAQ</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <a href="/login" className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition">
                                Entrar
                            </a>
                            <a href="#demo" className="px-4 py-2 rounded-lg text-sm bg-purple-600 hover:bg-purple-700 transition font-semibold">
                                Testar Demo
                            </a>
                        </div>
                    </div>
                </header>)}
        </>
    );
}
