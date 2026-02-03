import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Download } from "lucide-react";
import AddSource from "@/components/AddSource";
import AddChannel from "@/components/AddChannel";



import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


export default function ProcessVideo() {
    const [channels, setChannels] = useState([]);
    const [selected, setSelected] = useState("0");

    function getData() {
        return [
            {
                id: 1,
                login: "hallan.neves",
                channels: [
                    {
                        name: "Fernanda Rocha",
                        username: "fernandar",
                        videos: [
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 1", url: "https://youtu.be/video1", published_at: "2026-01-01", duration: "12:34" },
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 2", url: "https://youtu.be/video2", published_at: "2026-01-02", duration: "10:21" },
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 3", url: "https://youtu.be/video2", published_at: "2026-01-02", duration: "10:21" },
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 4", url: "https://youtu.be/video2", published_at: "2026-01-02", duration: "10:21" },
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 5", url: "https://youtu.be/video2", published_at: "2026-01-02", duration: "10:21" },
                        ],
                    },
                    {
                        name: "João do gás",
                        username: "jaodogas",
                        videos: [
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 1", url: "https://youtu.be/video1", published_at: "2026-01-01", duration: "12:34" },
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 2", url: "https://youtu.be/video2", published_at: "2026-01-02", duration: "10:21" },
                        ],
                    }
                ],
            },
            {
                id: 1,
                login: "jocimara.neves",
                channels: [
                    {
                        name: "Fernanda Rocha",
                        username: "fernandar",
                        videos: [
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 1", url: "https://youtu.be/video1", published_at: "2026-01-01", duration: "12:34" },
                            { thumb: "https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg", title: "Video 2", url: "https://youtu.be/video2", published_at: "2026-01-02", duration: "10:21" },
                        ],
                    },
                ],
            },
        ];
    }

    useEffect(() => {
        setChannels(getData());
    }, []);

    // Pega o usuário selecionado
    const selectedUser = channels[parseInt(selected)] || { channels: [] };


    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-3 via-primary-2 to-primary-3">
            <div className="container mx-auto py-27">

                <section>
                    <div className="flex justify-center items-center gap-9">
                        <img className="min-w-[600px] rounded-lg" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg" alt="" />
                        <div className="flex flex-col gap-4 text-white">
                            <p className="font-bold">ESSE É O TÍTULO DO VÍDEO QUE FICOU LONGO E TEVE QUE QUEBRAR LINHA POR MAIS DE UMA VEZ</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p>URL: Visitar</p>
                                    <p>Duração: 2:24:04</p>
                                    <p>Publicado: 3 dias</p>
                                </div>
                            </div>
                            <Button size="lg"><RefreshCcw /> Processar Cortes</Button>
                        </div>
                    </div>
                </section>
                <section className="mt-8 p-8 w-full rounded-lg bg-primary-6">
                    <Button className="self-end mb-8"><Download />Baixar todos</Button>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-primary-6">
                                <TableHead className="text-primary-1 w-[200px]">Thumb</TableHead>
                                <TableHead className="text-primary-1">Título</TableHead>
                                <TableHead className="text-primary-1">Descrição</TableHead>
                                <TableHead className="text-primary-1">Duração</TableHead>
                                <TableHead className="text-primary-1">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="hover:bg-primary-5">
                                <TableCell className="text-primary-1">
                                    <img className="min-w-[200px] rounded-lg" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg" alt="" />
                                </TableCell>
                                <TableCell className="text-primary-1 truncate">ESSE É O TÍTULO DO VÍDEO QUE FICOU LONGO E TEVE QUE QUEBRAR LINHA POR MAIS DE UMA VEZ</TableCell>
                                <TableCell className="text-primary-1">
                                    <a className="font-bold" target="_blank" rel="noreferrer">Visitar</a>
                                </TableCell>
                                <TableCell className="text-primary-1">23:32</TableCell>
                                <TableCell className="text-primary-1">
                                    <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">
                                        <Download />
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-primary-5">
                                <TableCell className="text-primary-1">
                                    <img className="min-w-[200px] rounded-lg" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg" alt="" />
                                </TableCell>
                                <TableCell className="text-primary-1 truncate max-w-54">ESSE É O TÍTULO DO VÍDEO QUE FICOU LONGO E TEVE QUE QUEBRAR LINHA POR MAIS DE UMA VEZ</TableCell>
                                <TableCell className="text-primary-1">
                                    <a className="font-bold" target="_blank" rel="noreferrer">Visitar</a>
                                </TableCell>
                                <TableCell className="text-primary-1">23:32</TableCell>
                                <TableCell className="text-primary-1">
                                    <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">
                                        <Download />
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-primary-5">
                                <TableCell className="text-primary-1">
                                    <img className="min-w-[200px] rounded-lg" src="https://i.ytimg.com/vi/SsEeLqKalvU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAFLZtaTDARiu0hiIFfAxTTa2AGJg" alt="" />
                                </TableCell>
                                <TableCell className="text-primary-1 truncate max-w-54">ESSE É O TÍTULO DO VÍDEO QUE FICOU LONGO E TEVE QUE QUEBRAR LINHA POR MAIS DE UMA VEZ</TableCell>
                                <TableCell className="text-primary-1">
                                    <a className="font-bold" target="_blank" rel="noreferrer">Visitar</a>
                                </TableCell>
                                <TableCell className="text-primary-1">23:32</TableCell>
                                <TableCell className="text-primary-1">
                                    <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">
                                        <Download />
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </section>
            </div>
        </div>
    );
}
