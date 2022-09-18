import React, {ChangeEvent, FormEvent, useState} from "react";
import { authAPI } from './../../../api/authAPI';
import { useDispatch } from 'react-redux';
import { requestLogin } from './../../../redux/reducers/auth-reducer';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

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
  }

  return (
    <form onSubmit={onFornSubmit}>
      <div>
        <label htmlFor="login">Username:</label>
        <input type="text" name="login" id="login" placeholder="Username"
          value={userName} onChange = {onUsernameChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" placeholder="Password"
          value={password} onChange = {onPasswordChange}/>
      </div>
      <div>
        <label htmlFor="rememberMe">Remember me:</label>
        <input type="checkbox" name="rememberMe" id="rememberMe" placeholder="Username"
          onChange={onRememberMeChange}/>
      </div>

      <div>
        <button>Login</button>
      </div>
      
    </form>
  )
}

export default Login;