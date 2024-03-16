import { findConditionsFromReport } from '../services/uploadService'
import fs from 'fs'
import { Request } from '../types/request'
import { Response } from 'express'

export async function postUpload(req: Request, res: Response) {
  try {
    const { file } = req
    if (!file) {
      res.send('No file uploaded')
      throw new Error('No file uploaded')
    }

    const conditions = await findConditionsFromReport(file)

    fs.unlink(file.path, (err) => {
      if (err) {
        console.error(`Failed to delete file: ${err}`)
      } else {
        console.log('File deleted successfully')
      }
    })
    console.log('Report processed successfully')
    res.json(conditions)
  } catch (error) {
    console.error(error)
    res.status(500).send('An error occurred while uploading the file')
  }
}
