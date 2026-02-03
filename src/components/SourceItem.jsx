import { TrashIcon } from "@radix-ui/react-icons"

export default function SourceItem({ name, username }) {
  return (
    <button
      type="button"
      className="
        flex w-full items-center justify-between gap-4
        p-4 px-6 rounded-lg text-left text-nowrap
        bg-primary-6
        data-[state=active]:bg-primary-4
      "
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary-5 rounded-lg" />
        <div>
          <p className="font-extrabold text-white">{name}</p>
          <p className="text-primary-2 text-sm">@{username}</p>
        </div>
      </div>

      <div className="cursor-pointer p-2 rounded-lg hover:bg-primary-3 text-primary-2 hover:text-primary-6">
        <TrashIcon className="size-7" />
      </div>
    </button>
  )
}
