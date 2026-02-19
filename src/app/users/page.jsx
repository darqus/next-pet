import Link from 'next/link'
import { cache, memo } from 'react'

const getUsers = cache(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 },
  })

  if (!res.ok) throw new Error('Ошибка загрузки списка пользователей')

  return res.json()
})

const UserItem = memo(({ id, name, email }) => {
  return (
    <Link href={`/users/${id}`} className="card">
      <div className="item">
        <div className="item-title">{`${id}. ${name}`}</div>
        <div className="item-sub">{email}</div>
      </div>
      <div>
        <span aria-hidden="true">🢒</span>
      </div>
    </Link>
  )
})

UserItem.displayName = 'UserItem'

const UsersPage = async () => {
  const users = await getUsers()

  if (users.length === 0) {
    return (
      <section className="content">
        <h2 className="section-title">Users</h2>
        <p className="muted">No users found.</p>
      </section>
    )
  }

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
