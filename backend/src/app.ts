import express, { Application } from 'express'
import * as path from 'path';

export const app: Application = express()
app.use(express.static(path.resolve(__dirname, '../../frontend/build')));



