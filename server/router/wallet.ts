import { Router } from 'express'
import walletController from '../controllers/wallet'
import { ErrorHandlingWrapper } from '../utils/ErrorHandlingWrapper'

class WalletController {

    init() {
        const router: Router = Router()
        router.post('/setup', ErrorHandlingWrapper.catchErrors(walletController.create))
        return router
    }
}

const walletRoute = new WalletController()
export default walletRoute