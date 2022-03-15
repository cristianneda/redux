import React, { useState } from "react";
import "../styles.css";
import {login} from '../actions';
import {useDispatch} from 'react-redux';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  const dispatch = useDispatch();

  return (
    <form onSubmit={submitHandler}>
      <div class="font-bold ">
        <h2 class="flex justify-center text-emerald-300" >Please Login</h2>
        <div class="flex-col">
        <div class="flex justify-center">
          <input
          className="todo-input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          ></input>
        </div>
        <div class="flex justify-center">
          <input
          className="todo-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>
        <div class="flex justify-center">
          <input
            className="todo-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          ></input>
        </div>
        </div>
        <div class="flex justify-center" >
            <button class=" bg-emerald-500 border-2 rounded font-bold" onClick={() => dispatch(login())}>LOGIN</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;