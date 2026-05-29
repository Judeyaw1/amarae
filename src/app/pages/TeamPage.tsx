import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { therapists } from '../data/siteContent';

export function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5efe6_0%,#ffffff_42%,#edf4f1_100%)]">
        <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <SectionEyebrow>Our Team</SectionEyebrow>
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-end">
            <div>
              <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold text-gray-900 leading-[0.96] tracking-[-0.03em] mb-6">
                Clinicians with
                <br />
                different strengths,
                <br />
                one shared standard.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Each therapist brings a distinct clinical lens, but the standard is consistent: warm presence, clear treatment thinking, and care tailored to the person in front of us.
              </p>
            </div>
            <div className="rounded-[2rem] bg-gray-900 text-white p-8">
              <div className="font-serif text-5xl mb-3">15+</div>
              <p className="text-white/70 leading-relaxed">Licensed clinicians across trauma, relationships, family systems, adolescent care, and anxiety treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>Meet the therapists</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02]">
                The clinical fit matters.
              </h2>
            </div>
            <Link to="/consultation" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Ask for a match recommendation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {therapists.map((t, index) => (
              <div key={t.name} className={`group rounded-[2rem] overflow-hidden ${index === 1 ? 'bg-primary text-white' : 'bg-stone-50 border border-stone-200'}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="font-serif text-2xl">{t.name}</h2>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${index === 1 ? 'bg-white text-primary' : 'bg-primary/10 text-primary'}`}>{t.specialty}</span>
                  </div>
                  <p className={`text-sm font-medium mb-3 ${index === 1 ? 'text-white/85' : 'text-primary'}`}>{t.credentials}</p>
                  <p className={`text-sm leading-relaxed mb-4 ${index === 1 ? 'text-white/75' : 'text-gray-600'}`}>{t.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.modalities.map((m) => (
                      <span key={m} className={`text-xs px-2.5 py-1 rounded-full ${index === 1 ? 'border border-white/20 text-white/85' : 'border border-stone-200 bg-white text-gray-600'}`}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
