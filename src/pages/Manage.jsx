import SourceItem from "@/components/SourceItem";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCw } from "lucide-react";
import AddSource from "@/components/AddSource";
import AddChannel from "@/components/AddChannel";

export default function Manage() {
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
      <div className="container mx-auto pt-27">
        <section>
          <h1 className="text-white text-2xl font-bold mb-4">Mudar de canal</h1>
          <div className="flex gap-4">
            <Select value={selected} onValueChange={setSelected}>
              <SelectTrigger className="h-15 cursor-pointer text-white font-bold w-full bg-primary-6 border-none rounded-lg px-6">
                <SelectValue className="text-white font-bold" />
              </SelectTrigger>
              <SelectContent className="bg-primary-5 border-none p-2">
                {channels.map((item, index) => (
                  <SelectItem
                    key={item.id}
                    value={index.toString()}
                    className="cursor-pointer font-bold text-white hover:text-black p-4 px-6 rounded-lg"
                  >
                    {item.login}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          
            <AddChannel />

            <AddSource />          
            
          </div>
        </section>

        <hr className="border-1 border-primary-6 my-8" />

        <section>
          <h1 className="text-white text-2xl font-bold mb-4">Suas fontes</h1>

          <Tabs defaultValue="channel-0" className="flex gap-4">
            <div className="overflow-y-scroll max-h-[500px]">
              <TabsList className="flex flex-col h-fit bg-transparent p-0 rounded-none">
                {selectedUser.channels.map((channel, idx) => (
                  <TabsTrigger
                    key={idx}
                    value={`channel-${idx}`}
                    className="p-1 data-[state=active]:bg-primary-1 rounded-lg w-full justify-start"
                  >
                    <SourceItem name={channel.name} username={channel.username} />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="flex-1">
              {selectedUser.channels.map((channel, idx) => (
                <TabsContent key={idx} value={`channel-${idx}`}>
                  <div className="bg-primary-6 p-6 rounded-lg">
                    <h3 className="text-2xl text-white font-bold mb-4">
                      Últimos vídeos de {channel.name}
                    </h3>
                    <div className="overflow-y-scroll max-h-[400px]">
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
                          {channel.videos.map((video, vIdx) => (
                            <TableRow key={vIdx} className="hover:bg-primary-5">
                              <TableCell className="text-primary-1 w-[200px]">
                                <img
                                  className="w-full aspect-video object-cover"
                                  src={video.thumb}
                                  alt={video.title}
                                />
                              </TableCell>
                              <TableCell className="text-primary-1 truncate">{video.title}</TableCell>
                              <TableCell className="text-primary-1">
                                <a className="font-bold" href={video.url} target="_blank" rel="noreferrer">
                                  Visitar
                                </a>
                              </TableCell>
                              <TableCell className="text-primary-1">{video.published_at}</TableCell>
                              <TableCell className="text-primary-1">{video.duration}</TableCell>
                              <TableCell className="text-primary-1">
                                <div className="flex items-center justify-center rounded-lg cursor-pointer hover:text-primary-6 hover:bg-primary-1 w-8 h-8">
                                  <RefreshCw />
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
