import React from 'react';
import ReactDOM from 'react-dom';

import './resources/StyleSheet/index.scss'; 
import 'bulma/css/bulma.css';
import Container from './pages/Container.react';
import createStore from './store/createStore'
import { Provider } from 'react-redux'
 
const app = document.getElementById('root');


const store = createStore()


ReactDOM.render(
  <Provider store={store}>
<Container/>
 </Provider>
  ,app
);

