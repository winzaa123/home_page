import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bulma/css/bulma.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {error_page} from './pages/error.react';
import Stargazer from './pages/Stargazer.react';
  const app = document.getElementById('root');
ReactDOM.render(
<Router >
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/Stargazer/:userName/:repoName" component={Stargazer}   />

      <Route name="404" component={error_page}/>
   
    </Switch>
  </Router>,
app
);
