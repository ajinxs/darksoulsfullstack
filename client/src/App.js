import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './pages/Navigation';

import Home from './pages/Home.js';
import Product  from './pages/Product';
import WeaponsGuide from './pages/WeaponsGuide';
import CharacterBuildGuide from './pages/CharacterBuild';
import RingGuide from './pages/RingGuide';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>  
            <Route path="/product" component={Product}/>
            <Route path="/weaponguide" component={WeaponsGuide}/>   
            <Route path="/buildguide" component={CharacterBuildGuide}/>   
            <Route path="/ringguide" component={RingGuide}/>   
            <Route path="/login" component={Login}/>   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
