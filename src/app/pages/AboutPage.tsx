import { SectionEyebrow } from '../components/SectionEyebrow';
import { HERO_IMG, TEAM_1 } from '../data/siteContent';

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
            ARK Counseling Connection combines clinical depth with a more welcoming client experience from first consultation through long-term care.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div key={item.title} className={`rounded-[1.75rem] border p-6 ${index === 1 ? 'border-primary/15 bg-primary text-foreground' : 'border-stone-200 bg-stone-50'}`}>
              <h2 className="font-serif text-2xl mb-3">{item.title}</h2>
              <p className={`text-sm leading-relaxed ${index === 1 ? 'text-foreground/75' : 'text-gray-600'}`}>{item.description}</p>
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
            <img src={HERO_IMG} alt="About ARK Counseling Connection" className="w-full h-full object-cover aspect-[16/11]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionEyebrow>Meet the founder</SectionEyebrow>
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start mt-8">
            <div className="rounded-[2rem] overflow-hidden shadow-sm w-48 sm:w-64 flex-shrink-0 mx-auto lg:mx-0">
              <img src={TEAM_1} alt="Founder" className="w-full h-full object-cover aspect-[3/4]" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-2">
                Ama
              </h2>
              <p className="text-primary font-semibold mb-6">EMDR-Trained Therapist</p>
              <div className="space-y-4 text-gray-600 leading-relaxed max-w-2xl">
                <p>
                  Ama is a compassionate and culturally responsive therapist dedicated to helping individuals navigate life's challenges and achieve meaningful, sustainable growth. With years of experience in the mental health field, she has worked across university counseling, residential treatment, and private practice settings, providing care to individuals from diverse backgrounds, cultures, and stages of life. Her experience ranges from supporting college students and young adults through life transitions to working with individuals experiencing severe and persistent mental illness, as well as high-functioning children to professionals managing anxiety, depression, trauma, relationship concerns, and stress.
                </p>
                <p>
                  Ama believes that effective therapy begins with understanding the unique experiences and needs of each person. She takes a person-centered approach and recognizes that no single therapeutic method works for everyone. To best support her clients, she integrates evidence-based approaches including Eye Movement Desensitization and Reprocessing (EMDR), Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT). As an EMDR-trained therapist, she helps clients process difficult experiences, develop healthier coping strategies, and build emotional resilience.
                </p>
                <p>
                  Ama's goal is to create a warm, supportive, and nonjudgmental space where clients feel heard, understood, and empowered. She works collaboratively with individuals to address concerns such as anxiety, depression, trauma, attachment wounds, relationship challenges, self-esteem, and life transitions. Through therapy, clients gain practical tools, deeper self-awareness, and the confidence to move toward a more balanced, fulfilling life.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {['EMDR', 'CBT', 'DBT', 'ACT', 'Trauma', 'Anxiety & Depression'].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-stone-200 bg-stone-50 text-gray-600">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
