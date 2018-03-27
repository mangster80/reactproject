import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import Classes from './Classes'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Classes' component={Classes}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
