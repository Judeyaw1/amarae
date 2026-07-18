import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionEyebrow } from '../components/SectionEyebrow';

export function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5efe6_0%,#fcfaf7_44%,#edf4f1_100%)]">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(199,210,191,0.18),transparent_55%)]" />
      <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 md:p-12 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-sm">
          <SectionEyebrow>Page not found</SectionEyebrow>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-3">404</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[0.94] tracking-[-0.04em] mb-5">
                This page
                <br />
                does not exist.
              </h1>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                The link may be outdated or typed incorrectly. Use the button below to return to the homepage, or go back to the services page if you were looking for care options.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-foreground hover:shadow-md transition-shadow">
                  Go Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors">
                  View Services
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gray-900 text-white p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-amber-300 font-semibold mb-4">Quick links</div>
              <div className="space-y-4">
                {[
                  { label: 'About the practice', to: '/about' },
                  { label: 'Book a consultation', to: '/consultation' },
                  { label: 'Browse resources', to: '/resources' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
