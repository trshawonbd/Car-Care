import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false)

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        userforEmail,
        loadingForEmail,
        errorForEmail,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


      let errorElement;

      if (errorForEmail) {
          return (
              errorElement = <p className='text-danger'>Error: {errorForEmail?.message} </p>
          );
      }
      if (loadingForEmail) {
        return <p>Loading...</p>;
      }
      if (userforEmail) {
          console.log('user:', userforEmail)
      }

      const handleRegister = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
      } 

    return (
        <div>
            <h2 className='login-title'>Register</h2>
            <div className='w-50 mx-auto'>
            <Form   onSubmit={handleRegister}>
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
                    <Form.Check  onClick={() => setAgree(!agree)}  type="checkbox" label="Check me out" />
                </Form.Group>


                <p>Already have you an account? <Link className='login-text' to='/login'>Login</Link> </p>
                <Button  disabled={!agree}  className='submit-btn' type="submit">
                    Submit
                </Button>
                {errorElement}


            </Form>
            <div
             className='hr-dividor'>
                    <hr  />
                </div>

            <SocialLogin></SocialLogin>

            </div>

        </div>
    );
};

export default Register;