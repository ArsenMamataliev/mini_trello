import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router';
import { useDispatch  } from 'react-redux';  
import { loggedOut } from '../../store/actions/loggedInSlice';

const clientId =
'857980594255-i3juf9rtsb0qarqlhup91ihqvhe7ammb.apps.googleusercontent.com';

function LogoutBtn() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    dispatch(loggedOut())
    navigate('/', { replace: true });
    localStorage.clear();
    
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="logout-btn">
      <span >Sign out</span>
    </button>
  );
}

export default LogoutBtn;