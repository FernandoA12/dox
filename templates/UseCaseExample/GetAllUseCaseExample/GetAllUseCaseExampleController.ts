import { Request, Response } from 'express'
import { IGetAll{{.Name}}UseCase } from './GetAll{{.Name}}UseCase'

export class GetAll{{.Name}}Controller {
  constructor (private getAll{{.Name}}UseCase: IGetAll{{.Name}}UseCase) {}

  async handle (_req: Request, res: Response) {
    try {
      const {{.name}}s = await this.getAll{{.Name}}UseCase.execute()
      res.status(200).json({{.name}}s)
    } catch (err: any) {
      console.log(err)
      res.status(400).json(err.message || err)
    }
  }
}
