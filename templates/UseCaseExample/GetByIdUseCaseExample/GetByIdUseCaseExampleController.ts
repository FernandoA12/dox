import { Request, Response } from 'express'
import { IGetById{{.Name}}UseCase } from './GetById{{.Name}}UseCase'

export class GetById{{.Name}}Controller {
  constructor (private getById{{.Name}}UseCase: IGetById{{.Name}}UseCase) {}

  async handle (req: Request, res: Response) {
    try {
      const {{.name}} = await this.getById{{.Name}}UseCase.execute(req.params.id)
      res.status(200).json({{.name}})
    } catch (err: any) {
      console.log(err)
      res.status(400).json(err.message || err)
    }
  }
}
