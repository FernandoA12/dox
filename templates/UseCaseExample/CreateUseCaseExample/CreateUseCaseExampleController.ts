import { Request, Response } from 'express'
import { ICreate{{.Name}}UseCase } from './Create{{.Name}}UseCase'

export class Create{{.Name}}Controller {
  constructor (private create{{.Name}}UseCase: ICreate{{.Name}}UseCase) {}

  async handle (req: Request, res: Response) {
    try {
      const {{.name}} = await this.create{{.Name}}UseCase.execute(req.body)
      res.status(201).json({{.name}})
    } catch (err: any) {
      console.log(err)
      res.status(400).json(err.message || err)
    }
  }
}
