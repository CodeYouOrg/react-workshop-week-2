function List({ items, onCheck, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.value}>
          <input
            onInput={() => onCheck(index)}
            type="checkbox"
            value={item.checked}
          />
          <p>{item.value}</p>
          <button onClick={() => onDelete(index)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default List
