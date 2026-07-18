import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { SectionEyebrow } from '../components/SectionEyebrow';
import heroImage from '../assets/home-hero.jpg';
import { faqs, stats, testimonials } from '../data/siteContent';

const practicePages = [
  {
    kicker: 'Meet the people',
    title: 'Our Team',
    description: 'See the clinicians, their specialties, and the kinds of care they lead.',
    to: '/team',
    tone: 'light',
  },
  {
    kicker: 'Read and learn',
    title: 'Resources',
    description: 'Explore clinician-written guidance on anxiety, relationships, trauma, and regulation.',
    to: '/resources',
    tone: 'sand',
  },
  {
    kicker: 'Understand the practice',
    title: 'About',
    description: 'Learn how ARK Counseling Connection works, what it values, and what clients can expect from the process.',
    to: '/about',
    tone: 'light',
  },
  {
    kicker: 'Start here',
    title: 'Free Consultation',
    description: 'Reach out, ask questions, and book a first conversation without any pressure.',
    to: '/consultation',
    tone: 'dark',
  },
];

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5efe6_0%,#fcfaf7_38%,#edf4f1_100%)]">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(199,210,191,0.18),transparent_55%)]" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div className="relative z-10">
              <h1 className="font-serif text-[3.2rem] sm:text-[4.35rem] lg:text-[5.4rem] font-semibold text-gray-900 leading-[0.95] tracking-[-0.03em] mb-6">
                A calmer
                <br />
                first step
                <br />
                into therapy.
              </h1>

              <p className="max-w-xl text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                ARK Counseling Connection combines evidence-based psychotherapy with a more thoughtful digital experience, so people can understand the practice before they ever book a session.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_18px_50px_rgba(199,210,191,0.35)] hover:bg-accent/90 transition-colors">
                  Schedule a Free Consult
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors">
                  Explore Services
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: 'Virtual + in-person', label: 'Flexible formats' },
                  { value: 'Evening availability', label: 'Built for real schedules' },
                  { value: 'Insurance-friendly', label: 'Clear onboarding support' },
                ].map((item) => (
                  <div key={item.value} className="rounded-2xl border border-white/70 bg-white/75 p-4 backdrop-blur-sm shadow-sm">
                    <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gray-900" />
              <div className="absolute inset-4 overflow-hidden rounded-[2rem]">
                <img src={heroImage} alt="Therapy session" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.02)_0%,rgba(17,24,39,0.52)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow inverse>At a glance</SectionEyebrow>
              <h2 className="font-serif text-4xl font-semibold leading-tight">
                Structured care without a clinical, distant feeling.
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6">
                  <div className="font-serif text-4xl font-semibold mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/65">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div>
              <SectionEyebrow>Designed for clarity</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
                Finding support should
                <br />
                feel steady from the start.
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl mb-8">
                We help individuals, couples, and families find care that fits. Start by exploring the services we offer or learn more about the thoughtful, evidence-based way we work.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Learn more about the practice
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link to="/services" className="group rounded-[2rem] border border-stone-200 bg-stone-50 p-7 hover:border-primary/25 hover:shadow-md transition-all">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary mb-4">Page one</div>
                <h3 className="font-serif text-3xl text-gray-900 mb-3">Services</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">Discover individual therapy, couples counseling, family support, and group options tailored to different needs.</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/approach" className="group rounded-[2rem] bg-primary p-7 text-foreground hover:shadow-md transition-all">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70 mb-4">Page two</div>
                <h3 className="font-serif text-3xl mb-3">Our Approach</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6">See how warmth, clinical structure, and evidence-based treatment come together in each stage of care.</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Open approach <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f1ea] py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>Explore the practice</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02]">
                Learn about the people,
                <br />
                the practice, and the next step.
              </h2>
            </div>
            <p className="max-w-md text-gray-600 leading-relaxed">
              Whether you are comparing therapists, reading for clarity, or getting ready to reach out, each section gives you one clear place to go next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {practicePages.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className={`group rounded-[2rem] border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  item.tone === 'dark'
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : item.tone === 'sand'
                      ? 'border-stone-200 bg-white/70 backdrop-blur-sm'
                      : 'border-stone-200 bg-white'
                }`}
              >
                <div className={`text-[11px] font-semibold uppercase tracking-[0.22em] mb-4 ${item.tone === 'dark' ? 'text-amber-300' : 'text-primary'}`}>
                  {item.kicker}
                </div>
                <h3 className="font-serif text-[2rem] mb-3">{item.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${item.tone === 'dark' ? 'text-white/75' : 'text-gray-600'}`}>{item.description}</p>
                <span className={`inline-flex items-center gap-2 text-sm font-semibold ${item.tone === 'dark' ? 'text-white' : 'text-primary'}`}>
                  Open page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <SectionEyebrow>What clients say</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
                Real warmth is visible
                <br />
                even before session one.
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Clients consistently describe the practice as grounded, non-performative, and easier to approach than they expected.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {testimonials.map((t, index) => (
                <div
                  key={t.author}
                  className={`rounded-[2rem] p-7 ${
                    index === 1
                      ? 'bg-primary text-foreground'
                      : 'border border-stone-200 bg-stone-50 text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className={`text-sm leading-relaxed mb-6 ${index === 1 ? 'text-foreground/80' : 'text-gray-600'}`}>
                    "{t.quote}"
                  </blockquote>
                  <div className="font-semibold text-sm">{t.author}</div>
                  <div className={`text-xs uppercase tracking-[0.18em] mt-2 ${index === 1 ? 'text-foreground/60' : 'text-gray-500'}`}>{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gray-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionEyebrow inverse>Common Questions</SectionEyebrow>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.02] mb-4">
                A few answers before
                <br />
                you reach out.
              </h2>
              <p className="text-white/65 leading-relaxed">
                The goal is to make the first contact feel easier, not mysterious.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    type="button"
                  >
                    <span className="font-semibold text-white pr-6">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-amber-300 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-white/70 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
