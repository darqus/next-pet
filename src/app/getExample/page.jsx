import ButtonGetRequest from '@/components/ButtonGetRequest'

// это как пример, так делать не рекомендуется
const getMessageFromLocalAPI = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`)
  return res.json()
}

const GetExample = async () => {
  const { message } = await getMessageFromLocalAPI()
  return (
    <section className="content">
      <h2 className="section-title">Get request</h2>
      {message && <p>{message}</p>}
      <ButtonGetRequest />
    </section>
  )
}

export default GetExample
