import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Diary from './components/Diary'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {db} from './firebase/Firebase'

function App() {
  const [diary, setDiary] = useState([])
  // const [date, setDate] = useState(new Date());
  // console.log(date)

  useEffect (() => {
    const getDiary = db.collection('diary').onSnapshot((querySnapshot) => {
      const _diary = [];
      querySnapshot.forEach((doc) => {
          _diary.push({
            id: doc.id,
            ...doc.data()
          });
      });
      setDiary(_diary);
    });
    return () => {
      getDiary();
    };
  },[])

  const addDiary = async(createDate, text) => {
    await db.collection("diary").add({
      date: createDate,
      text: text
    })
  }

  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Diary diary={diary} />
        </Route>
        <Route exact path={'/createDiary'}>
          <Form addDiary={addDiary}/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
