import React, { useState } from 'react'
import ReportService from '../reportService'

interface Props {
  setResponse: (response: any) => void
}

function ReportUpload(props: Props) {
  const { setResponse } = props
  const [file, setFile] = useState(null)

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onFileUpload = () => {
    const formData = new FormData()
    if (file) {
      formData.append('file', file)
    }

    ReportService.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        setResponse(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <input type='file' onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </div>
  )
}

export default ReportUpload
