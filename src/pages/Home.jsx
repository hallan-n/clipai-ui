import { ArrowRightIcon, MagicWandIcon, MagnifyingGlassIcon, ReaderIcon, Pencil1Icon } from "@radix-ui/react-icons"

export default function Home() {
    return (
        <div className='h-screen bg-gradient-to-br from-primary-3 via-primary-2 to-primary-3'>
            <div className='flex items-center justify-center w-full h-full p-4 text-shadow-lg'>
                <div className='mt-20 sm:mt-0'>
                    <h1 className='font-extrabold text-6xl text-white text-center'>Gerencie todos os seus <br />  Canais Dark</h1>
                    <p className='text-white text-center text-2xl mt-4'>Monitore os <b>criadores de conteúdo</b> e faça os seus <br /> cortes de forma <b>totalmente automática.</b></p>

                    <div className="relative mt-3">
                        <input
                            type="text"
                            placeholder="Cole a URL do vídeo/livestream"
                            className="px-6 pr-12 p-4 bg-primary-4 w-full rounded-lg focus:not-data-focus:outline-none"
                        />
                        <span className='rounded-full p-2 hover:bg-primary-2 absolute right-4 top-1/2 -translate-y-1/2 text-primary-1 cursor-pointer'>

                            <ArrowRightIcon
                                className="size-8  "
                            />
                        </span>
                    </div>
                    <p className='font-bold text-white text-center my-5'>Aproveite todas as funcionalidades</p>
                    <div className="flex justify-center flex-wrap gap-4 mt-4 lg:flex-nowrap">
                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <MagicWandIcon className="size-7" />
                            <p className="font-bold">Recorte de IA</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <MagnifyingGlassIcon className="size-7" />
                            <p className="font-bold">Encontrar momentos</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <ReaderIcon className="size-7" />
                            <p className="font-bold">Resumo do vídeo</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <Pencil1Icon className="size-7" />
                            <p className="font-bold">Legendas de IA</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
