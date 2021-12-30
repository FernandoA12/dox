import { Request, Response } from 'express'
import { IDelete{{.Name}}UseCase } from './Delete{{.Name}}UseCase'

export class Delete{{.Name}}Controller {
  constructor (private delete{{.Name}}UseCase: IDelete{{.Name}}UseCase) {}

  async handle (req: Request, res: Response) {
    try {
      await this.delete{{.Name}}UseCase.execute({ _id: req.params.id })
      res.status(200).json({ deleted: true })
    } catch (err: any) {
      console.log(err)
      res.status(400).json(err.message || err)
    }
  }
}
