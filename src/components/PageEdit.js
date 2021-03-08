import React, { useState } from 'react'

const PageEdit = () => {
  const [diary, setDiary] = useState({
    date: '',
    title: '',
    text: '',
  })
  
  return (
    <>
    <p>
      日付：{diary.date}
    </p>
    <p>
      タイトル：{diary.title}
    </p>
    <p>
      本文：{diary.text}
    </p>
    <form>
      <label>
        日付：
        <input type='date'/>
      </label>
      <label>
        タイトル：
        <input type='text'/>
      </label>
      <label>
        本文：
        <textarea/>
      </label>
      <input type='submit' value='submit'/>
    </form>
    </>
  )
}

export default PageEdit
