import { useState } from 'react'
import { produce } from 'immer'

import CreateItem from './CreateItem'
import Header from './Header'
import List from './List'
import './App.css'

function App() {
  const [adding, setAdding] = useState(false)

  const [items, setItems] = useState([])
  const addItem = (item) => setItems(items => items.concat(item))
  const complete = items.filter(item => item.checked).length

  const onCheck = (index) => 
    setItems(items => produce(items, draft => {
      draft[index].checked = !draft[index].checked
    }))

  const onDelete = (index) =>
    setItems(items => produce(items, draft => {
      draft.splice(index, 1)
    }))

  return (
    <>
      <h1>todo</h1>
      <Header complete={complete} total={items.length} />

      <main>
        <List items={items} onCheck={onCheck} onDelete={onDelete} />
        {adding && (
          <CreateItem
            onSave={(item) => {
              addItem(item);
              setAdding(false);
            }}
          />
        )}
        <button onClick={() => setAdding(true)}>add todo</button>
      </main>
    </>
  )
}

export default App
