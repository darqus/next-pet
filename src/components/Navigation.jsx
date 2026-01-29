import Link from 'next/link'
import { navItems } from './navigation'

const Navigation = () => {
  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <Link key={item.href} className="nav-link" href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
