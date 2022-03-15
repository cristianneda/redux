import React  from 'react';
import "./styles.css";
import {useDispatch} from 'react-redux';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import {useEffect, useState} from 'react'


function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const Logout = () => {
    setUser({name:"", email: "", id: ""})
  };
  const Login = (details) => {
    setUser({
      name: details.name,
      email: details.email,
      id: Math.random()
    })
  };
  
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('user'))
    if(getUser) {
        setUser(getUser)
    }
}, [])
  
  
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
}, [user])

  return (
    <div class="flex justify-center  py-8 ">
    <div class=" text-zinc-900  py-8 bg-gray-900 rounded-md w-3/5">
      {user.email !== "" ? (
        <div class=" space-y-4">
          <TodoList/>
          <div class="flex justify-center">
          <button class=" bg-emerald-500 border-2 rounded font-bold" onClick={() => dispatch(Logout())}>LOGOUT</button>
          </div>
        </div>
      ) : (<div>
            <LoginForm Login={Login} />
           </div>
      )}
    </div>
    </div>
    // <div className="App">
    //  {isLogged ? <div className="todo-app">
    //  <LoginForm Login={Login} />
    // </div> : 
    //   <h3>You need to login</h3>}
    //  <button onClick={() => dispatch(login())}>LOGIN</button>
    //  <button onClick={() => dispatch(logout())}>LOGOUT</button>
    // </div>
  );
}

export default App;
 