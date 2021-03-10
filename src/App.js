import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React,{ useEffect, useState } from 'react';
import PageHome from './components/PageHome'
import PageEdit from './components/PageEdit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {db} from './firebase/index'

function App() {
  const [diarys, setDiarys] = useState([])

  const addDiary = (date, title, text) => {
    const _diary = {date: date, title: title, text: text}
    const _diarys = diarys.push(_diary)
    setDiarys(_diarys)
    console.log(diarys)
  }
  // const addDiary = async(date, title, text) => {
  //   await db.collection('diarys').add({
  //     date: date,
  //     title: title,
  //     text: text,
  //   })
  // }
  // useEffect(() => {
  //   const observer = db.collection('diarys').onSnapshot(
  //     querySnapshot => {
  //       const _diarys = querySnapshot.docs.map(doc => {
  //         return {
  //           diaryId: doc.id,
  //           ...doc.data()
  //         }
  //       })
  //       setDiarys(_diarys)
  //     }
  //   )
  //   return () => {
  //     observer()
  //   }
  // }, [])

  const theme = createMuiTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <PageHome diarys={diarys}/>
          </Route>
          <Route exact path={'/edit'}>
            <PageEdit addDiary={addDiary}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
