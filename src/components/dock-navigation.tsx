
import { Home, User, Briefcase, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: Mail, label: "Contact", href: "/contact" },
]

export function DockNavigation() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label} className="group">
            <Link
              to={item.href}
              className="dock-item flex flex-col items-center gap-1"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
