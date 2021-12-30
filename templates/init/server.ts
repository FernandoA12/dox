import { createServer } from 'http'
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import Routes from '../routes/index.routes'
process.setMaxListeners(0)


const app = express()

config()

const server = createServer(app)

app.use(express.json({ limit: '50mb' }))
app.use(cors({
  exposedHeaders: '*'
}))

app.use(Routes)

export default () => server.listen(3333, () => console.log('Server on'))
