
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";


// import { Button } from "@/components/ui/button"
// import { ArrowUpIcon } from "lucide-react"



import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown, User } from "lucide-react";






export default function Header() {
  let access_token = localStorage.getItem('access_token')


  return (
    <header className="fixed top-0 left-0 w-full bg-primary-2 shadow-lg z-50">
      <div className="container mx-auto px-6 p-2 flex justify-between items-center">
        <Link to="/" className="w-12 h-12 bg-primary-5 rounded-lg"></Link>
        <div className='flex items-center gap-4 p-2'>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <ArrowDown />
                Ferramentas
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem className="cursor-pointer">Criador de Minituras com IA</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Gerador de Vídeo com IA</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Resumidor de Vídeo</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Tradutor de Vídeo</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Tradutor de Legendas</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Gerador Automático de Legendas</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Gerador de Transcrição de Vídeo</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Encontrar Momentos</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


          {access_token ? <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm">
                <User />
                Hállan Neves
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem><Link to="/">Home</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/login">Login</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/create-account">Criar conta</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/manage">Gerenciar</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/proccess">Processar video</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> : <Link to="/login"><Button variant="default" size="sm">Entrar</Button></Link>}
        </div>

      </div>
    </header>
  )
}
