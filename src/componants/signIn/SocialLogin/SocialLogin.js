import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='container text-center my-4'>
           <Button onClick={() =>signInWithGoogle()} className='btn btn-warning m-2'>Google</Button>
           <Button className='primary m-2'>Facebook</Button>
           <Button className='btn btn-dark m-2'>Github</Button>
        </div>
    );
};

export default SocialLogin;