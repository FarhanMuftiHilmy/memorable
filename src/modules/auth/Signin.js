import React, { useRef, useState} from 'react'
import { Form, Button, Card, Alert  } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin } = useAuth()
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setErr('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch{
            setErr("Failed to sign in")
        }

        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
                    {err && <Alert variant="danger">{err}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Pasword</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit" >Sign In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className=" w-100 text-center text-white mt-2 ">
                Need an account? <Link to="/signup" className="link">Sign Up</Link>
            </div>
        </>
    )
}

export default Signin
