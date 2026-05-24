import { SectionEyebrow } from '../components/SectionEyebrow';
import { HERO_IMG } from '../data/siteContent';

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <SectionEyebrow inverse>About</SectionEyebrow>
          <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold leading-[0.96] tracking-[-0.03em] mb-6 max-w-5xl">
            A psychotherapy practice
            <br />
            designed to feel grounded,
            <br />
            clear, and personal.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Serenity Behavioral Health combines clinical depth with a more welcoming client experience from first consultation through long-term care.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Our mission',
              description: 'To make high-quality psychotherapy feel more accessible, less opaque, and more connected to real daily life.',
            },
            {
              title: 'How we work',
              description: 'Treatment is collaborative, evidence-based, and adjusted over time rather than fixed after intake.',
            },
            {
              title: 'What clients notice',
              description: 'More clarity, better language for their experience, and a stronger sense of movement between sessions.',
            },
          ].map((item, index) => (
            <div key={item.title} className={`rounded-[1.75rem] border p-6 ${index === 1 ? 'border-primary/15 bg-primary text-white' : 'border-stone-200 bg-stone-50'}`}>
              <h2 className="font-serif text-2xl mb-3">{item.title}</h2>
              <p className={`text-sm leading-relaxed ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f1ea] py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <SectionEyebrow>What matters here</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
              Clinical rigor, cultural
              <br />
              awareness, real contact.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              We work to create a practice where clients can understand the process, trust the plan, and feel respected in the room.
            </p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-sm">
            <img src={HERO_IMG} alt="About Serenity Behavioral Health" className="w-full h-full object-cover aspect-[16/11]" />
          </div>
        </div>
      </section>
    </>
  );
}
