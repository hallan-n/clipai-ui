import { CircleArrowRight, EyeOffIcon, NotepadText, ScrollText, TextSearch, User, WandSparkles } from "lucide-react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"




export default function Home() {
    return (
        <div className='h-screen bg-gradient-to-br from-primary-3 via-primary-2 to-primary-3'>
            <div className='flex items-center justify-center w-full h-full p-4'>
                <div className='mt-20 sm:mt-0'>
                    <h1 className='font-extrabold text-6xl text-white text-center'>Gerencie todos os seus <br />  Canais Dark</h1>
                    <p className='text-white text-center text-2xl mt-4'>Monitore os <b>criadores de conteúdo</b> e faça os seus <br /> cortes de forma <b>totalmente automática.</b></p>

                        <InputGroup className="h-12 ps-4 mt-4 border-none bg-primary-4 text-primary-1">
                            <InputGroupInput className="placeholder:text-primary-1"  type="password" placeholder="Cole a URL do vídeo/livestream"/>
                            <InputGroupAddon align="inline-end">
                                <div className="text-primary-1 hover:bg-primary-2 cursor-pointer p-2 rounded-lg" >
                                    <CircleArrowRight className="size-6" />
                                </div>
                            </InputGroupAddon>
                        </InputGroup>




                    <p className='font-bold text-white text-center my-5'>Aproveite todas as funcionalidades</p>
                    <div className="flex justify-center flex-wrap gap-4 mt-4 lg:flex-nowrap">
                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <WandSparkles className="size-7" />
                            <p className="font-bold">Recorte de IA</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <TextSearch className="size-7" />
                            <p className="font-bold">Encontrar momentos</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <NotepadText className="size-7" />
                            <p className="font-bold">Resumo do vídeo</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center text-white border-4 border-primary-4 rounded-lg p-4 w-44">
                            <ScrollText className="size-7" />
                            <p className="font-bold">Legendas de IA</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
