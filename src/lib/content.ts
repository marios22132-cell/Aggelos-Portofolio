/**
 * Single source of truth for every piece of content on the site.
 * Facts here come from `public/CV/Angelos-Theodorou-Resume.pdf` — do not invent additions.
 */

export type NavLink = {
  label: string;
  href: string;
};

/** Nav labels map 1:1 to the section ids rendered in `src/app/page.tsx`. */
export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Angelos Theodorou",
  eyebrow: "Network Technician · Wireless & Security Systems",
  headline: "I connect homes and businesses to the internet — then keep the link running and secure.",
  bio: "Network technician at a wireless internet service provider, with hands-on experience in field installations, point-to-point and point-to-multipoint wireless links, and remote network diagnostics. I work daily with Ubiquiti gear, fiber optics and MikroTik/OpenWrt routers, and also install CCTV and alarm systems. BSc in Applied Informatics with Cisco CCNA training, currently pursuing an MSc in Computer and Network Security.",
  email: "angelos.theo.01@gmail.com",
  phone: "+357 96 291 052",
  location: "Paphos, Cyprus",
  photo: "/image/AngelosPhoto.png",
  photoAlt: "Portrait of Angelos Theodorou",
  cv: "/CV/Angelos-Theodorou-Resume.pdf",
} as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Network Technician",
    company: "Ecotech LTD",
    period: "2020 — Present",
    highlights: [
      "Install and configure point-to-point and point-to-multipoint (PtP/PtMP) wireless links using Ubiquiti equipment (LiteBeam, LTU, Wave).",
      "Install and configure customer routers (TP-Link, D-Link, Mercusys, Cudy, Ubiquiti airCube, MikroTik).",
      "Run fiber optic installations and structured cabling.",
      "Provide remote technical support to customers, diagnosing and resolving network faults.",
      "Install and configure CCTV and alarm systems.",
    ],
  },
];

export type Project = {
  title: string;
  context: string;
  description: string;
  tech: string[];
  /** Live deployment, when there is one. */
  demo?: string;
  /** Public source. Absent for client and employer work. */
  repo?: string;
  /** Shown when neither link exists, so the card never looks broken. */
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Multi-Source Data Fusion for Intrusion Detection",
    context: "BSc Thesis · Neapolis University Pafos",
    description:
      "An intrusion detection system combining data from six modalities of the TON_IoT dataset. Trained per-source XGBoost and Random Forest models, combined them through late fusion with a meta-classifier, handled class imbalance with ADASYN, and explained model decisions with SHAP and LIME.",
    tech: ["Python", "XGBoost", "Random Forest", "ADASYN", "SHAP", "LIME"],
    note: "Academic thesis project — source not public",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Wireless Networks",
    items: ["Ubiquiti airMAX", "LTU", "Wave", "PtP / PtMP", "Antenna Alignment"],
  },
  {
    title: "Networking & Routing",
    items: ["TCP/IP", "DHCP", "Cisco IOS", "MikroTik", "OpenWrt"],
  },
  {
    title: "Security & VPN",
    items: ["Firewalls", "Intrusion Detection (IDS)"],
  },
  {
    title: "Machine Learning for Security",
    items: ["Python", "XGBoost", "Random Forest", "SHAP", "LIME"],
  },
  {
    title: "Physical Layer",
    items: ["Fiber Optics", "Structured Cabling", "RJ45 Termination"],
  },
  {
    title: "Security Systems",
    items: ["CCTV / IP Cameras", "NVR / DVR", "Alarm Systems"],
  },
  {
    title: "Support & Troubleshooting",
    items: ["Remote Support", "Fault Diagnosis", "Customer Service"],
  },
  {
    title: "Tools & Programming",
    items: ["Wireshark", "C++", "Java", "MS Office"],
  },
];

export type Education = {
  degree: string;
  school: string;
  faculty?: string;
  period: string;
  thesis?: string;
};

export const EDUCATION: Education[] = [
  {
    degree: "MSc Computer and Network Security",
    school: "Open University of Cyprus",
    faculty: "Distance learning",
    period: "Oct 2022 — Present",
  },
  {
    degree: "BSc Applied Informatics",
    school: "Neapolis University Pafos",
    faculty: "School of Economics, Business and Computer Sciences",
    period: "2022 — 2026",
    thesis:
      "Multi-source data fusion for intrusion detection — combining six modalities of the TON_IoT dataset with late-fusion meta-classification, ADASYN class balancing, and SHAP/LIME explainability.",
  },
];

export const CERTIFICATIONS = [
  "CCNA Routing and Switching: Routing and Switching Essentials — Cisco Networking Academy (2019)",
  "CCNA Routing and Switching: Introduction to Networks — Cisco Networking Academy (2018)",
  "C++ Programming Certificate — Cyprus Computer Society (2015)",
  "ECDL — Full Certification — ECDL Foundation (2014)",
] as const;

export const LANGUAGES = ["Greek — Native", "English — C1 (Anglia Proficiency)"] as const;
