"use client";

import { usePrivy } from "@privy-io/react-auth";

export function LoginButton() {
  const { login, logout, authenticated } = usePrivy();

  return (
    <button
      className="bg-[#27d17f] hover:bg-[#146940]/90 text-black font-semibold px-8 py-4 rounded-xl"
      onClick={authenticated ? logout : login}
    >
      {authenticated ? "Disconnect" : "Connect"}
    </button>
  );
}
