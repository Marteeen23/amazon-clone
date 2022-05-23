import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>

          <Route exact path='/checkout' element={<><Header /><Checkout/></>}></Route>
          <Route exact path='/login' element={<><Login/></>}></Route>
          <Route exact path='/' element={<><Header /><Home /></>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
