import React, { useState, useCallback } from 'react'
import { Form, FormControl, Button, } from 'react-bootstrap'
import classes from './ImageUploadForm.module.css'

const ImageUploadForm = (props) => {
    let [galleryName, setGalleryName] = useState('friend') // set starting value to 'friend'
    let [name, setName] = useState('')
    let [file, setFile] = useState(null)
    let [fileSrc, setFileSrc] = useState('')

    const fileStaging = useCallback((e) => {
        if (props.type === 'file') {
            setFile(e.target.files[0])

            let reader = new FileReader();

            try {
                reader.readAsDataURL(e.target.files[0])
            } catch (e) {
                setFileSrc('')
            }

            reader.addEventListener("load", function () {
                setFileSrc(reader.result)
            }, false)
        } else {
            setFileSrc(e.target.value)
        }
    }, [props.type])

    return (
        <Form className="my-4">
            <Form.Row className="text-left">
                <Form.Group>
                    <Form.Label>Gallery</Form.Label>
                    <Form.Text className="text-muted">
                        Select upload gallery.
                    </Form.Text>
                    <Form.Check
                        type="radio"
                        label="Friend"
                        checked={galleryName === "friend"}
                        onChange={() => setGalleryName("friend")}
                    />
                    <Form.Check
                        type="radio"
                        label="Foe"
                        checked={galleryName === "foe"}
                        onChange={() => setGalleryName("foe")}
                    />
                </Form.Group>
            </Form.Row>
            {props.endpoint === 'enroll' ?
                <Form.Row className="text-left">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <FormControl
                            type="text"
                            placeholder="Subject name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </Form.Group>
                </Form.Row>
                : null
            }
            <Form.Row>
                <div className="input-group d-flex justify-content-center mb-3">
                    <div className="input-group-prepend">
                        <Button type="submit" variant="primary">Upload</Button>
                    </div>
                    <div className={props.type === 'file' ? "custom-file" : ''}>
                        <label className={props.type === 'file' ? "custom-file-label text-left" : 'text-center'}>{!file ? props.label : file.name}</label>
                        <input
                            required
                            type={props.type}
                            className={props.type === 'file' ? "custom-file-input" : "form-control"}
                            placeholder={props.placeholder}
                            onChange={(e) => fileStaging(e)}
                        />
                    </div>
                </div>
            </Form.Row>
            <h2>Image Preview</h2>
            {fileSrc ? <figure><img className={classes.Image} alt="" src={fileSrc} /></figure> : <p style={{ color: "#CCC" }}>No image to preview</p>}
        </Form>
    )
}

export default ImageUploadForm