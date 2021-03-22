import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import thunk from 'redux-thunk';
import orderReducer from './store/reducers/order';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider
  store={store}>
  <BrowserRouter>
     <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
