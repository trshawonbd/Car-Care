import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [signInWithGoogle, user, loading, error2] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState ('');
    const [confirm, setconfirm] = useState('');
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('')
    
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    const handleRegister = (event) =>{
        event.preventDefault();
        email = event.target.email.value;
        password = event.target.password.value;

        if(password.length < 6){
            setError("your password must be 6")
        }

    }

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <h2 className='login-title'>Register</h2>
            <div className='w-50 mx-auto'>
            <Form  onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" required />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="name" name='email' placeholder="Enter email" required />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                </Form.Group>
                <p>Already have you an account? <Link className='login-text' to='/login'>Login</Link> </p>
                <Button disabled={!agree} className='submit-btn' type="submit">
                    Submit
                </Button>
                <p style={{color: 'red'}}>{error}</p>
            </Form>
            <div
             className='hr-dividor'>
                    <hr  />
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

export default Register;