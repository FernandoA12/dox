import { Request, Response } from 'express'
import { IUpdate{{.Name}}UseCase } from './Update{{.Name}}UseCase'

export class Update{{.Name}}Controller {
  constructor (private update{{.Name}}Case: IUpdate{{.Name}}UseCase) {}

  async handle (req: Request, res: Response) {
    try {
      await this.update{{.Name}}Case.execute(req.params.id, req.body)
      res.status(201).json({ updated: true })
    } catch (err: any) {
      console.log(err)
      res.status(400).json(err.message || err)
    }
  }
}
