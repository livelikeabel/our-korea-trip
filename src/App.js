import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  )
}

export default App;