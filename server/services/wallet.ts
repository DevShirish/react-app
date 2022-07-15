import transactWalletRepo from "../modules/transact-wallet";

class WalletService {
    async initializeWallet(name: string, balance: number) {
        const res = await transactWalletRepo.createWalletAndTransact(name, balance);
        console.log('initializeWallet 1', res);
        return res
    }
}

const walletService = new WalletService()
export default walletService