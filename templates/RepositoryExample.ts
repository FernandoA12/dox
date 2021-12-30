import {{.Name}}Model from '../schemas/{{.Name}}Schema'
import { {{.Name}} } from '../entities/{{.Name}}'

export interface I{{.Name}}sRepository {
  save(data: {{.Name}}): Promise<{{.Name}}>
  getAll(): Promise<{{.Name}}[]>
  getOne(id: string): Promise<{{.Name}} | null>
  update(id: string, data: {{.Name}}): Promise<Boolean>
  delete(id: string): Promise<Boolean>
}

export class {{.Name}}sRepository implements I{{.Name}}sRepository {
  async save (data: {{.Name}}) {
    const response = await {{.Name}}Model.create(data)
    return response.toObject()
  }

  async getAll () {
    return await {{.Name}}Model.find()
      .map({{.name}} => {{.name}}?.toObject())
  }

  async getOne (id: string) {
    const {{.name}} = await {{.Name}}Model.findById(id)
    if (!{{.name}}) return null
    return {{.name}}?.toObject()
  }

  async update (id: string, data: {{.Name}}) {
    const response = await {{.Name}}Model.updateOne({ _id: id }, { $set: data })
    return response.nModified > 0
  }

  async delete (id: string) {
    const { deletedCount } = await {{.Name}}Model.deleteOne({ _id: id })
    if (!deletedCount) return false
    return deletedCount > 0
  }
}
