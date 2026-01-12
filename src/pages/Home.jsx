import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="bg-gray-950 min-h-screen text-white">
            {/* Header inline */}

            <Header></Header>
            <main className="mx-auto w-[1200px] px-6">
                {/* Hero Section */}
                <section
                    className="relative h-screen flex flex-col items-center justify-center text-center space-y-6 py-28 md:py-36"
                    aria-labelledby="hero-title"
                >
                    {/* Background gradient decor */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[80vw] bg-gradient-to-r from-purple-700/20 via-indigo-700/20 to-fuchsia-700/20 blur-3xl" />
                    </div>

                    <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Transforme vídeos longos em <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">cortes dinâmicos</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                        Cole a URL de uma live ou vídeo, selecione os melhores momentos e exporte pronto para
                        <span className="font-semibold"> Shorts, Reels e TikTok</span> em minutos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#demo"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                        >
                            Usar vídeo demo
                        </a>
                        <button className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg transition">
                            Começar agora
                        </button>
                    </div>

                    {/* Social proof / badges */}
                    <div className="flex items-center gap-6 text-sm text-gray-400 pt-4">
                        <span>⚡ Processamento rápido</span>
                        <span>🎯 Cortes prontos para publicar</span>
                        <span>🔗 YouTube, Twitch & arquivo local</span>
                    </div>
                </section>

                {/* Passos */}

                {/* Demo CTA section */}
                <section id="demo" className="py-16 h-screen">
                    <section id="features" className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-gray-900/60 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                                <div className="text-purple-500 text-4xl mb-4">📎</div>
                                <h3 className="text-xl font-bold mb-2">1. Cole a URL</h3>
                                <p className="text-gray-400">
                                    YouTube, Twitch ou carregue seu próprio arquivo.
                                </p>
                            </div>

                            <div className="bg-gray-900/60 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                                <div className="text-purple-500 text-4xl mb-4">✂️</div>
                                <h3 className="text-xl font-bold mb-2">2. Selecione momentos</h3>
                                <p className="text-gray-400">
                                    Defina início e fim de cada corte com precisão.
                                </p>
                            </div>

                            <div className="bg-gray-900/60 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                                <div className="text-purple-500 text-4xl mb-4">⬇️</div>
                                <h3 className="text-xl font-bold mb-2">3. Exporte</h3>
                                <p className="text-gray-400">
                                    Baixe pronto para Shorts, Reels ou TikTok.
                                </p>
                                <a
                                    href="#demo"
                                    className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg"
                                >
                                    Testar com vídeo demo
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-2">Veja o fluxo com um vídeo demo</h4>
                            <p className="text-gray-300">
                                Carregue um exemplo e experimente a seleção de momentos, cortes automáticos e exportação
                                no formato ideal para cada plataforma.
                            </p>
                            <div className="mt-6 flex gap-3">
                                <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg font-semibold">
                                    Carregar Demo
                                </button>
                                <button className="border border-white/20 hover:border-white/40 px-5 py-2.5 rounded-lg">
                                    Ver tutorial
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            {/* Placeholder do player / thumbnail */}
                            <div className="aspect-video rounded-lg border border-white/10 bg-black/40 flex items-center justify-center text-gray-400">
                                Player de preview (thumbnail/demo)
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing (opcional) */}
                <section id="pricing" className="py-16 h-screen flex items-center justify-center">
                    <div>
                        <h5 className="text-2xl font-bold text-center mb-8">Planos simples e transparentes</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
                                <h6 className="text-lg font-semibold">Grátis</h6>
                                <p className="text-gray-400 mt-2">Exportações limitadas, marca d'água.</p>
                                <p className="text-3xl font-extrabold mt-4">R$ 0</p>
                                <button className="mt-6 w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
                                    Começar
                                </button>
                            </div>
                            <div className="rounded-xl border border-purple-600/40 bg-gray-900/60 p-6 ring-2 ring-purple-600/40">
                                <h6 className="text-lg font-semibold">Pro</h6>
                                <p className="text-gray-400 mt-2">Exportação ilimitada, sem marca d'água.</p>
                                <p className="text-3xl font-extrabold mt-4">R$ 29/mês</p>
                                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
                                    Assinar
                                </button>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
                                <h6 className="text-lg font-semibold">Equipe</h6>
                                <p className="text-gray-400 mt-2">Colaboração e workspace.</p>
                                <p className="text-3xl font-extrabold mt-4">R$ 99/mês</p>
                                <button className="mt-6 w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg">
                                    Falar com vendas
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ (opcional) */}
                <section id="faq" className="py-16 h-screen">
                    <h5 className="text-2xl font-bold text-center mb-8">Perguntas frequentes</h5>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <details className="group rounded-lg border border-white/10 bg-gray-900/60 p-4">
                            <summary className="cursor-pointer font-semibold flex items-center justify-between">
                                Suporta links do YouTube e Twitch?
                                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="text-gray-300 mt-2">Sim, cole a URL e nós buscamos os metadados e o stream.</p>
                        </details>
                        <details className="group rounded-lg border border-white/10 bg-gray-900/60 p-4">
                            <summary className="cursor-pointer font-semibold flex items-center justify-between">
                                Posso editar os cortes depois?
                                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="text-gray-300 mt-2">
                                Claro — ajuste início e fim, adicione legendas e ratio (9:16, 1:1, 16:9).
                            </p>
                        </details>
                        <details className="group rounded-lg border border-white/10 bg-gray-900/60 p-4">
                            <summary className="cursor-pointer font-semibold flex items-center justify-between">
                                Exporta direto para Shorts/Reels/TikTok?
                                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
                            </summary>
                            <p className="text-gray-300 mt-2">
                                Sim, com presets e bitrate adequados para cada plataforma.
                            </p>
                        </details>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
