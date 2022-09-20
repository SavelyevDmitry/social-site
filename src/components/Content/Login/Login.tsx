import React, {ChangeEvent, FormEvent, useState} from "react";
import { useDispatch } from 'react-redux';

import { requestLogin } from './../../../redux/reducers/auth-reducer';

import './Login.css'
import { useSelector } from 'react-redux';
import { getIsUserAuth } from "../../../redux/selectors/auth-selector";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const isAuth = useSelector( getIsUserAuth );

  const dispatch = useDispatch();

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  }

  const onRememberMeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsRememberMe(!isRememberMe);
  }

  const onFornSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch( requestLogin(userName, password, isRememberMe) as any );

    setUserName('');
    setPassword('');
    setIsRememberMe(false);
  }

  return (
    isAuth 
      ? <Navigate replace to={'/profile'} />
      : <form onSubmit={onFornSubmit} className="login__form">

      <div className="login__input-wrap">
        <label className="login__input-label" htmlFor="login">Username:</label>
        <input type="text" name="login" id="login" placeholder="Username"
          className="login__input" value={userName} onChange = {onUsernameChange}/>
      </div>

      <div className="login__input-wrap">
        <label className="login__input-label" htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password"
          className="login__input" value={password} onChange = {onPasswordChange}/>
      </div>

      <div className="login__checkbox-wrap">
        <label className="login__checkbox-label" htmlFor="rememberMe">Remember me:</label>
        <input type="checkbox" name="rememberMe" id="rememberMe" placeholder="Username"
          className="login__checkbox" checked={isRememberMe} onChange={onRememberMeChange}/>
        <button className="btn btn--login">Login</button>
      </div>
      
    </form>
  )
}

export default Login;