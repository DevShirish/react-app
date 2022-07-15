import dBManager from "../../db";
import transactRepo from "../transact/transact";
import walletRepo from "../wallet/wallet";

class TransactWallet {
  async createWalletAndTransact(name: string, balance: number) {
    const res = await dBManager.getConnection().task(async (dbConnection) => {
      const walletRes = await walletRepo.create(name, balance);
      const { id } = await transactRepo.create(
        walletRes.id,
        balance
      );
      return {
        name,
        balance,
        transactionId: id,
      };
    });
    return res;
  }
}

const transactWalletRepo = new TransactWallet();
export default transactWalletRepo;
