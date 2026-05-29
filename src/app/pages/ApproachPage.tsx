import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { CARD_2, CARD_3, approachPrinciples, carePath } from '../data/siteContent';

export function ApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute right-0 top-8 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <div>
              <SectionEyebrow inverse>Our Approach</SectionEyebrow>
              <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold leading-[0.96] tracking-[-0.03em] mb-6">
                Evidence and
                <br />
                human connection
                <br />
                in the same room.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
                We believe people change best when therapy is both clinically rigorous and emotionally safe. The method matters. The relationship matters too.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-stone-100 transition-colors">
                  Start with a consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white/5 transition-colors">
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-white/5" />
              <div className="absolute inset-4 overflow-hidden rounded-[2rem]">
                <img src={CARD_2} alt="Therapeutic approach" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:block absolute -bottom-2 left-0 rounded-[1.75rem] bg-amber-300 text-gray-950 p-6 max-w-[250px] shadow-xl">
                <div className="font-serif text-3xl font-semibold mb-2">15+</div>
                <div className="text-sm text-gray-800/80">Licensed clinicians across specialties and treatment styles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
            <div>
              <SectionEyebrow>Core principles</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
                The way we practice
                <br />
                shapes the result.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These principles guide the intake process, the structure of sessions, the style of feedback, and the way progress is revisited over time.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {approachPrinciples.map((item, index) => (
                <div key={item.title} className={`rounded-[1.75rem] border p-6 ${index === 1 ? 'border-primary/15 bg-primary text-white' : 'border-stone-200 bg-stone-50'}`}>
                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>{item.description}</p>
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
              <SectionEyebrow>What the process looks like</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02]">
                A clear rhythm from
                <br />
                first call to integration.
              </h2>
            </div>
            <p className="max-w-md text-gray-600 leading-relaxed">
              We work to make the process understandable so clients feel held by both the relationship and the structure around it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {carePath.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] bg-white border border-stone-200 p-6 shadow-sm">
                <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4">{item.step}</div>
                <h3 className="font-serif text-2xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
          <div className="rounded-[2.5rem] overflow-hidden">
            <img src={CARD_3} alt="Clinical care session" className="w-full h-full object-cover aspect-[16/10]" />
          </div>
          <div>
            <SectionEyebrow>In session</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
              Warmth and accountability
              <br />
              can coexist.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sessions are supportive without becoming vague. We explain what is being used, why it is being used, and how the work is progressing.
            </p>
            <div className="space-y-4">
              {[
                'We explain why a specific intervention is being used.',
                'We track what is shifting between sessions.',
                'We adjust the plan when life changes or goals become clearer.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
