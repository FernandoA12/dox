import { {{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { Create{{.Name}}UseCase } from './Create{{.Name}}UseCase'
import { Create{{.Name}}Controller } from './Create{{.Name}}Controller'

const {{.name}}sRepository = new {{.Name}}sRepository()
const create{{.Name}}UseCase = new Create{{.Name}}UseCase({{.name}}sRepository)
const create{{.Name}}Controller = new Create{{.Name}}Controller(create{{.Name}}UseCase)

export { create{{.Name}}Controller }
