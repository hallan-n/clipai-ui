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

import { Plus } from "lucide-react"



export default function AddChannel() {
    return (

        <Dialog >
            <form className="w-full">
                <DialogTrigger asChild >
                    <Button className="w-full h-15"><Plus />Adicionar um canal</Button>
                </DialogTrigger>
                <DialogContent className="bg-primary-1 border-none text-primary-6">
                    <DialogHeader>
                        <DialogTitle>Adicionar seu canal</DialogTitle>
                        <DialogDescription>Basta colar o link do seu canal</DialogDescription>
                    </DialogHeader>
                    <FieldGroup>




                        <Field>
                            <Label htmlFor="url">URL</Label>
                            <Input className="p-3" id="url" name="url" placeholder="https://www.youtube.com/@seucanal" />
                        </Field>

                    </FieldGroup>
                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button className="bg-gray-600 hover:bg-gray-800" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Salvar canal</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
