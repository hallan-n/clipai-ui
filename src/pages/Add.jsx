import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



export default function Add() {
  return (
    <div className="h-screen w-full bg-zinc-600 flex items-center">




      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar seu canal</DialogTitle>
              <DialogDescription>Basta colar o link do seu canal
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="url">URL</Label>
                <Input id="url" name="url" placeholder="https://www.youtube.com/@seucanal" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Salvar canal</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>



      <Dialog >
        <form>
          <DialogTrigger asChild >
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="bg-primary-1 border-none text-primary-6">
            <DialogHeader>
              <DialogTitle>Adicionar um canal fonte</DialogTitle>
              <DialogDescription>Basta colar o link do canal fonte e preencher as informações</DialogDescription>
            </DialogHeader>
            <FieldGroup>




              <Field>
                <Label htmlFor="url">URL</Label>
                <Input className="p-3" id="url" name="url" placeholder="https://www.youtube.com/@suafonte" />
              </Field>

              <div className="flex gap-2">

                <Field>
                  <Label htmlFor="content_format">Formato dos vídeos</Label>
                  <Select value="lives" id="content_format" name="content_format" >
                    <SelectTrigger className="cursor-pointer text-white font-bold w-full bg-primary-6 border-none rounded-lg p-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lives">Lives</SelectItem>
                      <SelectItem value="entrevistas">Entrevistas</SelectItem>
                      <SelectItem value="vlogs">Vlogs</SelectItem>
                      <SelectItem value="podcasts">Podcasts</SelectItem>
                      <SelectItem value="reacts">Reacts</SelectItem>
                      <SelectItem value="documentários">Documentários</SelectItem>
                      <SelectItem value="bastidores">Bastidores</SelectItem>
                      <SelectItem value="debates">Debates</SelectItem>
                      <SelectItem value="análises">Análises</SelectItem>
                      <SelectItem value="reviews">Reviews</SelectItem>
                      <SelectItem value="tutoriais">Tutoriais</SelectItem>
                      <SelectItem value="cortes">Cortes</SelectItem>
                      <SelectItem value="opiniões">Opiniões</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>


              </div>
              <div className="flex gap-2">

                <Field>
                  <Label htmlFor="target_audience">Foco do conteúdo</Label>
                  <Select value="entretenimento" id="target_audience" name="target_audience" >
                    <SelectTrigger className="cursor-pointer text-white font-bold w-full bg-primary-6 border-none rounded-lg p-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entretenimento">Entretenimento</SelectItem>
                      <SelectItem value="política">Política</SelectItem>
                      <SelectItem value="notícias">Notícias</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="economia">Economia</SelectItem>
                      <SelectItem value="esportes">Esportes</SelectItem>
                      <SelectItem value="saúde">Saúde</SelectItem>
                      <SelectItem value="ciência">Ciência</SelectItem>
                      <SelectItem value="educação">Educação</SelectItem>
                      <SelectItem value="cultura">Cultura</SelectItem>
                      <SelectItem value="meio">Meio ambiente</SelectItem>
                      <SelectItem value="internacional">Internacional</SelectItem>
                      <SelectItem value="negócios">Negócios</SelectItem>
                      <SelectItem value="curiosidades">Curiosidades</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <Label htmlFor="upload_frequency">Frequencia do conteúdo</Label>
                  <Select value="diario" id="upload_frequency" name="upload_frequency" >
                    <SelectTrigger className="cursor-pointer text-white font-bold w-full bg-primary-6 border-none rounded-lg p-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diario">Diário</SelectItem>
                      <SelectItem value="semanal">Semanal</SelectItem>
                      <SelectItem value="mensal">Mensal</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>


            </FieldGroup>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Salvar canal</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
