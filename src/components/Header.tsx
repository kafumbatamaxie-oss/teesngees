import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";
import MobileSearchDrawer from "./MobileSearchDrawer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "New & Featured", href: "/new", hasDropdown: true },
    { name: "Men", href: "/men", hasDropdown: true },
    { name: "Women", href: "/women", hasDropdown: true },
    { name: "Kids", href: "/kids", hasDropdown: true },
    { name: "Sale", href: "/sale", hasDropdown: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-background">
        {/* Top Bar */}
        <div className="bg-secondary">
          <div className="container flex items-center justify-between py-2 text-xs">
            <div className="flex items-center gap-4">
              <span className="font-medium">Free Shipping on Orders R500+</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/stores" className="hover:text-muted-foreground transition-colors">
                Find a Store
              </Link>
              <span className="text-border">|</span>
              <Link to="/help" className="hover:text-muted-foreground transition-colors">
                Help
              </Link>
              <span className="text-border">|</span>
              <Link to="/join" className="hover:text-muted-foreground transition-colors">
                Join Us
              </Link>
              <span className="text-border">|</span>
              <Link to="/signin" className="hover:text-muted-foreground transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="border-b border-border">
          <div className="container flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
                <img
                    src="/images/logo-3.png"
                    alt="TeesNgees Logo"
                    className="h-16 w-auto"
                />
            </Link>


            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="font-medium text-sm hover:text-muted-foreground transition-colors py-2 flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-64 bg-background border border-border shadow-card p-4 animate-fade-in">
                      <div className="grid gap-2">
                        <Link to={`${link.href}/shoes`} className="text-sm hover:text-muted-foreground transition-colors py-1">
                          Shoes
                        </Link>
                        <Link to={`${link.href}/clothing`} className="text-sm hover:text-muted-foreground transition-colors py-1">
                          Clothing
                        </Link>
                        <Link to={`${link.href}/accessories`} className="text-sm hover:text-muted-foreground transition-colors py-1">
                          Accessories
                        </Link>
                        <Link to={`${link.href}/new-arrivals`} className="text-sm hover:text-muted-foreground transition-colors py-1 text-nike-orange font-medium">
                          New Arrivals
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search & Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center bg-secondary rounded-full px-4 py-2 gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-sm outline-none w-32 lg:w-40"
                />
              </div>

              {/* Mobile Search - Opens Drawer */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Wishlist */}
              <button className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors">
                <Heart className="h-5 w-5" />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border animate-fade-in">
              <div className="container py-4">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-medium py-2 border-b border-border"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <Link to="/signin" className="text-sm text-muted-foreground">
                      Sign In
                    </Link>
                    <Link to="/join" className="text-sm text-muted-foreground">
                      Join Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Search Drawer */}
      <MobileSearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
