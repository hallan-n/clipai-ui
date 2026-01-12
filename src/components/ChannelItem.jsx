import { ArrowRight } from "lucide-react";

export default function ChannelItem({ avatar, name, url }) {
    return (
        <div className="bg-gray-700 text-gray-300 p-4 rounded-lg">
            <div className="flex justify-between items-center gap-4">
                <div className="flex gap-3">
                    <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
                    <div>
                        <span className="font-extrabold">{name}</span>
                        <p className="text-xs text-gray-400">{url}</p>
                    </div>
                </div>
            <div className="cursor-pointer hover:bg-gray-900 p-2 rounded-full">
                <ArrowRight />
            </div>
            </div>
        </div>
    )
}