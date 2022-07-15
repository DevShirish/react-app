import { Response, Request, NextFunction } from 'express'

export const ErrorHandlingWrapper = {
  catchErrors: (func: (req: Request, res: Response, next: NextFunction) => any) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const routePromise = func(req, res, next)
      if (routePromise.catch) {
        routePromise.catch(err => {
          next(err)
        })
      }
    }
  }
}
