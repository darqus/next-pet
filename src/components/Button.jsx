'use client'

const Button = () => {
  return (
    <button
      type="button"
      onClick={() => alert('test')}
      className="btn btn-ghost"
    >
      Click me (client event)
    </button>
  )
}

export default Button
