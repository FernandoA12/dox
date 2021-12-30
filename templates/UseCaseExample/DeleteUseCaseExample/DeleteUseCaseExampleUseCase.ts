import { I{{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { IDelete{{.Name}}DTO } from './Delete{{.Name}}DTO'

export interface IDelete{{.Name}}UseCase {
  execute(data: IDelete{{.Name}}DTO): Promise<void>
}

export class Delete{{.Name}}UseCase implements IDelete{{.Name}}UseCase {
  constructor (private {{.Name}}sRepository: I{{.Name}}sRepository) {}

  async execute (data: IDelete{{.Name}}DTO) {
    const response = await this.{{.Name}}sRepository.delete(data)
    if (!response) {
      throw new Error('Houve um erro ao tentar remover o registro! Tente novamente mais tarde!')
    }
  }
}
