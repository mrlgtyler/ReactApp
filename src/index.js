import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from "redux-form-website-template";
import store from "./store";
import SimpleForm from "./SimpleForm";
import showResults from "./showResults";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootEL = document.getElementById("root");

ReactDOM.render(
  <Provider store = {store}>
    <div style= {{padding: 15}}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
          </div>
  </Provider>
);


