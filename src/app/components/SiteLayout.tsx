import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Mail, MapPin, Menu, Phone, Search, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import { mainNavItems } from '../data/siteContent';

function HeaderLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          isActive ? 'text-primary bg-primary/5' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:5551234567" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              (555) 123-4567
            </a>
            <a href="mailto:info@serenitybh.com" className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              info@serenitybh.com
            </a>
            <span className="flex items-center gap-1.5 opacity-75">
              <MapPin className="w-3.5 h-3.5" />
              Maryland
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs opacity-80">
            <span>Mon-Fri 8am-8pm · Sat 9am-5pm</span>
            <span className="w-px h-3 bg-white/30" />
            <Link to="/consultation" className="hover:opacity-100 transition-opacity">Client Portal</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 border-2 border-white rounded-full" />
              </div>
              <div className="leading-none">
                <div className="font-serif font-semibold text-[15px] text-foreground">Serenity</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Behavioral Health</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <HeaderLink key={item.label} to={item.to} label={item.label} />
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-primary transition-colors" type="button">
                <Search className="w-4.5 h-4.5" />
              </button>
              <Link to="/consultation" className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-primary/90 transition-colors">
                Book Free Consultation
              </Link>
            </div>

            <button className="md:hidden p-2 text-gray-500" onClick={() => setMobileOpen(!mobileOpen)} type="button">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/consultation" className="block mt-2 bg-primary text-white text-center text-sm font-semibold px-4 py-2.5 rounded hover:bg-primary/90 transition-colors">
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      {children}

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                  <div className="w-3.5 h-3.5 border-2 border-white rounded-full" />
                </div>
                <span className="font-serif font-semibold text-lg">Serenity Behavioral Health</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
                Compassionate, evidence-based psychotherapy in Maryland. We help individuals, couples, and families build lives of greater meaning and ease.
              </p>
              <div className="text-xs text-gray-500">Licensed in Maryland · HIPAA Compliant · Insurance Accepted</div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {['Insurance & Fees', 'Privacy Policy', 'Telehealth Info', 'Client Portal', 'Crisis Support'].map((item) => (
                  <li key={item}>
                    <Link to="/consultation" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} Serenity Behavioral Health. All rights reserved.</p>
            <div className="text-xs text-gray-500 text-center md:text-right max-w-md">
              <span className="font-semibold text-amber-400">Crisis Line:</span> If you are in crisis, call or text{' '}
              <a href="tel:988" className="underline hover:text-white">988</a> or go to your nearest emergency room.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
