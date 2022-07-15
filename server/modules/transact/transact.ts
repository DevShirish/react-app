import dbManager, { DBManager } from "../../db";
import { createTransact } from "./queries";
import { TransactionType } from "./types/TransactionType";

class Transact {
    async create(walletId: number, amount: number) {
        await dbManager.getConnection().query(createTransact(walletId, amount))
    }
}

const transactRepo = new Transact

export default transactRepo