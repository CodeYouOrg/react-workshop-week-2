function Header({ complete, total }) {
  return <header>
    <dl>
      <div>
        <dt>total: </dt>
        <dd>{total}</dd>
      </div>
      <div>
        <dt>complete: </dt>
        <dd>{complete}</dd>
      </div>
    </dl>
  </header>
}

export default Header
