import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import MergeSort from '../sortingVisualizer/SortingVisualizer';

export default function Navigator() {
  return (


    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mergeSort">mergeSort</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/mergeSort">
            <MergeSort />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

function Home() {
  return (
    <h1>Home</h1>
  )
}