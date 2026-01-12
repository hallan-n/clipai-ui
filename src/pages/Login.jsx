import Footer from "../components/Footer";
import Header from "../components/Header"

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-950 ">
            <Header />

            <div className="flex items-center justify-center text-white my-16">
                <div className="w-full max-w-md bg-gray-900/80 border border-white/10 rounded-2xl p-8 shadow-lg">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                        <h1 className="text-2xl font-bold">Entrar no ClipAI</h1>
                        <p className="text-gray-400 text-sm mt-2">Transforme vídeos em cortes dinâmicos</p>
                    </div>

                    {/* Botões sociais */}
                    <div className="space-y-3 mb-6">
                        <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                            <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-5 h-5" />
                            Entrar com Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-700 transition">
                            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
                            Entrar com GitHub
                        </button>
                    </div>

                    {/* Separador */}
                    <div className="flex items-center gap-4 mb-6">
                        <hr className="flex-1 border-gray-700" />
                        <span className="text-gray-500 text-sm">ou</span>
                        <hr className="flex-1 border-gray-700" />
                    </div>

                    {/* Formulário */}
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                placeholder="seuemail@exemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                placeholder="********"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-3 rounded-lg transition"
                        >
                            Entrar
                        </button>
                    </form>

                    {/* Links extras */}
                    <div className="text-center mt-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition">
                            Esqueceu a senha?
                        </a>
                        <span className="mx-2">•</span>
                        <a href="#" className="hover:text-white transition">
                            Criar conta
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
