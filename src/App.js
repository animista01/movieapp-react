import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movies from './containers/Movies'
import Movie from './containers/Movie'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/movie' component={Movie} />
            <Route path='/' component={Movies} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
