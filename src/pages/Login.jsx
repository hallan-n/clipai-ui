import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Login() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-3 via-primary-2 to-primary-3">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg bg-primary-6 p-6 sm:p-10 rounded-lg">
          <h1 className="text-center font-bold text-2xl sm:text-3xl text-white">Bem-vindo(a) ao ClipAI</h1>

          <p className="text-center text-white my-4">Continue com</p>

          <div className="flex gap-2 sm:gap-3 justify-center">
            <div className="flex items-center rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 bg-primary-4 hover:bg-primary-3 transition cursor-pointer">
              <Github className="size-4 sm:size-5 md:size-6 text-black" />
              <p className="text-xs sm:text-sm md:text-base text-white font-bold">
                GitHub
              </p>
            </div>

            <div className="flex items-center rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 bg-primary-4 hover:bg-primary-3 transition cursor-pointer">
              <Github className="size-4 sm:size-5 md:size-6 text-black" />
              <p className="text-xs sm:text-sm md:text-base text-white font-bold">
                Discord
              </p>
            </div>


            <div className="flex items-center rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 bg-primary-4 hover:bg-primary-3 transition cursor-pointer">
              <Github className="size-4 sm:size-5 md:size-6 text-black" />
              <p className="text-xs sm:text-sm md:text-base text-white font-bold">
                Discord
              </p>
            </div>

          </div>
          <div className="flex gap-2 items-center my-8 px-8">
            <hr className="w-full border-1 border-white" />
            <p className="text-center text-white font-bold">OU</p>
            <hr className="w-full border-1 border-white" />
          </div>
          <div className="flex flex-col gap-3">

            <Input className="border-none bg-primary-5 p-6 text-primary-1 placeholder:text-primary-1" type="email" placeholder="Email" />
            <Input className="border-none bg-primary-5 p-6 text-primary-1 placeholder:text-primary-1" type="password" placeholder="Senha" />
          </div>
          <div className="flex mb-5 mt-8 justify-between text-xs sm:text-sm text-white font-bold">
            <Link to="/create-account" className="cursor-pointer hover:underline">Não tem uma conta?</Link>
            <Link to="/login" className="cursor-pointer hover:underline">Esqueceu a senha?</Link>
          </div>
          <Button variant="default" className="w-full p-6">Entrar</Button>
        </div>
      </div>
    </div>
  );
}
