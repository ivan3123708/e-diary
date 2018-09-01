import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Topbar from './Topbar';
import Home from './Home';
import MyDiary from './MyDiary';

const EDiary = () => (
  <BrowserRouter>
    <div className="e-diary" >
      <Topbar />
      <Route path="/home" component={Home} />
      <Route path="/my-diary" component={MyDiary} />
    </div>
  </BrowserRouter>
);

export default EDiary;