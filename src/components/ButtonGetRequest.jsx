'use client'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const ButtonGetRequest = () => {
  const { data, error } = useSWR('/api/hello', fetcher)

  const clickHandler = async () => {
    try {
      const { message } = data || await fetcher('/api/hello')
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
