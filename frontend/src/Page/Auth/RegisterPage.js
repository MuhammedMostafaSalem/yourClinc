import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <Container>
            <Row className="py-5 d-flex justify-content-center hieght-search">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ٌNew Register</label>
                    <input
                        placeholder="User Name"
                        type="text"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        placeholder="Your Email"
                        type="email"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        placeholder="Your Phone"
                        type="phone"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        placeholder="Confirm Password"
                        type="password"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-4">Account Registration</button>
                    <label className="mx-auto my-4">
                    Already you have an account ?
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                            Click Here
                            </span>
                        </Link>
                    </label>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage