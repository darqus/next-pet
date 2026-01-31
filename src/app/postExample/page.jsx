import ButtonGetRequest from '@/components/ButtonGetRequest'
import { createHelloGreeting } from '@/lib/hello'

const PostExample = () => {
  const { message } = createHelloGreeting('John Dow')
  return (
    <section className="content">
      <h2 className="section-title">Post request</h2>
      {message && <p>{message}</p>}
      <ButtonGetRequest />
    </section>
  )
}

export default PostExample
