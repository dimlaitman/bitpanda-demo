import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const accountContract = c.router({
  getBalance: {
    method: "GET",
    path: "/account/balance",
    responses: {
      200: z.string(),
    },
    query: z.object({
      ownerAddress: z.string().nonempty(),
    }),
  },
  getTokenBalance: {
    method: "GET",
    path: "/account/token-balance",
    responses: {
      200: z.object({
        tokenAccounts: z.any(),
      }),
    },
    query: z.object({
      ownerAddress: z.string().nonempty(),
    }),
  },
});

export const contract = c.router({
  account: accountContract,
});
