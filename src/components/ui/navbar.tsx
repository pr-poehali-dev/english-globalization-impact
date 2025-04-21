import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Главная", href: "/" },
  { title: "О проблеме", href: "/problem" },
  { title: "Словарь замен", href: "/dictionary" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">РодноеСлово</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
          <Button variant="default" size="sm">
            Предложить замену
          </Button>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden container py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button variant="default" size="sm">
              Предложить замену
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
