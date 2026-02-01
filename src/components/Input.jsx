import { GitHubLogoIcon, DiscordLogoIcon, ArrowRightIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Input({ type = "text", placeholder, ...rest }) {
  const isPassword = type === "password";
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="relative">
      <input
        type={isPassword && showPwd ? "text" : type}
        placeholder={placeholder}
        {...rest}
        className="px-4 sm:px-6 p-3 sm:p-4
                   bg-primary-4 w-full rounded-lg
                   text-primary-1
                   focus:outline-none focus:ring-2 focus:ring-primary-2"
      />

      {isPassword && (
        <span
          onClick={() => setShowPwd(!showPwd)}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     rounded-full p-2 hover:bg-primary-2
                     text-primary-1 cursor-pointer"
        >
          {showPwd ? (
            <EyeOpenIcon className="size-4" />
          ) : (
            <EyeClosedIcon className="size-4" />
          )}
        </span>
      )}
    </div>
  );
}
