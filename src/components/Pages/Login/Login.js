import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        userForEmail,
        loadingForEmail,
        errorForEmail,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    if (errorForEmail) {
        return (
            errorElement = <p className='text-danger'>Error: {errorForEmail?.message} </p>
        );
        }
        if (loadingForEmail) {
            return <p>Loading...</p>;
        }
        if (userForEmail) {
            navigate(from, { replace: true });

        }

        const handleLogin = (event) => {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;
            signInWithEmailAndPassword(email, password);
        }

        return (
            <div>
                <h2 className='login-title'>Login</h2>
                <div className='w-50 mx-auto'>
                    <Form onSubmit={handleLogin} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Enter password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <p>Already have you an account? <Link className='login-text' to='/register'>Register</Link> </p>
                        <Button className='submit-btn' type="submit">
                            Submit
                        </Button>
                        {errorElement}

                    </Form>
                    <div className='hr-dividor'>
                        <hr />
                    </div>
                    <SocialLogin></SocialLogin>


                </div>

            </div>
        );
    };

 export default Login;