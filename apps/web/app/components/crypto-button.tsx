"use client";

import { usePrivy } from "@privy-io/react-auth";

export function CryptoButton() {
  const { login, logout, authenticated } = usePrivy();

  return (
    <button
      className="bg-[#27d17f] hover:bg-[#146940]/90 text-black font-semibold px-8 py-4 rounded-xl w-full"
      onClick={authenticated ? logout : login}
    >
      {authenticated ? "Disconnect" : "Connect"}
    </button>
  );
}
