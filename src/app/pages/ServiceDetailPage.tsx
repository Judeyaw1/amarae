import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Monitor } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { ContactSection } from '../components/ContactSection';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { services } from '../data/siteContent';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl text-gray-900 mb-4">Service not found</h1>
        <p className="text-gray-500 mb-8">This service doesn't exist or may have moved.</p>
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5efe6_0%,#fcfaf7_44%,#edf4f1_100%)]">
        <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <SectionEyebrow>{service.tag}</SectionEyebrow>
              <h1 className="font-serif text-[3rem] sm:text-[4rem] lg:text-[4.8rem] font-semibold text-gray-900 leading-[0.97] tracking-[-0.03em] mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(45,95,93,0.22)] hover:bg-primary/90 transition-colors">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/approach" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors">
                  Our Approach
                </Link>
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04)_0%,rgba(17,24,39,0.45)_100%)]" />
              <div className="absolute bottom-5 left-5 flex gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  {service.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                  <Monitor className="w-3.5 h-3.5 text-primary" />
                  {service.format}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics / Focus Areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What to expect */}
            <div>
              <SectionEyebrow>What to expect</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-8">
                How the process works
              </h2>
              <ul className="space-y-4">
                {service.whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div>
              <SectionEyebrow>Who it's for</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-8">
                This service may be right for you if
              </h2>
              <ul className="space-y-4">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas + modalities */}
      <section className="bg-[#f6f1ea] py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <SectionEyebrow>Focus areas</SectionEyebrow>
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">Topics we address</h2>
              <div className="flex flex-wrap gap-2">
                {service.topics.map((t) => (
                  <span key={t} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionEyebrow>Modalities</SectionEyebrow>
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">Therapeutic approaches</h2>
              <div className="flex flex-wrap gap-2">
                {service.modalities.map((m) => (
                  <span key={m} className="rounded-full bg-primary/10 border border-primary/15 px-4 py-2 text-sm text-primary font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionEyebrow>Also available</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Other services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold mb-1">{s.tag}</div>
                    <div className="font-serif text-xl text-gray-900">{s.title}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Booking / Inquiry form */}
      <div id="book">
        <ContactSection preselectedService={service.title} />
      </div>
    </>
  );
}
