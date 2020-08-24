import React from 'react';
import './App.scss';
import Header from './components/header/header.component.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Importing pages here
import HomePage from './pages/homepage/home.page.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
