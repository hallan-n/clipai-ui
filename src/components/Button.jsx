export default function Button({ text, icon }) {
  return (
    <button
      className={`${icon ? "flex items-center gap-4 justify-center" : ""}
                  cursor-pointer w-full font-bold text-white
                  px-4 sm:px-6 p-3 sm:p-4
                  bg-primary-4 hover:bg-primary-3
                  rounded-lg transition`}
    >
      <p>{text}</p>
      {icon}
    </button>
  );
}
