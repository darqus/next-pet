const getMessageFromLocalAPI = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  return res.json()
}

const GetExample = async () => {
  const { message } = await getMessageFromLocalAPI()
  return (
    <section className="content">
      <h2 className="section-title">Get request</h2>
      {message && <p>{message}</p>}
    </section>
  )
}

export default GetExample
