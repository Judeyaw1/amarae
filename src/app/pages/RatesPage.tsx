import { CheckCircle2, CreditCard, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { SectionEyebrow } from '../components/SectionEyebrow';

const sessionFees = [
  { service: 'Individual Therapy', duration: '50-minute session', fee: '$150 - $180' },
  { service: 'Couples Counseling', duration: '80-minute session', fee: '$200 - $230' },
  { service: 'Family Therapy', duration: '80-minute session', fee: '$200 - $230' },
  { service: 'Relational Therapy', duration: '60-minute session', fee: 'Starting at $250 (private pay only)' },
  { service: 'Life Coaching', duration: '60-minute session', fee: '$150' },
  { service: 'Workshops & Groups', duration: '90-minute session', fee: '$60 per participant' },
];

const acceptedInsurance = ['BlueCross BlueShield', 'Aetna', 'Cigna', 'UnitedHealthcare'];

const paymentMethods = [
  'Credit & debit cards',
  'HSA / FSA cards',
  'Cash & check',
  'Online client portal payments',
];

export function RatesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <SectionEyebrow inverse>Rates & Insurance</SectionEyebrow>
          <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold leading-[0.96] tracking-[-0.03em] mb-6 max-w-4xl">
            Clear pricing,
            <br />
            simple payment options.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            We believe cost shouldn't be a mystery. Below is an overview of our session fees, the insurance plans we accept, and the ways you can pay.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionEyebrow>Session Fees</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-8 max-w-2xl">
            What sessions cost
          </h2>
          <div className="overflow-hidden rounded-[1.75rem] border border-stone-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-foreground">
                  <th className="px-6 py-4 text-sm font-semibold">Service</th>
                  <th className="px-6 py-4 text-sm font-semibold">Session Length</th>
                  <th className="px-6 py-4 text-sm font-semibold">Fee</th>
                </tr>
              </thead>
              <tbody>
                {sessionFees.map((row, index) => (
                  <tr key={row.service} className={index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.service}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.duration}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-4 max-w-2xl">
            Fees may vary by clinician and are confirmed during your free consultation. Sliding-scale spots may be available — ask us about availability.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f1ea] py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="rounded-[1.75rem] bg-white border border-stone-200 p-8">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <SectionEyebrow>Insurance</SectionEyebrow>
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">Plans we accept</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We accept most major insurance plans, including:
            </p>
            <ul className="space-y-3 mb-6">
              {acceptedInsurance.map((plan) => (
                <li key={plan} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{plan}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 leading-relaxed">
              We will verify your benefits before your first session so you know your coverage and any out-of-pocket cost upfront. Note: Relational Therapy is private pay only and is not billed to insurance.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-white border border-stone-200 p-8">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-5">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <SectionEyebrow>Payment</SectionEyebrow>
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">Ways to pay</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Payment is collected at the time of each session. We accept:
            </p>
            <ul className="space-y-3 mb-6">
              {paymentMethods.map((method) => (
                <li key={method} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 leading-relaxed">
              A valid card is kept securely on file through our client portal for any balances not covered by insurance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <SectionEyebrow>Good to know</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
              Cancellation & superbills
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We ask for at least 24 hours' notice to cancel or reschedule a session. Late cancellations and missed appointments may be charged the full session fee.
              </p>
              <p>
                If you are out-of-network with your insurance, we can provide a monthly superbill that you can submit to your provider for possible reimbursement.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-primary p-8 text-foreground">
            <h3 className="font-serif text-2xl font-semibold mb-3">Have questions about cost?</h3>
            <p className="text-sm text-foreground/75 leading-relaxed mb-6">
              Reach out for a free consultation and we'll walk through your coverage, expected fees, and payment options together.
            </p>
            <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_18px_50px_rgba(199,210,191,0.35)] hover:bg-accent/90 transition-colors">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
