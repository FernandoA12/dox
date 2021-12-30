import { {{.Name}} } from '../../../entities/{{.Name}}'
import { I{{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'

export interface IGetAll{{.Name}}UseCase {
  execute(): Promise<Omit<{{.Name}}, 'password'>[]>
}

export class GetAll{{.Name}}UseCase implements IGetAll{{.Name}}UseCase {
  constructor (private {{.name}}sRepository: I{{.Name}}sRepository) {}

  async execute () {
    const {{.name}}s = await this.{{.name}}sRepository.getAll()
    if (!{{.name}}s) {
      throw new Error('Houve um erro ao buscar os dados! Tente novamente mais tarde!')
    }
    return {{.name}}s
  }
}
