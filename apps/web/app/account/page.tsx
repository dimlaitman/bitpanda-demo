"use client";

import { usePrivy } from "@privy-io/react-auth";
import WalletBalance from "../components/wallet-balance";
import WalletCoinsBalance from "../components/wallet-coins-balance";
import { CryptoButton } from "../components/crypto-button";

export default function UserInfo() {
  const { user } = usePrivy();

  if (!user) {
    return <LoadingState />;
  }

  const walletInfo = extractWalletInfo(user);

  return (
    <main className="flex flex-col bg-black text-white w-[420px] h-full justify-between overflow-y-auto overflow-x-hidden">
      <UserDetails user={user} walletInfo={walletInfo} />
      <WalletDetails walletInfo={walletInfo} />
      <CryptoButton />
    </main>
  );
}

const LoadingState = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <span className="text-gray-400">Loading...</span>
  </div>
);

const extractWalletInfo = (user: any) => ({
  address: user.wallet?.address || "Not available",
  chainType: user.wallet?.chainType || "Not available",
  walletClientType: user.wallet?.walletClientType || "Not available",
  connectorType: user.wallet?.connectorType || "Not available",
});

const UserDetails = ({ user, walletInfo }: { user: any; walletInfo: any }) => (
  <div className="p-1 space-y-1">
    <UserId userId={user.id} />
    <UserAddress address={walletInfo.address} />
    <div className="bg-zinc-800 h-px" />
  </div>
);

const UserId = ({ userId }: { userId: string }) => (
  <div className="space-y-1">
    <label className="text-xs text-gray-400">User ID</label>
    <div className="bg-zinc-800 p-2 rounded-lg break-all text-xs">{userId}</div>
  </div>
);

const UserAddress = ({ address }: { address: string }) => (
  <div className="space-y-2">
    <label className="text-xs text-gray-400">Address</label>
    <div className="flex items-center gap-1 bg-zinc-800 p-2 rounded-lg">
      <code className="text-[#00E18F] flex-1 text-xs">{address}</code>
      <ActionButtons />
    </div>
  </div>
);

const ActionButtons = () => (
  <>
    <button className="hover:text-[#00E18F] p-1 rounded-lg">
      <div className="h-3 w-3" />
    </button>
    <button className="hover:text-[#00E18F] p-1 rounded-lg">
      <div className="h-3 w-3" />
    </button>
  </>
);

const WalletDetails = ({ walletInfo }: { walletInfo: any }) => (
  <div className="grid gap-2">
    <WalletDetail label="Chain Type" value={walletInfo.chainType} />
    <WalletDetail
      label="Wallet Client Type"
      value={walletInfo.walletClientType}
    />
    <WalletDetail label="Connector Type" value={walletInfo.connectorType} />
    <div className="bg-zinc-800 h-px" />
    <APIBalance ownerAddress={walletInfo.address} />
    <APICoins ownerAddress={walletInfo.address} />
  </div>
);

const WalletDetail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <label className="text-xs text-gray-400">{label}</label>
    <div className="bg-zinc-800 p-2 rounded-lg mt-1 text-xs">{value}</div>
  </div>
);

const APIBalance = ({ ownerAddress }: { ownerAddress: string }) => (
  <div>
    <label className="text-xs text-gray-400">API Fetched Balance</label>
    <div className="bg-zinc-800 p-2 rounded-lg mt-1 text-xs">
      <WalletBalance ownerAddress={ownerAddress} />
    </div>
  </div>
);

const APICoins = ({ ownerAddress }: { ownerAddress: string }) => (
  <div>
    <label className="text-xs text-gray-400">API Fetched Coins</label>
    <pre className="bg-zinc-800 p-2 rounded-lg mt-1 text-xs">
      <WalletCoinsBalance ownerAddress={ownerAddress} />
    </pre>
  </div>
);
