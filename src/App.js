import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getUsers } from './store/Actions/actions';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Vistas
import Login from './components/Login/Login';
import ScreenUi from './components/UI/ScreenUi';
import RoutClient from './components/Proteccion/RoutClient'

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <Router>
      <Route exact path="/" component={Login} />
      {/* Ruta protegida */}
      <Route
        exact path="/UserUi"
        component={(props) => <RoutClient {...props} Component={ScreenUi} />}
      />
    </Router>
  );
}

export default App;
