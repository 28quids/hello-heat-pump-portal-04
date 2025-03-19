import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/favicon-96x96.png" alt="Green Home Path Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Green Home Path</span>
          </Link>
          <Link to="/quote">
            <Button>Get Free Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 