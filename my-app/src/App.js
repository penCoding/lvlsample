import { Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Search from './components/layout/Search';
import Results from './components/layout/Results';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Landing />
              <Search />
              <Results />
            </>
          }
        />
      </Routes>
    </Fragment>
  </Router>
);

export default App;
