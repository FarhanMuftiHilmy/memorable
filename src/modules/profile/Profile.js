import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Profile() {
    const [err, setErr] = useState('')
    const { currentUser, signout } = useAuth()
    const history = useHistory()

    async function handleSignout() {
        setErr('')
        try {
            await signout()
            history.push("/")
        } catch {
            setErr("Failed to sign out")
        }
    }
    return (
        <div>
            <Header />
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {err && <Alert variant="danger">{err}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-secondary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleSignout} style={{ color: 'inherit', textDecoration: 'inherit' }}>Sign Out </Button>
            </div>
        </div>
    )
}
