import React from 'react'
import Diary from './Diary'

const PageHome = ({diarys}) => {
  return (
    <div>
      {
        diarys.map((diary, index) => {
          return (
            <Diary
              date={diary.date}
              title={diary.title}
              text={diary.text}
              key={index}
            />
          )
        })
      }
    </div>
  )
}

export default PageHome
