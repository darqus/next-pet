'use client'

const getMessageFromLocalAPI = async () => {
  const res = await fetch('/api/hello')
  return res.json()
}

const ButtonGetRequest = () => {
  const clickHandler = async () => {
    try {
      const { message } = await getMessageFromLocalAPI()
      alert(message)
    } catch (error) {
      console.error('Failed to fetch message:', error)
      alert('Failed to fetch message. Please try again.')
    }
  }

  return (
    <button type="button" onClick={clickHandler} className="btn btn-ghost">
      Click me (client event)
    </button>
  )
}

export default ButtonGetRequest
