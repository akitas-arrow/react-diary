import React,{useState} from 'react'

const DateForm = ({createDate}) => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  const handleSubmit = (e) => {
    e.preventDefault();
    createDate(month, day);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number" value={month} min="1" max="12"
        onChange={e => setMonth(e.target.value)}
      />月
      <input type="number" value={day} min="1" max="31"
        onChange={e => setDay(e.target.value)}
      />日
      <button type="submit">移動する</button>
    </form>
  )
}

export default DateForm
