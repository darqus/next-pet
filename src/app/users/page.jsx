const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Ошибка загрузки списка пользователей')

  return res.json()
}

const UserItem = ({ id, name, email }) => {
  return (
    <div className="card">
      <div className="item">
        <div className="item-title">{`${id}. ${name}`}</div>
        <div className="item-sub">{email}</div>
      </div>
      <div>
        <span aria-hidden>🢒</span>
      </div>
    </div>
  )
}

const UsersPage = async () => {
  const users = await getUsers()

  return (
    <section className="content">
      <h2 className="section-title">Users</h2>
      <div className="cards">
        {users.map(({ id, name, email }) => (
          <UserItem key={id} id={id} name={name} email={email} />
        ))}
      </div>
    </section>
  )
}

export default UsersPage
