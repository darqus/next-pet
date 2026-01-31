import ButtonGetRequest from '@/components/ButtonGetRequest'
import { createHelloGreeting } from '../api/lib/hello'

const PostExample = () => {
  const { message } = createHelloGreeting('John Dow')
  return (
    <section className="content">
      <h2 className="section-title">Get request</h2>
      {message && <p>{message}</p>}
      <ButtonGetRequest />
    </section>
  )
}

export default PostExample
