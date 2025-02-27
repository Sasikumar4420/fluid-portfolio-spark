
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const socialLinks = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/yourusername",
    external: true 
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://linkedin.com/in/yourusername",
    external: true 
  },
  { 
    icon: Twitter, 
    label: "Twitter", 
    href: "https://twitter.com/yourusername",
    external: true 
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:your@email.com",
    external: true 
  },
]

export function DockNavigation() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
      <ul className="flex items-center gap-8">
        {socialLinks.map((item) => (
          <li key={item.label} className="group">
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dock-item flex flex-col items-center gap-1"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </a>
            ) : (
              <Link
                to={item.href}
                className="dock-item flex flex-col items-center gap-1"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
