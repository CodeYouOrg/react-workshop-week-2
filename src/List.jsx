function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.value}>
          <input type="checkbox" value={item.checked} />
          <p>{item.value}</p>
        </li>
      ))}
    </ul>
  )
}

export default List
