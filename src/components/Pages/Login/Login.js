import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();



    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <h2 className='login-title'>Login</h2>
            <div className='w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p>Already have you an account? <Link className='login-text' to='/register'>Register</Link> </p>
                    <Button className='submit-btn' type="submit">
                        Submit
                    </Button>
                    <p> {error}</p>

                </Form>
                <div className='hr-dividor'>
                    <hr />
                </div>

                <div className='d-flex justify-content-around' >
                    <div >
                        <Button className='google-btn' onClick={() => signInWithGoogle()}><img src={google} alt="" srcset="" /> Sign In </Button>
                    </div>
                    <div>
                        <Button className='github-btn'><img src={github} alt="" srcset="" /> Sign In </Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;