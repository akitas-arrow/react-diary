import React from 'react'

const DiaryItem = ({date, text}) => {
  return (
    <div>
      <h3>{date}</h3>
      <p>{text}</p>
    </div>
  )
}

export default DiaryItem
