import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../components/ui/carousel';
import { SectionEyebrow } from '../components/SectionEyebrow';
import { services } from '../data/siteContent';

function ServiceCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-5">
          {services.map((s, index) => (
            <CarouselItem key={s.title} className="pl-5 basis-[88%] sm:basis-[52%] lg:basis-[34%]">
              <Link
                to={`/services/${s.slug}`}
                className={`group flex flex-col overflow-hidden rounded-[2rem] border transition-all hover:-translate-y-1 hover:shadow-xl h-full ${
                  index === 1 || index === 3 ? 'border-primary/20 bg-primary text-white' : 'border-stone-200 bg-stone-50'
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.06)_0%,rgba(17,24,39,0.48)_100%)]" />
                  <div className="absolute top-4 left-4">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${index === 1 || index === 3 ? 'bg-white text-primary' : 'bg-white/90 text-primary'}`}>
                      {s.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="font-serif text-3xl mb-3">{s.title}</h2>
                  <p className={`text-sm leading-relaxed mb-5 flex-1 ${index === 1 || index === 3 ? 'text-white/75' : 'text-gray-600'}`}>
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.topics.map((t) => (
                      <span key={t} className={`rounded-full px-3 py-1 text-xs ${index === 1 || index === 3 ? 'border border-white/20 text-white/85' : 'border border-stone-200 bg-white text-gray-600'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-2 text-sm font-semibold ${index === 1 || index === 3 ? 'text-white' : 'text-primary'}`}>
                    Learn more & book <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-8">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            type="button"
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            type="button"
            aria-label="Next"
            className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f5efe6_0%,#fcfaf7_44%,#edf4f1_100%)]">
        <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-22">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-center">
            <div>
              <SectionEyebrow>Services</SectionEyebrow>
              <h1 className="font-serif text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-semibold text-gray-900 leading-[0.96] tracking-[-0.03em] mb-6">
                Care options built
                <br />
                around how people
                <br />
                actually live.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                Individual depth work, couples counseling, family therapy, life coaching, and workshops — all matched with the pace, format, and clinician that fits best.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(91,143,184,0.22)] hover:bg-primary/90 transition-colors">
                  Find Your Fit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/approach" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 hover:border-primary hover:text-primary transition-colors">
                  See Our Approach
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Session formats', value: '1:1, couples, family, groups' },
                { label: 'Availability', value: 'Daytime, evenings, Saturday' },
                { label: 'Access', value: 'telehealth' },
                { label: 'Support', value: 'Consultation before you commit' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">{item.label}</div>
                  <div className="font-serif text-2xl leading-tight text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>What we offer</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02]">
                Support can be tailored
                <br />
                without feeling generic.
              </h2>
            </div>
            <p className="max-w-md text-gray-600 leading-relaxed">
              Each service is matched to your goals, schedule, and the style of care most likely to help.
            </p>
          </div>

          <ServiceCarousel />
        </div>
      </section>

      <section className="bg-[#f6f1ea] py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <SectionEyebrow>How matching works</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.02] mb-5">
              Fit matters as much
              <br />
              as availability.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              We look at the issue you are bringing in, your pace, your goals, and which kind of therapist relationship is likely to feel safest and most productive.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              'Short consultation before intake',
              'Thoughtful therapist matching',
              'Flexible telehealth scheduling',
              'Insurance verification before first visit',
            ].map((item, index) => (
              <div key={item} className="rounded-[1.75rem] bg-white p-6 border border-stone-200 shadow-sm">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2.5rem] bg-gray-900 text-white p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <SectionEyebrow inverse>Group care</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.02] mb-4">
                Shared support,
                <br />
                steady accountability.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Ongoing groups are available for anxiety, grief, relationship patterns, and emotional regulation.
              </p>
            </div>
            <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-stone-100 transition-colors">
              View current groups
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
