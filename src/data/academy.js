// Central source of truth for academy content.
// Items marked PLACEHOLDER should be reviewed/replaced with real details.

export const academy = {
  name: "EduSkills Academy",
  tagline: "Tuition & Skills Centre",
  founder: "R. Mahesh Priya",
  founderCreds: "HDCA, M.Sc., PhD Scholar",
  phone: "8667664248",
  phoneDisplay: "866 766 42 48",
  email: "eduskillsacademy.in@gmail.com",
  address: "Luxury Complex, ARR Road, Kumbakonam – 612 001",
  whatsappLink: "https://wa.me/918667664248",
};

export const boardPrograms = [
  {
    code: "STD-J",
    range: "6th – 10th",
    title: "Junior Boards",
    subtitle: "CBSE / ICSE / State Board · Tamil & English Medium",
    subjects: ["All Subjects"],
    note: "Full subject coverage, every board, both mediums.",
  },
  {
    code: "STD-S",
    range: "11th – 12th",
    title: "Senior Boards",
    subtitle: "CBSE / ICSE / State Board · Tamil & English Medium",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Business Maths"],
    note: "Subject-wise expert faculty for board + entrance prep.",
  },
  {
    code: "STD-C",
    range: "College & Engineering",
    title: "Higher Studies Support",
    subtitle: "Engineering & Diploma Mathematics",
    subjects: ["Engineering Mathematics I/II/III/IV", "Diploma Mathematics", "Mini & Final Year Project Guidance"],
    note: "For engineering and diploma students needing exam or project support.",
  },
];

export const skillPrograms = [
  {
    slug: "spoken-english",
    code: "SK-01",
    title: "Spoken English",
    short: "Build everyday fluency and interview-ready confidence.",
    audience: "School students, college students & working professionals", // PLACEHOLDER: confirm exact audience split
    duration: "PLACEHOLDER — e.g. 8 weeks, 3 sessions/week",
    format: "Center & Online batches available",
    highlights: [
      "Conversation practice in small groups",
      "Grammar fundamentals without the boredom",
      "Interview & public speaking confidence",
      "Accent neutralization & everyday vocabulary",
    ],
    fee: "PLACEHOLDER — contact academy for current fee",
  },
  {
    slug: "speed-maths",
    code: "SK-02",
    title: "Speed Maths",
    short: "Faster mental calculation for exams and everyday problem solving.",
    audience: "School students preparing for boards & competitive exams",
    duration: "PLACEHOLDER",
    format: "Center & Online batches available",
    highlights: [
      "Vedic & mental math shortcuts",
      "Speed-accuracy drills",
      "Exam-pattern practice",
    ],
    fee: "PLACEHOLDER — contact academy for current fee",
  },
  {
    slug: "quantitative-aptitude",
    code: "SK-03",
    title: "Quantitative Aptitude",
    short: "Crack placement tests and competitive exams with structured practice.",
    audience: "College students & job seekers preparing for placements/competitive exams", // PLACEHOLDER: confirm
    duration: "PLACEHOLDER",
    format: "Center & Online batches available",
    highlights: [
      "Arithmetic, algebra & data interpretation",
      "Logical reasoning practice sets",
      "Mock tests with timed practice",
      "Placement-pattern question banks",
    ],
    fee: "PLACEHOLDER — contact academy for current fee",
  },
  {
    slug: "ai-tools-technology",
    code: "SK-04",
    title: "AI Tools & Technology",
    short: "Practical, hands-on training on tools shaping today's workplace.",
    audience: "Students & professionals wanting practical AI literacy", // PLACEHOLDER: confirm
    duration: "PLACEHOLDER",
    format: "Center & Online batches available",
    highlights: [
      "Hands-on with everyday AI tools",
      "Practical use-cases, not just theory",
      "Basic computing fundamentals included",
      "Project-based learning",
    ],
    fee: "PLACEHOLDER — contact academy for current fee",
  },
  {
    slug: "coding-skills",
    code: "SK-05",
    title: "Basic Computing & Coding Skills",
    short: "A practical first step into computers and programming logic.",
    audience: "School & college students new to programming",
    duration: "PLACEHOLDER",
    format: "Center & Online batches available",
    highlights: [
      "Computer fundamentals",
      "Introductory programming logic",
      "Hands-on lab practice",
    ],
    fee: "PLACEHOLDER — contact academy for current fee",
  },
];

// PLACEHOLDER testimonials — replace with real student quotes once available
export const testimonials = [
  {
    name: "Parent of Std 10 student",
    text: "PLACEHOLDER — add a real parent/student testimonial here once collected.",
  },
  {
    name: "Placement aspirant",
    text: "PLACEHOLDER — add a real testimonial about aptitude/placement results here.",
  },
];
