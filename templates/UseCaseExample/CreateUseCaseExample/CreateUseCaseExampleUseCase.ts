import { {{.Name}} } from '../../../entities/{{.Name}}'
import { I{{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { ICreate{{.Name}}DTO } from './Create{{.Name}}DTO'

export interface ICreate{{.Name}}UseCase {
  execute(data: ICreate{{.Name}}DTO): Promise<{{.Name}}>
}

export class Create{{.Name}}UseCase implements ICreate{{.Name}}UseCase {
  constructor (private {{.name}}sRepository: I{{.Name}}sRepository) {}

  async execute (data: ICreate{{.Name}}DTO) {
    const {{.name}}DTO = new {{.Name}}(data)
    const {{.name}} = await this.{{.name}}sRepository.save({{.name}}DTO)
    if (!{{.name}}) {
      throw new Error('Houve um erro ao processar o cadastro! Tente novamente mais tarde!')
    }
    return {{.name}}
  }
}
