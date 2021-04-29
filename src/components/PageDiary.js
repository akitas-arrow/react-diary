import React from 'react'
import DiaryItem from './DiaryItem'
import DateForm from './DateForm'
import {Link} from 'react-router-dom'

const PageDiary = ({diary, date, createDate}) => {
  return (
    <>
      <DateForm createDate={createDate}/>
      {
        diary.filter(day => day.monthDate === date).map(day => {
          return (
            <DiaryItem key={day.id} date={`${day.year}-${day.monthDate}`} text={day.text}/>
          )
        })
      }
      <Link to={'/createDiary'}>新規作成</Link>
  </>
  )
}

export default PageDiary
