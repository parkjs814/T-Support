import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import { App, Survey } from 'components';
import * as reducers from 'reducers';
import './index.scss';

const store = createStore(combineReducers({ ...reducers, routing: routerReducer }));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/survey" component={Survey}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
