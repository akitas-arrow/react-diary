import React, { useState } from 'react'

const PageEdit = ({addDiary}) => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }
  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeText = (e) => {
    setText(e.target.value)
  }


  const handleSubmit = (event) => {
    console.log('submit')
    event.preventDefault()
    addDiary(date, title, text)
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        日付：
        <input type='date' onChange={handleChangeDate}/>
      </label>
      <label>
        タイトル：
        <input type='text' onChange={handleChangeTitle}/>
      </label>
      <label>
        本文：
        <textarea onChange={handleChangeText}/>
      </label>
      <input type='submit' value='submit'/>
    </form>
    </>
  )
}

export default PageEdit
