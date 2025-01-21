"use client";

import { tsr } from "../helpers/tsr";

interface WalletBalanceProps {
  ownerAddress: string;
}

export default function WalletBalance({ ownerAddress }: WalletBalanceProps) {
  const { data, isLoading } = tsr.account.getBalance.useQuery({
    queryKey: ["/account/balance"],
    queryData: {
      query: {
        ownerAddress,
      },
    },
  });
  return <div>Balance: {isLoading ? "Loading..." : data?.body} SOL</div>;
}
