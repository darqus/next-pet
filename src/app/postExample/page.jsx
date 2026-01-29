import ButtonGetRequest from '@/components/ButtonGetRequest'

// это как пример, так делать не рекомендуется
const postMessageFromLocalAPI = async (name) => {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })

  const data = await res.json()
  return data
}

const PostExample = async () => {
  const { message } = await postMessageFromLocalAPI('John Dow')
  return (
    <section className="content">
      <h2 className="section-title">Get request</h2>
      {message && <p>{message}</p>}
      <ButtonGetRequest />
    </section>
  )
}

export default PostExample
