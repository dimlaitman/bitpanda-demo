"use client";

import { tsr } from "../helpers/tsr";

interface WalletCoinsBalanceProps {
  ownerAddress: string;
}

export default function WalletCoinsBalance({
  ownerAddress,
}: WalletCoinsBalanceProps) {
  const { data, isLoading } = tsr.account.getTokenBalance.useQuery({
    queryKey: ["/account/balance-coins"],
    queryData: {
      query: {
        ownerAddress,
      },
    },
  });

  const formattedCoins = isLoading
    ? "Loading..."
    : JSON.stringify(data?.body, null, 1);

  return <pre className="text-[0.5rem] w-[375px] flex">{formattedCoins}</pre>;
}
