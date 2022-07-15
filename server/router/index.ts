import { Router } from "express";
import walletRoute from "./wallet";

class Routes {
    init() {
        const router: Router = Router()
        router.use('/', walletRoute.init())
        return router
    }
}

const routes = new Routes()
export default routes