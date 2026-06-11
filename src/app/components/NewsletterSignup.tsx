import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export function NewsletterSignup({ variant = 'section' }: { variant?: 'section' | 'footer' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  }

  if (variant === 'footer') {
    return (
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Stay Updated</h4>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          Get occasional news, offers, and resources from Serenity Behavioral Health.
        </p>
        {submitted ? (
          <p className="text-sm text-primary">Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="flex-shrink-0 rounded-md bg-primary px-3 py-2 text-white hover:bg-primary/90 transition-colors"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-lg">
            <div className="inline-flex items-center gap-2 mb-3 text-white/80">
              <Mail className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em]">Subscribe for Updates</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-2">
              Get news, offers, and resources straight to your inbox.
            </h2>
            <p className="text-white/75 text-sm leading-relaxed">
              Occasional emails about new services, promotions, and mental health resources. Unsubscribe anytime.
            </p>
          </div>

          <div className="w-full max-w-md">
            {submitted ? (
              <p className="text-center lg:text-left font-medium">Thanks for subscribing — we'll be in touch!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-md px-4 py-3 text-sm text-white-900 placeholder:text-white-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
