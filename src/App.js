import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react';
import PageHome from './components/PageHome'
import PageAdd from './components/PageAdd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {db} from './firebase/Firebase'

function App() {
  const theme = createMuiTheme()
  const handleClickFetchButton = async() => {
    const snapshot = await db.collection('diarys').get();
    snapshot.forEach(doc => {
      console.log(doc.data());
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <PageHome onClick={handleClickFetchButton}/>
          </Route>
          <Route exact path={'/add'}>
            <PageAdd/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
