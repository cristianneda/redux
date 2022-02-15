import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{login, logout} from './actions';


function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
     {isLogged ? <h3>You are now logged in</h3> : <h3>You need to login</h3>}
     <button onClick={() => dispatch(login())}>LOGIN</button>
     <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
}

export default App;
