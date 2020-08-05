import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import TodosPage from './components/TodosPage';
import OtherPage from './components/OtherPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <TodosPage />
        </Route>
        <Route path="/other">
          <OtherPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
