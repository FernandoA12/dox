import { {{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { GetById{{.Name}}UseCase } from './GetById{{.Name}}UseCase'
import { GetById{{.Name}}Controller } from './GetById{{.Name}}Controller'

const {{.name}}sRepository = new {{.Name}}sRepository()
const getById{{.Name}}UseCase = new GetById{{.Name}}UseCase({{.name}}sRepository)
const getById{{.Name}}Controller = new GetById{{.Name}}Controller(getById{{.Name}}UseCase)

export { getById{{.Name}}Controller }
