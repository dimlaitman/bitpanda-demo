import { Injectable } from '@nestjs/common';
import { createSolanaRpc, address } from '@solana/web3.js';

@Injectable()
export class AccountService {
  private solanaRpc = createSolanaRpc(
    'https://fragrant-boldest-tent.solana-mainnet.quiknode.pro/ef75c9532790eb964cf440cbd1408127212eaee3',
  );

  async getBalance(ownerAddress: string): Promise<string> {
    const decodedAddress = decodeURIComponent(ownerAddress);
    const searchAddress = address(decodedAddress);
    const { value: lamports } = await this.solanaRpc
      .getBalance(searchAddress)
      .send();

    return lamports.toString();
  }

  async getTokenAccountsByOwner(ownerAddress: string): Promise<any> {
    const decodedOwnerAddress = decodeURIComponent(ownerAddress);
    const ownerPublicKey = address(decodedOwnerAddress);
    const programId = address('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
    try {
      const { value: tokenAccounts } = await this.solanaRpc
        .getTokenAccountsByOwner(
          ownerPublicKey,
          { programId },
          { encoding: 'jsonParsed' },
        )
        .send();

      return tokenAccounts;
    } catch (error) {
      console.error('Error fetching token accounts by owner:', error);
      throw new Error('Failed to fetch token balance');
    }
  }
}
