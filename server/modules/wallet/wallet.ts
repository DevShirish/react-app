import dbManager, { DBManager } from "../../db";
import { WalletErrors } from "../../errors/wallet";
import { createNewWallet, hasWalletByName, updateWallet } from "./queries";

class Wallet {
    async create(name: string, balance: number) {
        try {
            return await dbManager.getConnection().query(createNewWallet(name, balance))
        } catch(e) {
            throw WalletErrors.UNABLE_TO_CREATE_WALLET
        }
    }

    async hasWallet(name: string) {
        try {
            return await dbManager.getConnection().query(hasWalletByName(name))
        } catch(e) {
            throw WalletErrors.UNABLE_TO_FIND_WALLET
        }
    }

    async update(walletId: number, balance: number) {
        try {
            return await dbManager.getConnection().query(updateWallet(walletId, balance))
        } catch(e) {
            throw WalletErrors.UNABLE_TO_UPDATE_WALLET
        }
    }
}

const walletRepo = new Wallet()

export default walletRepo