export const HERO_IMG = 'https://images.unsplash.com/photo-1668915064380-258413131280?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwc3ljaG90aGVyYXB5JTIwYmxhY2t8ZW58MHx8MHx8fDA%3D';
export const TEAM_1 = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80';
export const TEAM_2 = 'https://images.unsplash.com/photo-1565884280295-98eb83e41c65?auto=format&fit=crop&w=400&q=80';
export const TEAM_3 = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80';
export const CARD_1 = 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=600&q=80';
export const CARD_2 = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80';
export const CARD_3 = 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=600&q=80';

export const mainNavItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
];

export const services = [
  {
    tag: 'Individual',
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs, exploring patterns, building resilience, and creating lasting change.',
    img: CARD_1,
    topics: ['Anxiety & Depression', 'Trauma Recovery', 'Life Transitions', 'Grief & Loss'],
  },
  {
    tag: 'Couples',
    title: 'Couples Counseling',
    description: 'Strengthen communication, rebuild trust, and rediscover connection with a therapist specialized in relational healing.',
    img: CARD_2,
    topics: ['Communication Skills', 'Conflict Resolution', 'Trust & Intimacy', 'Pre-marital'],
  },
  {
    tag: 'Family',
    title: 'Family Therapy',
    description: 'Navigate family dynamics, heal generational patterns, and build healthier relationships across every stage of life.',
    img: CARD_3,
    topics: ['Parent-Child Relations', 'Blended Families', 'Adolescent Issues', 'Family Conflict'],
  },
];

export const stats = [
  { value: '2,400+', label: 'Clients Served' },
  { value: '15+', label: 'Licensed Clinicians' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10 yrs', label: 'In Practice' },
];

export const testimonials = [
  {
    quote: "Coming here was the best decision I've ever made. My therapist helped me understand myself in ways I never expected. I feel genuinely different and lighter.",
    author: 'Maya T.',
    role: 'Individual therapy client',
    rating: 5,
  },
  {
    quote: 'We were on the verge of separating. After six months of couples counseling here, we have tools we use every single day.',
    author: 'Daniel & Priya S.',
    role: 'Couples counseling clients',
    rating: 5,
  },
  {
    quote: 'The intake process was warm, non-judgmental, and easy. I felt safe from the very first call.',
    author: 'Carla M.',
    role: 'Family therapy client',
    rating: 5,
  },
];

export const articles = [
  {
    category: 'Anxiety',
    title: 'What Happens in Your Brain During a Panic Attack',
    excerpt: 'Understanding the neuroscience behind panic can help demystify the experience and make it far less frightening.',
    readTime: '6 min read',
    img: CARD_1,
  },
  {
    category: 'Relationships',
    title: 'The Four Communication Patterns That Predict Divorce',
    excerpt: 'Researcher John Gottman identified four behaviors that, if left unchecked, can erode even the strongest partnership.',
    readTime: '8 min read',
    img: CARD_2,
  },
  {
    category: 'Trauma',
    title: 'How EMDR Reprocesses Traumatic Memory',
    excerpt: 'EMDR has emerged as one of the most evidence-backed treatments for PTSD and complex trauma.',
    readTime: '7 min read',
    img: CARD_3,
  },
];

export const faqs = [
  {
    q: 'How do I know if therapy is right for me?',
    a: "If you're experiencing persistent stress, difficulty coping, relationship challenges, or simply seeking personal growth, therapy can help.",
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes, we accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, and UnitedHealthcare.',
  },
  {
    q: 'What can I expect in the first session?',
    a: "Your first session is about getting to know each other, your goals, and building a treatment plan that feels realistic and supportive.",
  },
  {
    q: 'Is everything I share confidential?',
    a: 'Yes. Confidentiality is a cornerstone of therapy, with limited exceptions required by law for safety.',
  },
  {
    q: 'Do you offer telehealth sessions?',
    a: 'Absolutely. All of our therapists offer secure video sessions for clients who prefer flexibility or remote care.',
  },
];

export const therapists = [
  {
    name: 'Dr. Sarah Mitchell',
    credentials: 'PhD, Licensed Psychologist',
    specialty: 'Trauma & Anxiety',
    modalities: ['EMDR', 'CBT', 'Somatic'],
    img: TEAM_1,
    bio: '12 years clinical experience. Former faculty at UCSF. Specializes in complex trauma and anxiety disorders.',
  },
  {
    name: 'James Rodriguez',
    credentials: 'LCSW, DBT Certified',
    specialty: 'Depression & Adolescents',
    modalities: ['DBT', 'ACT', 'Narrative'],
    img: TEAM_2,
    bio: 'Trained at UCLA. Works with teens, adults, and families navigating depression, identity, and life transitions.',
  },
  {
    name: 'Dr. Emily Chen',
    credentials: 'PhD, LMFT',
    specialty: 'Couples & Family',
    modalities: ['EFT', 'Gottman', 'IFS'],
    img: TEAM_3,
    bio: 'Gottman Level III trained. Specializes in rebuilding connection in couples and multi-generational family systems.',
  },
];

export const approachPrinciples = [
  {
    title: 'Evidence with empathy',
    description: 'We use proven modalities, but the work never feels mechanical. Research guides the plan while real relationship carries the process.',
  },
  {
    title: 'Clear treatment direction',
    description: 'Every client leaves with a sense of where the work is headed, what is being practiced, and how progress is being measured.',
  },
  {
    title: 'Context matters',
    description: 'Symptoms are not isolated events. We look at family systems, culture, stress load, identity, and lived experience together.',
  },
  {
    title: 'Care that adapts',
    description: 'The approach changes as you change. Your treatment plan is revisited regularly so it keeps fitting your life.',
  },
];

export const carePath = [
  { step: '01', title: 'Consultation', description: 'A brief call to understand what brings you in and match you with the right clinician.' },
  { step: '02', title: 'Assessment', description: 'Your early sessions focus on goals, history, patterns, and the support systems around you.' },
  { step: '03', title: 'Treatment', description: 'Together you build skills, process deeper themes, and create sustainable behavioral change.' },
  { step: '04', title: 'Integration', description: 'We track progress and make sure the work translates into everyday routines and relationships.' },
];
