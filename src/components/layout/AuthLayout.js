import React from 'react'
import { Container } from "react-bootstrap"

export default function AuthLayout({ children }) {
    return (
        <section className="auth" style={{background: "linear-gradient(274deg, #c962f7, #6262e2 44%, #46c8d0 )"}}>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", width: "50%" }}>
                <div className="w-100" style={{maxHeight: "400px"}}>
                    {children}
                </div>
            </Container>  
        </section>
    )
}
