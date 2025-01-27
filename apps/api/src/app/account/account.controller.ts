import { Controller } from '@nestjs/common';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { AccountService } from './account.service';
import { contract } from '@solpanda/contracts';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @TsRestHandler(contract.account.getBalance)
  async getBalance() {
    return tsRestHandler(contract.account.getBalance, async ({ query }) => {
      const ownerAddress = query.ownerAddress;

      if (!ownerAddress) {
        return { status: 400, body: { message: 'ownerAddress is required' } };
      }

      const balance = await this.accountService.getBalance(ownerAddress);
      return { status: 200, body: balance };
    });
  }

  @TsRestHandler(contract.account.getTokenBalance)
  async getTokenBalance() {
    return tsRestHandler(
      contract.account.getTokenBalance,
      async ({ query }) => {
        const ownerAddress = query.ownerAddress;

        if (!ownerAddress) {
          return { status: 400, body: { message: 'ownerAddress is required' } };
        }

        const tokenBalance =
          await this.accountService.getTokenAccountsByOwner(ownerAddress);

        const jsonCompatibleTokenBalance = JSON.parse(
          JSON.stringify(tokenBalance, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value,
          ),
        );

        return {
          status: 200,
          body: jsonCompatibleTokenBalance,
        };
      },
    );
  }
}
