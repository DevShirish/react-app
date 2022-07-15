import db from "../db";
import { TransactionErrors } from "../errors/transaction";
import transactRepo from "../modules/transact";

class TransactionService {
    async transact(walletId: number, amount: number) {
        if (amount === 0) {
            throw TransactionErrors.INVALID_AMOUNT
        }
        const transaction = await transactRepo.create(walletId, amount)
        return transaction
    }
}

const transactService = new TransactionService()