import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    /* const [agree, setAgree] = useState(false)

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loadingForEmail,
        errorForEmail,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating , error] = useUpdateProfile(auth);


      let errorElement;

      if (errorForEmail || error) {
          return (
              errorElement = <p className='text-danger'>Error: {errorForEmail?.message} </p>
          );
      }
      if (loadingForEmail || updating) {
        return <p>Loading...</p>;
      }
      if (user) {
          console.log(user)
          
      }

      const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
      }  */
      const [agree, setAgree] = useState(false);
      const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
      const navigate = useNavigate();
  
      const navigateLogin = () => {
          navigate('/login');
      }
  
      if(loading || updating){
          return <p>...Loading</p>
      }
  
      if (user) {
       console.log('user', user);  
      }
  
      const handleRegister = async (event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          // const agree = event.target.terms.checked;
  
          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name });
          console.log('Updated profile');
          navigate('/home');
      }

    return (
        <div>
            <h2 className='login-title'>Register</h2>
            <div className='w-50 mx-auto'>
            <Form   onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Your Name" required />
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


                <p>Already have you an account? <Link className='login-text' to='/login' onClick={navigateLogin} >Login</Link> </p>
                <Button  disabled={!agree}  className='submit-btn' type="submit">
                    Submit
                </Button>
                


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