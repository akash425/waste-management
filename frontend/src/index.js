import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import App from './App';
import Farmers from './Farmers';
import Companies from './Companies';

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch> */}
    <Routes>
      <Route path="/" exact component={App} />
      <Route path="/farmers" component={Farmers} />
      <Route path="/companies" component={Companies} />
    </Routes>
    {/* </Switch> */}
  </BrowserRouter>,
  document.getElementById('root')
);