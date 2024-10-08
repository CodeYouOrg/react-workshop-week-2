import { useState } from 'react'

import CreateItem from './CreateItem'
import Header from './Header'
import List from './List'
import './App.css'

function App() {
  const [adding, setAdding] = useState(false)

  const [items, setItems] = useState([])
  const addItem = (item) => setItems(items => items.concat(item))

  return (
    <>
      <h1>todo</h1>
      <Header total={items.length} />

      <main>
        <List items={items} />
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
