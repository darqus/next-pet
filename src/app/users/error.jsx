'use client'

const UsersError = ({ error, reset }) => (
  <div className="error-container">
    <h2>Something went wrong!</h2>
    <p>{error.message}</p>
    <button type="button" onClick={reset} className="btn btn-primary">
      Try again
    </button>
  </div>
)

export default UsersError
