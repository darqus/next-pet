import Link from 'next/link'

const Navigation = () => {
  const navItems = [
    { href: '/', label: 'Main' },
    { href: '/about', label: 'About' },
    { href: '/users', label: 'Users' },
    { href: '/contacts', label: 'Contacts' },
  ]

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
