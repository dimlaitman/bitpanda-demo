"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";

export default function CryptoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const solanaConnectors = toSolanaWalletConnectors();
  return (
    <PrivyProvider
      appId="cm62lpphx016jyf6a6ia5om7g"
      config={{
        appearance: {
          accentColor: "#27d17f",
          theme: "#000000",
          showWalletLoginFirst: true,
          walletChainType: "solana-only",
          walletList: ["detected_solana_wallets", "phantom"],
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
        loginMethods: ["wallet", "email"],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
