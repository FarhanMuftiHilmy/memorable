import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ImageGrid from './ImageGrid'
import UploadForm from './UploadForm'
import Modal from './Modal'


export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className="gallery">
            <Header/>
            <div className="title">
                <h2>Your Memory Collection</h2>
                <p>This is a gallery for rememberance of your memory</p>
            </div>  
            <UploadForm/>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}            
        </div>
    )
}
