import React,  { useState} from 'react';
import Header from '../components/Header';
import '../index.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div><Header/>
    <form action="">
      <div className="login">
        <div className="login-field">
          <div className="col-md">
            <label htmlFor="name"><h3 className="label">Email</h3></label>
            <input
            value="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="form-control"
            type="text"
            />
          </div>
        </div>
        <div className="login-field" >
          <div className="col-md">
            <label htmlFor="password"><h3 className="label">Password</h3></label>
            <input
            value="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="form-control"
            type="text"
            />
          </div>
        </div>
        <div className="login-field">
        <div className="col-md">
          <div className='button-login'>
          <button
            type="submit"
            className="button"
            >
            Submit
          </button>
          </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}
