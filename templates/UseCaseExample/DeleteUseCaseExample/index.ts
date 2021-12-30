import { {{.Name}}sRepository } from '../../../repositories/{{.Name}}sRepository'
import { Delete{{.Name}}UseCase } from './Delete{{.Name}}UseCase'
import { Delete{{.Name}}Controller } from './Delete{{.Name}}Controller'

const {{.name}}sRepository = new {{.Name}}sRepository()
const delete{{.Name}}UseCase = new Delete{{.Name}}UseCase({{.name}}sRepository)
const delete{{.Name}}Controller = new Delete{{.Name}}Controller(delete{{.Name}}UseCase)

export { delete{{.Name}}Controller }
