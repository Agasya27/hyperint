import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Brand banner - DMD style */}
      <div className="border-b border-primary-foreground/10 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold">About Arezou Skincare</h3>
              <p className="text-sm text-primary-foreground/70">
                Handcrafted botanical skincare, made with love in small batches using natural ingredients.
              </p>
            </div>
          </div>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Visit Shopee
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Face Oils</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Serums</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Moisturizers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Help</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">About</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@arezou.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container text-center text-xs text-primary-foreground/50">
          © 2026 Arezou by Ishita Saxena. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
