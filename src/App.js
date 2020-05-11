import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
)

const SneakersPage = () => (
  <div>
    <h1>Sneakers Page</h1>
  </div>
)

const WomensPage = () => (
  <div>
    <h1>Womens Page</h1>
  </div>
)

const MensPage = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Route path='/shop/jackets' component={JacketsPage} />
      <Route path='/shop/sneakers' component={SneakersPage} />
      <Route path='/shop/womens' component={WomensPage} />
      <Route path='/shop/mens' component={MensPage} />
    </Switch>
  );
}

export default App;
