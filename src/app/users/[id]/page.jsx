import { use } from 'react'

const getUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    console.error(
      `Failed to fetch user with id ${id}: ${res.status} ${res.statusText}`,
    )
    throw new Error('Ошибка загрузки данных пользователя')
  }

  return res.json()
}

const UserPage = ({ params }) => {
  const resolvedParams = use(params)
  const { id } = resolvedParams

  // Проверяем, что id существует и является допустимым числом
  if (!id || Number.isNaN(Number(id))) {
    return (
      <div className="user-page">
        <h1>Invalid User ID</h1>
        <p>Please provide a valid user ID.</p>
      </div>
    )
  }

  // Выносим асинхронный вызов в отдельный компонент
  const UserContent = async () => {
    try {
      const user = await getUser(id)

      const { id: userId, name, email, phone, website } = user

      return (
        <>
          <h1>User: {name}</h1>
          <p>ID: {userId}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Website: {website}</p>
        </>
      )
    } catch (error) {
      return (
        <>
          <h1>Error Loading User</h1>
          <p>Could not load user with ID: {id}</p>
          <p>Error: {error.message}</p>
        </>
      )
    }
  }

  return (
    <div className="user-page">
      <UserContent />
    </div>
  )
}

export default UserPage
