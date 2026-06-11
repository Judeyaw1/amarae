import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { SectionEyebrow } from './SectionEyebrow';

export function ContactSection({ preselectedService }: { preselectedService?: string }) {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionEyebrow>Get Started</SectionEyebrow>
            <h2 className="font-serif text-4xl font-semibold text-gray-900 leading-tight mb-5">Ready to Begin?</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              The first step is often the hardest. Reach out for a free 15-minute consultation and we will help you figure out the next one.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:5551234567' },
                { icon: Mail, label: 'Email', value: 'info@serenitybh.com', href: 'mailto:info@serenitybh.com' },
                { icon: MapPin, label: 'Location', value: '123 Wellness Way, Suite 200, Maryland', href: '/consultation' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{label}</div>
                    {href.startsWith('/') ? (
                      <Link to={href} className="text-sm text-gray-700 hover:text-primary transition-colors">{value}</Link>
                    ) : (
                      <a href={href} className="text-sm text-gray-700 hover:text-primary transition-colors">{value}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
              <div className="font-semibold text-sm text-gray-900 mb-1">Office Hours</div>
              <div className="text-sm text-gray-500 space-y-0.5">
                <div>Monday - Friday: 8:00 am - 8:00 pm</div>
                <div>Saturday: 9:00 am - 5:00 pm</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fname" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">First Name *</label>
                  <input id="fname" type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Last Name *</label>
                  <input id="lname" type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Email *</label>
                <input id="email" type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="jane@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Phone</label>
                <input id="phone" type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="(555) 000-0000" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">I am interested in</label>
                <select id="interest" defaultValue={preselectedService ?? 'Not Sure Yet'} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
                  <option>Individual Therapy</option>
                  <option>Couples Counseling</option>
                  <option>Family Therapy</option>
                  <option>Relational Therapy</option>
                  <option>Group Sessions</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none" placeholder="Tell us a bit about what brings you here..." />
              </div>
              <button type="submit" className="w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-sm">
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">All inquiries are confidential and HIPAA-secure.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
