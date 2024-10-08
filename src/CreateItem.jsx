import { useState } from 'react'

function CreateItem({ onSave }) {
  const [value, setValue] = useState('')

  return (
    <form aria-describedby="form-title" onSubmit={e => {
      e.preventDefault()
      onSave({ checked: false, value })
    }}>
      <h2 id="form-title">new todo</h2>
      <input
        autoFocus
        aria-labelledby="form-title"
        onInput={e => setValue(e.target.value)}
        type="text"
        value={value}
      />
      <button type="submit">create</button>
    </form>
  )
}

export default CreateItem
