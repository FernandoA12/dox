import { I{{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { IUpdate{{.Name}}DTO } from './Update{{.Name}}DTO'

export interface IUpdate{{.Name}}UseCase {
  execute(id: string, data: IUpdate{{.Name}}DTO): Promise<void>
}

export class Update{{.Name}}UseCase implements IUpdate{{.Name}}UseCase {
  constructor (private {{.name}}sRepository: I{{.Name}}sRepository) {}

  async execute (id: string, data: IUpdate{{.Name}}DTO) {
    const response = await this.{{.name}}sRepository.update(id, data)
    if (!response) throw new Error('Houve um erro ao processar a alteração! Tente novamente mais tarde!')
  }
}
