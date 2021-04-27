import React from 'react'
import DiaryItem from './DiaryItem'
import Date from './Date'

const Diary = ({diary}) => {
  return (
    <div>
      <Date />
    {
      diary.map(day => {
        return (
          <DiaryItem key={day.id} date={day.date} text={day.text}/>
        )
      })
    }
  </div>
  )
}

export default Diary
