import ButtonGetRequest from '@/components/ButtonGetRequest'

// это как пример, так делать не рекоментуется
const postMessageFromLocalAPI = async (params) => {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'John Dow' }),
  })

  const data = await res.json()
  return data
}

const PostExample = async () => {
  const { message } = await postMessageFromLocalAPI()
  return (
    <section className="content">
      <h2 className="section-title">Get request</h2>
      {message && <p>{message}</p>}
      <ButtonGetRequest />
    </section>
  )
}

export default PostExample
