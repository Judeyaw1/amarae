import { ContactSection } from '../components/ContactSection';
import { SectionEyebrow } from '../components/SectionEyebrow';

export function ConsultationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5efe6_0%,#fcfaf7_44%,#edf4f1_100%)]">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <SectionEyebrow>Make Inquiries</SectionEyebrow>
              <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold text-gray-900 leading-[0.96] tracking-[-0.03em] mb-6">
                Start with a conversation,
                <br />
                not a commitment.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Reach out, ask questions, and schedule a free consultation through a dedicated page designed to feel simple and clear.
              </p>
            </div>
            <div className="rounded-[2rem] bg-gray-900 text-white p-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300 font-semibold mb-4">Quick facts</div>
              <div className="space-y-4 text-white/75">
                <p>15-minute consultation call</p>
                <p>Insurance verification support</p>
                <p>telehealth options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
