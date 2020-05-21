import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SingleLayout from './layout/SingleLayout'
import HomePage from './pages/HomePage'
import CharacterPage from './pages/CharacterPage'
import './App.css';

function App() {
  return (
    <SingleLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={CharacterPage} />
        </Switch>
      </BrowserRouter>
    </SingleLayout>
  );
}

export default App;
