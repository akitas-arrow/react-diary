import React,{useState} from 'react'

const PageForm = ({addDiary}) => {
  const [text, setText] = useState('')
  const [createDate, setCreateDate] = useState('')

  const handleSubmit = (e) => {
    if (!text || !createDate) {
      alert('入力欄がからです')
    } else {
      addDiary(createDate, text)
      setCreateDate('')
      setText('')
    }
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="date" value={createDate} onChange={e => setCreateDate(e.target.value)}/>
        <textarea value={text} onChange={e => setText(e.target.value)}/>
        <button type="submit">登録</button>
      </form>
    </>
  )
}

export default PageForm
