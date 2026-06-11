export const HERO_IMG = 'https://images.unsplash.com/photo-1668915064380-258413131280?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwc3ljaG90aGVyYXB5JTIwYmxhY2t8ZW58MHx8MHx8fDA%3D';
export const TEAM_1 = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80';
export const TEAM_2 = 'https://images.unsplash.com/photo-1565884280295-98eb83e41c65?auto=format&fit=crop&w=400&q=80';
export const TEAM_3 = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80';
export const CARD_1 = 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=600&q=80';
export const CARD_2 = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80';
export const CARD_3 = 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=600&q=80';
export const CARD_4 = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80';
export const CARD_5 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80';

export const mainNavItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Rates', to: '/rates' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
];

export const services = [
  {
    slug: 'individual-therapy',
    tag: 'Individual',
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs, exploring patterns, building resilience, and creating lasting change.',
    img: CARD_1,
    topics: ['Anxiety & Depression', 'Trauma Recovery', 'Life Transitions', 'Grief & Loss'],
    fullDescription:
      'Individual therapy provides a confidential and collaborative space to explore personal challenges, increase self-awareness, and develop healthier ways of coping and relating. Treatment may focus on concerns such as mood disorders, anxiety disorders, stress, trauma, self-esteem, and personal growth. Together, we work toward meaningful change using evidence-based and client-centered approaches tailored to your goals. For clients who desire it, faith and spirituality may also be thoughtfully integrated into the therapeutic process as a source of support, healing, meaning, and personal growth while honoring each individual\'s values and beliefs.',
    whatToExpect: [
      'An initial consultation to understand your goals and match you with the right clinician',
      'Weekly or bi-weekly 50-minute sessions at your preferred time and format',
      'Evidence-based approaches including CBT, EMDR, ACT, and somatic work',
      'A treatment plan you help shape, reviewed regularly as you progress',
    ],
    whoItsFor: [
      'Adults navigating anxiety, depression, or burnout',
      'People processing grief, trauma, or major life change',
      'Anyone seeking deeper self-understanding and personal growth',
      'Clients who prefer telehealth flexibility or in-person sessions',
    ],
    duration: '50-minute sessions',
    format: 'In-person & Telehealth',
    modalities: ['CBT', 'EMDR', 'ACT', 'Somatic'],
  },
  {
    slug: 'family-therapy',
    tag: 'Family',
    title: 'Family Therapy',
    description: 'Navigate family dynamics, heal generational patterns, and build healthier relationships across every stage of life.',
    img: CARD_3,
    topics: ['Parent-Child Relations', 'Blended Families', 'Adolescent Issues', 'Family Conflict'],
    fullDescription:
      'Family therapy supports families in improving communication, strengthening relationships, and navigating challenges together. Sessions focus on understanding patterns within the family system, addressing conflict, increasing connection, and developing healthier ways of interacting. Family therapy may be helpful during periods of transition, behavioral concerns, parenting challenges, or ongoing relational stress.',
    whatToExpect: [
      'A family intake to understand roles, dynamics, and each person\'s goals',
      'Sessions that include all key members or specific sub-groups as clinically appropriate',
      'Skill-building for communication, boundaries, and conflict de-escalation',
      'Individual sessions alongside family sessions when that adds value',
    ],
    whoItsFor: [
      'Families navigating conflict, separation, or blended-family challenges',
      'Parents and adolescents struggling to connect or communicate',
      'Families processing a shared loss, illness, or major transition',
      'Multi-generational households working through inherited patterns',
    ],
    duration: '80-minute sessions',
    format: 'In-person & Telehealth',
    modalities: ['Structural Family Therapy', 'Narrative', 'DBT Skills'],
  },
  {
    slug: 'couples-counseling',
    tag: 'Couples',
    title: 'Couples Counseling',
    description: 'Strengthen communication, rebuild trust, and rediscover connection with a therapist specialized in relational healing.',
    img: CARD_2,
    topics: ['Communication Skills', 'Conflict Resolution', 'Trust & Intimacy', 'Pre-marital'],
    fullDescription:
      'Couples counseling helps partners understand each other more deeply, interrupt unhelpful cycles, and rebuild the secure connection that makes a relationship thrive. Whether you are navigating a specific crisis or simply want to strengthen an already good partnership, our Gottman- and EFT-trained clinicians guide the process with warmth and clarity.',
    whatToExpect: [
      'A joint intake and individual sessions to understand each partner\'s perspective',
      'Weekly 80-minute sessions that balance structured tools with open dialogue',
      'Frameworks for repairing conflict, improving communication, and rebuilding intimacy',
      'Clear goals set together so progress is visible and measurable',
    ],
    whoItsFor: [
      'Couples feeling stuck in repetitive conflict or emotional distance',
      'Partners wanting to deepen connection in a healthy relationship',
      'Couples preparing for marriage or a major life transition together',
      'Partners working through infidelity, grief, or a shared crisis',
    ],
    duration: '80-minute sessions',
    format: 'In-person & Telehealth',
    modalities: ['Gottman Method', 'EFT', 'IFS'],
  },
  {
    slug: 'relational-therapy',
    tag: 'Relational',
    title: 'Relational Therapy',
    description: 'Structured sessions for friends, co-parents, siblings, and other non-romantic relationships seeking healthier communication and connection.',
    img: CARD_2,
    topics: ['Communication', 'Boundaries', 'Conflict Resolution', 'Co-Parenting'],
    fullDescription:
      'Interpersonal therapy provides a structured therapeutic space for two or more individuals to improve communication, strengthen understanding, and work through relational challenges in a supportive environment. This service may include friends, colleagues, adult family members, co-parents, siblings, or other non-romantic relationships seeking healthier interaction and connection. Sessions focus on communication, boundaries, conflict resolution, and strengthening interpersonal functioning.',
    whatToExpect: [
      'A consultation to understand the relationship and each participant\'s goals',
      'Sessions that include two or more participants in a supportive, structured format',
      'Focused work on communication, boundaries, and conflict resolution',
      'Strategies for strengthening interpersonal functioning going forward',
    ],
    whoItsFor: [
      'Friends or colleagues working through ongoing tension or miscommunication',
      'Co-parents wanting to communicate more effectively for their children',
      'Adult siblings or family members navigating long-standing conflict',
      'Anyone in a non-romantic relationship seeking healthier interaction',
    ],
    duration: '60-minute sessions',
    format: 'In-person & Telehealth',
    modalities: ['Communication Skills', 'Conflict Resolution', 'Boundary Setting'],
    pricingNote: 'Insurance is not accepted for this service. Private pay only: starting at $250 per session.',
  },
  {
    slug: 'life-coaching',
    tag: 'Coaching',
    title: 'Life Coaching',
    description: 'Goal-oriented coaching to help you clarify direction, break through blocks, and build a life that genuinely reflects your values.',
    img: CARD_4,
    topics: ['Career Transitions', 'Goal Setting', 'Confidence & Mindset', 'Work-Life Balance'],
    fullDescription:
      'Life coaching is focused, future-oriented work. Unlike therapy, which explores past patterns and emotional healing, coaching helps you define what you want, identify what is getting in the way, and build momentum toward it. Sessions are practical, energizing, and structured around your goals.',
    whatToExpect: [
      'A goal-setting intake to map where you are and where you want to be',
      'Weekly or bi-weekly 60-minute sessions by video or phone',
      'Accountability structures, action steps, and between-session support',
      'Honest, supportive feedback rather than open-ended exploration',
    ],
    whoItsFor: [
      'Professionals navigating a career pivot, promotion, or burnout',
      'People who feel stuck despite having the skills and resources to move forward',
      'Anyone wanting structured accountability to hit a meaningful personal goal',
      'Clients who prefer a forward-focused approach over clinical therapy',
    ],
    duration: '60-minute sessions',
    format: 'Telehealth & Phone',
    modalities: ['Solution-Focused', 'Motivational Interviewing', 'Strengths-Based', 'Cognitive Reframing'],
  },
  {
    slug: 'workshops',
    tag: 'Group',
    title: 'Workshops & Groups',
    description: 'Structured group experiences combining psychoeducation, skill-building, and the quiet power of shared human struggle.',
    img: CARD_5,
    topics: ['Anxiety Management', 'Emotional Regulation', 'Mindfulness', 'Healthy Relationships'],
    fullDescription:
      'Our workshops and ongoing groups bring together people navigating similar challenges in a contained, clinician-led setting. Whether a single-day intensive or a recurring weekly group, these experiences combine learning, practice, and genuine peer connection in ways one-on-one work cannot replicate.',
    whatToExpect: [
      'A brief intake to confirm the group is the right fit and timing',
      'Small groups of 6–10 participants led by a licensed clinician',
      'Skill-based content you can apply immediately between sessions',
      'Both time-limited workshops and open-enrollment ongoing groups',
    ],
    whoItsFor: [
      'People who want structured skill-building alongside individual therapy',
      'Those who find community and shared experience particularly healing',
      'Clients exploring therapy for the first time who want a gentler entry point',
      'Anyone seeking targeted support around anxiety, grief, or relationship patterns',
    ],
    duration: '90-minute sessions',
    format: 'In-person & Online',
    modalities: ['DBT Skills', 'Mindfulness-Based', 'Psychoeducation', 'Group Process'],
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
