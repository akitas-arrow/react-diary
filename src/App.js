import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react';
import PageHome from './components/PageHome'
import PageEdit from './components/PageEdit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  const theme = createMuiTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
