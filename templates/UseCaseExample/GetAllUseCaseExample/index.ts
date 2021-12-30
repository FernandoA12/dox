import { {{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { GetAll{{.Name}}UseCase } from './GetAll{{.Name}}UseCase'
import { GetAll{{.Name}}Controller } from './GetAll{{.Name}}Controller'

const {{.name}}sRepository = new {{.Name}}sRepository()
const getAll{{.Name}}UseCase = new GetAll{{.Name}}UseCase({{.name}}sRepository)
const getAll{{.Name}}Controller = new GetAll{{.Name}}Controller(getAll{{.Name}}UseCase)

export { getAll{{.Name}}Controller }
