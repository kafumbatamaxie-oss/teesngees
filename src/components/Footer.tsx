import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    resources: [
      { name: "Find A Store", href: "/stores" },
      { name: "Become A Member", href: "/join" },
      { name: "Send Us Feedback", href: "/feedback" },
    ],
    help: [
      { name: "Get Help", href: "/help" },
      { name: "Order Status", href: "/orders" },
      { name: "Delivery", href: "/delivery" },
      { name: "Returns", href: "/returns" },
      { name: "Payment Options", href: "/payment" },
      { name: "Contact Us", href: "/contact" },
    ],
    company: [
      { name: "About TeesnGees", href: "/about" },
      { name: "News", href: "/news" },
      { name: "Careers", href: "/careers" },
      { name: "Investors", href: "/investors" },
      { name: "Sustainability", href: "/sustainability" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resources */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Sign up to receive updates on new products and special promotions.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
              />
              <button className="bg-primary-foreground text-primary px-4 py-2 text-sm font-medium hover:bg-primary-foreground/90 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                    src="/images/logo-3.png"
                    alt="TeesNgees Logo"
                    className="h-16 w-auto bg-white rounded"
                />
              <span className="text-sm text-primary-foreground/70">
                © 2026 TeesnGees, Inc. All Rights Reserved
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
              <Link to="/guides" className="hover:text-primary-foreground transition-colors">
                Guides
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
