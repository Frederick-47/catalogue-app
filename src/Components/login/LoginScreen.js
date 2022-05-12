import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';




export const LoginScreen = () => {


  const newuser = {
    name: 'braulio'
  }



  const {dispatch, user} = useContext(AuthContext)

  const navigate =  useNavigate();

  const {login, logout} = types

  console.log(login)

  const handleLogin = () => {
    
    const action = {
      type: login,
      payload: newuser
    }
    
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr/>
        <button className='btn btn-primary'
        onClick={handleLogin}>
          Login
        </button>
    </div>
  )
}
