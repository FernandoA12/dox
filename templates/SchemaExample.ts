import { {{.Name}} } from '../entities/{{.Name}}'
import mongoose from '../config/mongodb'

export type {{.Name}}Document = {{.Name}} & mongoose.Document

const {{.Name}}Schema = new mongoose.Schema<{{.Name}}Document>(
  {},
  {
    versionKey: false
  }
)

export default mongoose.model<{{.Name}}Document>('{{.Name}}', {{.Name}}Schema)
