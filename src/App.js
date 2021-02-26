import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Vistas
import Login from './components/Login/Login';
import ScreenUi from './components/UI/ScreenUi';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/UserUi" component={ScreenUi} />
    </Router>
  );
}

export default App;
