'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Collections', href: '#featured-products' },
    { name: 'Custom Design', href: '#custom-request' },
    { name: 'Care Guide', href: '#care' },
    { name: 'Size Guide', href: '#sizing' },
    { name: 'FAQ', href: '#faq' }
  ];

  const customerService = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Shipping Info', href: '#shipping' },
    { name: 'Returns & Exchanges', href: '#returns' },
    { name: 'Warranty', href: '#warranty' },
    { name: 'Appointment Booking', href: '#appointment' },
    { name: 'Virtual Consultation', href: '#consultation' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold mb-3">Stay Connected</h3>
            <p className="text-neutral-300 mb-6">
              Subscribe to receive exclusive offers, new collection updates, and jewelry care tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400 flex-1"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white border-0 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-playfair text-2xl font-bold text-amber-400 mb-3">Luxe Jewelry</h3>
              <p className="text-neutral-300 leading-relaxed">
                Creating exceptional handcrafted jewelry for over 15 years. Each piece tells a unique story 
                of artistry, precision, and timeless elegance.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <p className="text-neutral-300">
                <span className="font-medium">Address:</span><br />
                123 Diamond District<br />
                New York, NY 10036
              </p>
              <p className="text-neutral-300">
                <span className="font-medium">Phone:</span> (555) LUXE-GEM
              </p>
              <p className="text-neutral-300">
                <span className="font-medium">Email:</span> info@luxejewelry.com
              </p>
            </div>

            {/* Business Hours */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">Business Hours</h4>
              <div className="text-neutral-300 text-sm space-y-1">
                <p>Mon - Fri: 10:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Trust */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <span className="text-white">@</span>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="sr-only">Pinterest</span>
                <span className="text-white">P</span>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <span className="text-white">T</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <h5 className="font-medium text-white text-sm">We Accept</h5>
              <div className="flex gap-2 mb-4">
                <div className="bg-neutral-800 px-3 py-1 rounded text-xs">VISA</div>
                <div className="bg-neutral-800 px-3 py-1 rounded text-xs">MC</div>
                <div className="bg-neutral-800 px-3 py-1 rounded text-xs">AMEX</div>
                <div className="bg-neutral-800 px-3 py-1 rounded text-xs">PayPal</div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-neutral-800 px-3 py-2 rounded text-xs text-center">
                  🔒 SSL Secured Checkout
                </div>
                <div className="bg-neutral-800 px-3 py-2 rounded text-xs text-center">
                  💎 GIA Certified Diamonds
                </div>
                <div className="bg-neutral-800 px-3 py-2 rounded text-xs text-center">
                  🛡️ Lifetime Warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Luxe Jewelry. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
              <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
              <a href="#accessibility" className="hover:text-amber-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}