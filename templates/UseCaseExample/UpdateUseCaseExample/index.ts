import { {{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { Update{{.Name}}UseCase } from './Update{{.Name}}UseCase'
import { Update{{.Name}}Controller } from './Update{{.Name}}Controller'

const {{.name}}sRepository = new {{.Name}}sRepository()
const update{{.Name}}UseCase = new Update{{.Name}}UseCase({{.name}}sRepository)
const update{{.Name}}Controller = new Update{{.Name}}Controller(update{{.Name}}UseCase)

export { update{{.Name}}Controller }
