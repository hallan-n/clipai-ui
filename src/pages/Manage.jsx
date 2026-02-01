import { PlusIcon, SymbolIcon } from "@radix-ui/react-icons";
import SourceItem from "@/components/SourceItem";
import Button from "@/components/Button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"





import { TrashIcon } from "@radix-ui/react-icons"
export default function Manage() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-3 via-primary-2 to-primary-3">
      <div className="container mx-auto pt-36">
        <section>
          <h1 className="text-white text-2xl font-bold mb-4">Mudar de canal</h1>
          <div className="flex gap-4">
            <SourceItem name="Hállan Neves" username="hallan.neves" />
            <Button text="Adicionar um canal" icon={<PlusIcon />}></Button>
            <Button text="Adicionar fonte" icon={<PlusIcon />}></Button>
          </div>
        </section>
        <div>
          <hr className="border-1 border-primary-6 my-8" />


          <section>
            <h1 className="text-white text-2xl font-bold mb-4">Suas fontes</h1>


            <Tabs defaultValue="account" className="flex gap-4">
              <TabsList className="flex flex-col h-fit bg-transparent p-0 rounded-none">
                <TabsTrigger value="account" className="p-1 data-[state=active]:bg-primary-1 rounded-lg w-full justify-start"><SourceItem name="Hállan Neves" username="hallan.neves" /></TabsTrigger>
                <TabsTrigger value="password" className="p-1 data-[state=active]:bg-primary-1 rounded-lg w-full justify-start"><SourceItem name="Hállan Neves" username="hallan.neves" /></TabsTrigger>
                <TabsTrigger value="settings" className="p-1 data-[state=active]:bg-primary-1 rounded-lg w-full justify-start"><SourceItem name="Hállan Neves" username="hallan.neves" /></TabsTrigger>
              </TabsList>

              <div className="flex-1">
                <TabsContent value="account">
                  <div className="bg-primary-6 p-6 rounded-lg">
                    <h3 className="text-2xl text-white font-bold mb-4">Ultimos 15 videos</h3>
                    <div className="overflow-y-scroll max-h-[500px]">

                    <Table>
                      <TableHeader>
                        <TableRow className="bg-primary-6">
                          <TableHead className="text-primary-1 w-[200px]">Thumb</TableHead>
                          <TableHead className="text-primary-1">Título</TableHead>
                          <TableHead className="text-primary-1">Url</TableHead>
                          <TableHead className="text-primary-1">Publicado</TableHead>
                          <TableHead className="text-primary-1">Duração</TableHead>
                          <TableHead className="text-primary-1">Ações</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        <TableRow className="hover:bg-primary-5">
                          <TableCell className="text-primary-1 w-[200px]"><img className="w-full aspect-video object-cover" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg" alt="" /></TableCell>
                          <TableCell className="text-primary-1 truncate">LILI CANTOU PRO RATÃO</TableCell>
                          <TableCell className="text-primary-1"><a className="font-bold" href="https://www.youtube.com/watch?v=gzvvBqFS0RE">Visitar</a></TableCell>
                          <TableCell className="text-primary-1">20/10/2010</TableCell>
                          <TableCell className="text-primary-1">25:03</TableCell>
                          <TableCell className="text-primary-1">
                            <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">

                              <SymbolIcon />
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-primary-5">
                          <TableCell className="text-primary-1 w-[200px]"><img className="w-full aspect-video object-cover" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg" alt="" /></TableCell>
                          <TableCell className="text-primary-1 truncate">LILI CANTOU PRO RATÃO</TableCell>
                          <TableCell className="text-primary-1"><a className="font-bold" href="https://www.youtube.com/watch?v=gzvvBqFS0RE">Visitar</a></TableCell>
                          <TableCell className="text-primary-1">20/10/2010</TableCell>
                          <TableCell className="text-primary-1">25:03</TableCell>
                          <TableCell className="text-primary-1">
                            <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">

                              <SymbolIcon />
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-primary-5">
                          <TableCell className="text-primary-1 w-[200px]"><img className="w-full aspect-video object-cover" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg" alt="" /></TableCell>
                          <TableCell className="text-primary-1 truncate">LILI CANTOU PRO RATÃO</TableCell>
                          <TableCell className="text-primary-1"><a className="font-bold" href="https://www.youtube.com/watch?v=gzvvBqFS0RE">Visitar</a></TableCell>
                          <TableCell className="text-primary-1">20/10/2010</TableCell>
                          <TableCell className="text-primary-1">25:03</TableCell>
                          <TableCell className="text-primary-1">
                            <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">

                              <SymbolIcon />
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-primary-5">
                          <TableCell className="text-primary-1 w-[200px]"><img className="w-full aspect-video object-cover" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg" alt="" /></TableCell>
                          <TableCell className="text-primary-1 truncate">LILI CANTOU PRO RATÃO</TableCell>
                          <TableCell className="text-primary-1"><a className="font-bold" href="https://www.youtube.com/watch?v=gzvvBqFS0RE">Visitar</a></TableCell>
                          <TableCell className="text-primary-1">20/10/2010</TableCell>
                          <TableCell className="text-primary-1">25:03</TableCell>
                          <TableCell className="text-primary-1">
                            <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">

                              <SymbolIcon />
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-primary-5">
                          <TableCell className="text-primary-1 w-[200px]"><img className="w-full aspect-video object-cover" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg" alt="" /></TableCell>
                          <TableCell className="text-primary-1 truncate">LILI CANTOU PRO RATÃO</TableCell>
                          <TableCell className="text-primary-1"><a className="font-bold" href="https://www.youtube.com/watch?v=gzvvBqFS0RE">Visitar</a></TableCell>
                          <TableCell className="text-primary-1">20/10/2010</TableCell>
                          <TableCell className="text-primary-1">25:03</TableCell>
                          <TableCell className="text-primary-1">
                            <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">

                              <SymbolIcon />
                            </div>
                          </TableCell>
                        </TableRow>

                        <TableRow className="hover:bg-primary-5">
                          <TableCell className="text-primary-1 w-[200px]"><img className="w-full aspect-video object-cover" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg" alt="" /></TableCell>
                          <TableCell className="text-primary-1 truncate">LILI CANTOU PRO RATÃO</TableCell>
                          <TableCell className="text-primary-1"><a className="font-bold" href="https://www.youtube.com/watch?v=gzvvBqFS0RE">Visitar</a></TableCell>
                          <TableCell className="text-primary-1">20/10/2010</TableCell>
                          <TableCell className="text-primary-1">25:03</TableCell>
                          <TableCell className="text-primary-1">
                            <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">

                              <SymbolIcon />
                            </div>
                          </TableCell>
                        </TableRow>

                      </TableBody>
                    </Table>
                    </div>
                  </div>

                </TabsContent>
                <TabsContent value="password">Conteúdo da senha</TabsContent>
                <TabsContent value="settings">Conteúdo das configurações</TabsContent>
              </div>
            </Tabs>
          </section>
        </div>
      </div>
    </div>
  );
}
