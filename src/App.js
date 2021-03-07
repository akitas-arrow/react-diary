// import logo from './logo.svg';
import React from 'react';
import PageHome from './components/PageHome'
import PageEdit from './components/PageEdit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <PageHome />
          </Route>
          <Route exact path={'/edit'}>
            <PageEdit />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
