import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Trophy, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="h-3 w-3 rounded-full bg-ps-buttonBlue"></div>
                <div className="h-3 w-3 rounded-full bg-ps-buttonRed"></div>
                <div className="h-3 w-3 rounded-full bg-ps-buttonGreen"></div>
                <div className="h-3 w-3 rounded-full bg-ps-buttonPink"></div>
              </div>
              <span className="text-xl font-bold text-foreground">PlayStation Kenya</span>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-secondary ${
                isActive("/") ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Shop Codes</span>
            </Link>
            <Link
              to="/testimonials"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-secondary ${
                isActive("/testimonials") ? "text-secondary" : "text-muted-foreground"
              }`}
            >
              <Trophy className="h-4 w-4" />
              <span>Community</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
