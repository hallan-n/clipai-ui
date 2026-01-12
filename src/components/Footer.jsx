export default function Footer() {
    return (
            <footer className="mt-10 border-t border-white/10">
                <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} ClipAI. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition">Termos</a>
                        <a href="#" className="hover:text-white transition">Privacidade</a>
                        <a href="#" className="hover:text-white transition">Contato</a>
                    </div>
                </div>
            </footer>
    )

}