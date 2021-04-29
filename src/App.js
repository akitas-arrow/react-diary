import React, {useState, useEffect} from 'react';
import PageForm from './components/PageForm';
import PageDiary from './components/PageDiary'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {db} from './firebase/Firebase'

function App() {
  const [diary, setDiary] = useState([])
  const [date , setDate] = useState('');

  const createDate = (month, day) => {
    const _month = month.toString(10).padStart(2,'0');
    const _day = day.toString(10).padStart(2,'0');
    setDate(`${_month}-${_day}`);
  }

  useEffect (() => {
    db.collection('diary').orderBy("year", "desc").onSnapshot((querySnapshot) => {
      const _diary = [];
      querySnapshot.forEach((doc) => {
          _diary.push({
            id: doc.id,
            ...doc.data()
          });
      });
      setDiary(_diary);
    });
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    createDate(month, day);
    // const _month = (new Date().getMonth() + 1).toString(10).padStart(2,'0');
    // const _day = new Date().getDate().toString(10).padStart(2,'0');
    // setDate(`${_month}-${_day}`);
  },[])

  const addDiary = async(createDate, text) => {
    const year = createDate.slice(0,4);
    const monthDate = createDate.slice(5);
    await db.collection("diary").add({
      year: year,
      monthDate: monthDate,
      text: text
    })
  }

  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <PageDiary
            diary={diary} date={date}
            createDate={createDate}
          />
        </Route>
        <Route exact path={'/createDiary'}>
          <PageForm addDiary={addDiary}/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
