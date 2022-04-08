import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import { useDispatch  } from 'react-redux';  
import { loggedIn } from '../../store/actions/loggedInSlice';
import { useNavigate } from 'react-router';


const clientId =
  '857980594255-i3juf9rtsb0qarqlhup91ihqvhe7ammb.apps.googleusercontent.com';

function LoginBtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log('Login Success');
    localStorage.setItem('name', res.profileObj.name);
    localStorage.setItem('imageUrl', res.profileObj.imageUrl);
    dispatch(loggedIn());
    navigate('/dashboard', { replace: true });
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginBtn;