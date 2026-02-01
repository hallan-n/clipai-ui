
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary-2 shadow-lg z-50">
      <div className="container mx-auto px-6 p-2 flex justify-between items-center">
        <Link to="/" className="w-12 h-12 bg-primary-5 rounded-lg"></Link>
        <div className='flex items-center gap-4 p-2'>

          <Menu>
            <MenuButton className="py-2 px-8 flex items-center gap-4 text-white hover:text-primary-1 transition cursor-pointer data-open:text-primary-1">
              Ferramentas
              <ChevronDownIcon className="size-4" />
            </MenuButton>


            <MenuItems
              transition
              anchor="bottom end"
              className="shadow-lg z-100 p-2 rounded-md bg-primary-3  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Criador de Minituras com IA
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Gerador de Vídeo com IA
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Resumidor de Vídeo
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Tradutor de Vídeo
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Tradutor de Legendas
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Gerador Automático de Legendas
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Gerador de Transcrição de Vídeo
                </button>
              </MenuItem>
              <MenuItem>
                <button className='flex items-center gap-4 w-full py-2 px-8 bg-primary-3 rounded-md text-white transition hover:bg-primary-5 cursor-pointer'>
                  Encontrar Momentos
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>


          <Link to="/login" className='py-2 px-8 bg-primary-4 rounded-md text-white font-bold transition hover:bg-primary-5 hover:text-primary-1 cursor-pointer'>Entrar</Link>
        </div>

      </div>
    </header>
  )
}
