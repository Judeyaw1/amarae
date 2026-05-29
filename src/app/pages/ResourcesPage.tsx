import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { articles } from '../data/siteContent';

export function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <SectionEyebrow>Resources</SectionEyebrow>
              <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold text-gray-900 leading-[0.96] tracking-[-0.03em] mb-6">
                Practical language
                <br />
                for what people
                <br />
                are living through.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Articles, frameworks, and educational pieces designed to make therapy concepts more understandable and more usable between sessions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Anxiety', 'Trauma', 'Relationships', 'Regulation'].map((item) => (
                <div key={item} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">Topic</div>
                  <div className="font-serif text-2xl text-gray-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f1ea] py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>From our clinicians</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02]">
                Read for insight,
                <br />
                not overwhelm.
              </h2>
            </div>
            <Link to="/consultation" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Ask a clinician a question <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((a, index) => (
              <article key={a.title} className={`group rounded-[2rem] overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg ${index === 2 ? 'border-gray-900 bg-gray-900 text-white' : 'border-stone-200 bg-white'}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${index === 2 ? 'text-amber-300' : 'text-primary'}`}>{a.category}</span>
                    <span className={index === 2 ? 'text-white/25' : 'text-gray-300'}>·</span>
                    <span className={`text-xs ${index === 2 ? 'text-white/55' : 'text-gray-400'}`}>{a.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl leading-snug mb-3">{a.title}</h2>
                  <p className={`text-sm leading-relaxed ${index === 2 ? 'text-white/72' : 'text-gray-600'}`}>{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
