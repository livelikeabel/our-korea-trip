import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import SearchResult from './pages/SearchResult';
import Detail from './pages/Detail';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/s" component={SearchResult} />
      <Route path="/detail" component={Detail} />
      <Footer />
    </BrowserRouter>
  )
}

export default App;