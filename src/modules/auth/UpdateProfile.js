import React, { useRef, useState} from 'react'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'

const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e){   
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setErr("Passwords do not match")
        }
    
        const promises = []
        setLoading(true)
        setErr("")
    
        if (emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value))
        }
    
        Promise.all(promises)
          .then(() => {
            history.push("/profile")
          })
          .catch(() => {
            setErr("Failed to update account")
          })
          .finally(() => {
            setLoading(false)
          })
    }
    return (
        <>
            <Header/>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {err && <Alert variant="danger">{err}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        ref={emailRef}
                        required
                        defaultValue={currentUser.email}
                    />
                    </Form.Group>
                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={passwordRef}
                    />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                        type="password"
                        ref={passwordConfirmRef}
                    />
                    </Form.Group>
                    <Button disabled={loading} className="btn btn-secondary w-100 mt-3" type="submit">
                    Update
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>Cancel</Link>
            </div>
        </>
    )
}

export default UpdateProfile
