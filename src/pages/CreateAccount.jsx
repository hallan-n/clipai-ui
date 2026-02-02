import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";









export default function CreateAccount() {

  const [showPwd, setShowPwd] = useState(true);

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

          
          <div className="flex flex-col gap-3 mb-3">
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />

          </div>
          <Button className="w-full p-6 mt-4">Criar sua conta</Button>
          <div className="mt-5 flex justify-center">
            <Link to="/login" className="text-xs sm:text-sm text-white font-bold cursor-pointer hover:underline">Já tem uma conta?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
