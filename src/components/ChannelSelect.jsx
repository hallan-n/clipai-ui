export default function ChannelSelect({ avatar, name }) {
    return (
        <div className="flex items-center gap-3 text-gray-300 p-4 rounded-lg">
            <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
            <span className="font-extrabold">{name}</span>
        </div>
    )
}