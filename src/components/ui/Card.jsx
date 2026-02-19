import { createContext, useContext } from 'react'

const CardContext = createContext(null)

const CardRoot = ({ children, className = '', ...props }) => {
  return (
    <CardContext.Provider value={{}}>
      <div className={`card ${className}`} {...props}>
        {children}
      </div>
    </CardContext.Provider>
  )
}

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`card-title ${className}`} {...props}>
      {children}
    </h3>
  )
}

const CardDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={`card-description ${className}`} {...props}>
      {children}
    </p>
  )
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
})

export { CardContext }
