import Link from 'next/link'
import { use } from 'react'
import { navItems } from './navigation'

const Navigation = () => {
  // Используем use() для доступа к контексту или промисам (React 19)
  const items = use(Promise.resolve(navItems))

  return (
    <nav className="navigation">
      {items.map((item) => (
        <Link key={item.href} className="nav-link" href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
