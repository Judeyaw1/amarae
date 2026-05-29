export const HERO_IMG = 'https://images.unsplash.com/photo-1714976694525-71eb29a7c500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHNlc3Npb24lMjBjYWxtfGVufDF8fHx8MTc3OTU4OTI1Mnww&ixlib=rb-4.1.0&q=80&w=1080';
export const TEAM_1 = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0aGVyYXBpc3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTQ4ODQzMnww&ixlib=rb-4.1.0&q=80&w=400';
export const TEAM_2 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXBpc3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTQ4ODQzMnww&ixlib=rb-4.1.0&q=80&w=400';
export const TEAM_3 = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0aGVyYXBpc3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3OTQ4ODQzMnww&ixlib=rb-4.1.0&q=80&w=400';
export const CARD_1 = 'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHNlc3Npb24lMjBjYWxtfGVufDF8fHx8MTc3OTU4OTI1Mnww&ixlib=rb-4.1.0&q=80&w=600';
export const CARD_2 = 'https://images.unsplash.com/photo-1461468611824-46457c0e11fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMG5hdHVyZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc3OTU4OTI1M3ww&ixlib=rb-4.1.0&q=80&w=600';
export const CARD_3 = 'https://images.unsplash.com/photo-1573495804664-b1c0849525af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHNlc3Npb24lMjBjYWxtfGVufDF8fHx8MTc3OTU4OTI1Mnww&ixlib=rb-4.1.0&q=80&w=600';

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
