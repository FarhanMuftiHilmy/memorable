import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import ProgressBar from './ProgressBar'

export default function UploadForm() {
    const [file, setF] = useState(null)
    const [err, setErr] = useState(null)
    const types = ['image/png', 'image/jpeg']
    const handleChange = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setF(selected)
            setErr('')
        } else {
            setF(null);
            setErr('Please select an image file (png or jpeg)')
        }
    }
    return (
        <form className="upload-form">
            <label className="upload">
                <a class="btn btn-secondary btn-xl text-center"><i class="fas fa-plus"></i></a>
                <input type="file" onChange={handleChange} />
            </label>
            <div className="output">
                {err && <Alert variant="danger">{err}</Alert>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setF={setF}/>}
            </div>
        </form>
    )
}
