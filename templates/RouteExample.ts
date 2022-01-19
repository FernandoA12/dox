import { Router } from 'express'

import { create{{.Name}}Controller } from '../useCases/{{.Name}}/Create{{.Name}}'
import { update{{.Name}}Controller } from '../useCases/{{.Name}}/Update{{.Name}}'
import { delete{{.Name}}Controller } from '../useCases/{{.Name}}/Delete{{.Name}}'
import { getById{{.Name}}Controller } from '../useCases/{{.Name}}/GetById{{.Name}}'
import { getAll{{.Name}}Controller } from '../useCases/{{.Name}}/GetAll{{.Name}}'

const Routes = Router()

Routes
  .route('/{{.name}}s')
  .get(function (req, res) { return getAll{{.Name}}Controller.handle(req, res) })
  .post(function (req, res) { return create{{.Name}}Controller.handle(req, res) })

Routes
  .route('/{{.name}}s/:id')
  .get(function (req, res) { return getById{{.Name}}Controller.handle(req, res) })
  .put(function (req, res) { return update{{.Name}}Controller.handle(req, res) })
  .delete(function (req, res) { return delete{{.Name}}Controller.handle(req, res) })

export default Routes
