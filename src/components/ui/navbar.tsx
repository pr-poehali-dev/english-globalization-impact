import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "О проблеме", path: "/problem" },
    { name: "Словарь замен", path: "/dictionary" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center max-w-5xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">РодноеСлово</span>
        </Link>
        <nav className="ml-auto flex gap-1 md:gap-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              asChild
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
              className={cn(
                "text-sm font-medium",
                location.pathname === item.path && "bg-primary text-primary-foreground"
              )}
            >
              <Link to={item.path}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
