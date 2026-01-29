'use client'

const getMessageFromLocalAPI = async () => {
  const res = await fetch('/api/hello')
  return res.json()
}

const ButtonGetRequest = () => {
  const clickHandler = async () => {
    const { message } = await getMessageFromLocalAPI()
    alert(message)
  }

  return (
    <button type="button" onClick={clickHandler} className="btn btn-ghost">
      Click me (client event)
    </button>
  )
}

export default ButtonGetRequest
