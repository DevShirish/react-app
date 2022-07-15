import { Router } from 'express'
import { ErrorHandlingWrapper } from '../utils/ErrorHandlingWrapper'

class TransactRoute {

    init() {
        const router: Router = Router()
        router.post('', ErrorHandlingWrapper.catchErrors(transactContr))
    }
}

const transactRoute = new TransactRoute()
export default transactRoute