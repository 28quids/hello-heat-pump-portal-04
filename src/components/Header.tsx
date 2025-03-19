import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function Header() {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('quote-form');
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/favicon-96x96.png" alt="Green Home Path Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">Green Home Path</span>
          </Link>
          <a href="#quote-form" onClick={handleQuoteClick}>
            <Button>Get Free Quote</Button>
          </a>
        </div>
      </div>
    </header>
  )
} 