import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/screens/Home';
import Posts from './components/screens/Posts';
import SinglePost from './components/screens/SinglePost';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import NotFound from './components/screens/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='/single-post'>
            <SinglePost />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
