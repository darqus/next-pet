'use client'

import { useState } from 'react'

const Button = () => {
  const [showToast, setShowToast] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setShowToast(true)}
        className="btn btn-ghost"
      >
        Show Test Alert
      </button>
      {showToast && (
        <div role="alert" className="toast">
          <p>Test message</p>
          <button onClick={() => setShowToast(false)}>Close</button>
        </div>
      )}
    </>
  )
}

export default Button
