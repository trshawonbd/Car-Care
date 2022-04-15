import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, userForGoogle, loadingForGoogle, errorForGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    let errorElement;

    if (errorForGoogle) {
        return (
            errorElement = <p className='text-danger'>Error: {errorForGoogle?.message} </p>
        );
    }

    if (loadingForGoogle) {
        return <p>Loading...</p>;
    }
    if (userForGoogle) {

        navigate(from, { replace: true });
       
      }


    return (
        <div>
            {errorElement}


            <div className='d-flex justify-content-around' >
                <div >
                    <Button className='google-btn' onClick={() => signInWithGoogle()} ><img src={google} alt="" srcset="" /> Sign In </Button>
                </div>
                <div>
                    <Button className='github-btn'><img src={github} alt="" srcset="" /> Sign In </Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;