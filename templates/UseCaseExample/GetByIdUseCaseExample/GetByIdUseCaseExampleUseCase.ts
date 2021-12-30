import { {{.Name}} } from '../../../entities/{{.Name}}'
import { I{{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'

export interface IGetById{{.Name}}UseCase {
  execute(id: string): Promise<{{.Name}}>
}

export class GetById{{.Name}}UseCase implements IGetById{{.Name}}UseCase {
  constructor (private {{.name}}sRepository: I{{.Name}}sRepository) {}

  async execute (id: string) {
    const {{.name}} = await this.{{.name}}sRepository.getOne(id)
    if (!{{.name}}) {
      throw new Error('Houve um erro ao buscar os dados! Tente novamente mais tarde!')
    }
    return {{.name}}
  }
}
