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

const UserPage = async ({ params }) => {
  const { id } = await params

  // Проверяем, что id существует и является допустимым числом
  if (!id || Number.isNaN(Number(id))) {
    return (
      <div className="user-page">
        <h1>Invalid User ID</h1>
        <p>Please provide a valid user ID.</p>
      </div>
    )
  }

  try {
    const user = await getUser(id)

    const { id: userId, name, email, phone, website } = user

    return (
      <div className="user-page">
        <h1>User: {name}</h1>
        <p>ID: {userId}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    )
  } catch (error) {
    return (
      <div className="user-page">
        <h1>Error Loading User</h1>
        <p>Could not load user with ID: {id}</p>
        <p>Error: {error.message}</p>
      </div>
    )
  }
}

export default UserPage
