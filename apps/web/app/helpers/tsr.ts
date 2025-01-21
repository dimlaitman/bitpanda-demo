import { initTsrReactQuery } from "@ts-rest/react-query/v5";
import { contract } from "@bitpanda-demo/contracts";

export const tsr = initTsrReactQuery(contract, {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
  baseHeaders: {
    "x-app-source": "ts-rest",
  },
});
