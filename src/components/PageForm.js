import React,{useState} from 'react'

const PageForm = ({addDiary}) => {
  const [text, setText] = useState('')
  const [createDate, setCreateDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addDiary(createDate, text)
    setCreateDate('')
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={createDate} onChange={e => setCreateDate(e.target.value)}/>
      <textarea value={text} onChange={e => setText(e.target.value)}/>
      <button type="submit">登録</button>
    </form>
  )
}

export default PageForm
