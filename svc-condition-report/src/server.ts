import express from 'express'
import multer from 'multer'
import fs from 'fs'
import { Request } from './types/request'
import * as uploadController from './controllers/uploadController'
const app = express()
const port = 3000

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (
    _req: Request,
    _file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    const dir = 'uploads/'
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },

  filename: function (
    _req: Request,
    file: { fieldname: string },
    cb: (arg0: null, arg1: string) => void
  ) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

// POST endpoint to handle file upload
app.post('/upload', upload.single('file'), uploadController.postUpload)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
