import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { Helmet } from 'react-helmet';
import Store from "./context";
import reducer from "./reducer";
import {Route , Link , Switch , Redirect} from 'react-router-dom';
import isLoggedIn from './is_logged_in'
import store from 'store';
import { usePersistedContext, usePersistedReducer } from "./usePersist";

import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

const handleLogout = (history) => () => {
  store.remove('loggedIn');
  console.log('you have been logged out. boo!');
  history.push('/login')
};

const Bookingform = ({history})=> {

  

  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

   if (!isLoggedIn()){
     return <Redirect to="/login" />
   }

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
      <p></p>
     <button onClick={handleLogout(history)}> logout </button>
    </Store.Provider>
  );
}

export default Bookingform;