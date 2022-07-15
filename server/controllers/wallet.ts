import { Request, Response } from 'express'
import walletService from "../services/wallet";

export class WalletController {
    async create(req: Request, res: Response) {
        const {body: { name, balance}} = req
        try {
            const result = await walletService.initializeWallet(name, balance)
            res.sendStatus(200).send(res)
        } catch(e) {

        }
    }
}

const walletController = new WalletController

export default walletController