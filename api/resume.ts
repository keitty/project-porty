import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Content-Type', 'application/json')

  const resume = {
    meta: {
      version: "1.0.0",
      last_updated: "2026",
      url: "https://project-porty.vercel.app/api/resume"
    },
    personal: {
      name: "Keitty Vilela Prevedel",
      title: "Integration Specialist & Front-End Engineer",
      email: "keitty.prevedel@gmail.com",
      location: "São Paulo, Brazil (GMT-3)",
      phone: "+55 11 92102-7443",
      linkedin: "https://linkedin.com/in/keitty-prevedel",
      portfolio: "https://project-porty.vercel.app"
    },
    summary: "Integration Specialist with over 12 years of experience in the tech industry, including 7 years specializing in integrations. Expertise in SaaS and financial products with proven experience working with APIs, JSON, SDKs, JavaScript, and both server- and client-side web.",
    languages: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "Fluent" },
      { language: "Spanish", level: "Proficient" }
    ],
    skills: {
      technical: ["RESTful APIs", "Webhooks", "JSON", "SOAP", "SQL", "NoSQL", "JavaScript", "Front-End", "Payments Integration"],
      platforms: ["Postman", "GitHub/Git", "VS Code", "Google Cloud", "Jira", "Salesforce", "Zendesk", "Adyen", "Stripe", "PayPal", "HubSpot", "Grafana"],
      project_management: ["Agile", "Scrum", "Scope & Risk Management", "Quality Assurance", "Technical Documentation"],
      soft_skills: ["Remote Work", "Global Stakeholder Management", "Technical Consulting", "Cross-functional Leadership", "Customer Centricity", "Pre-sale Consulting"]
    },
    experience: [
      {
        company: "Adyen",
        role: "Implementation Engineer AMER",
        period: "Apr 2022 – Mar 2026",
        duration: "4 years",
        highlights: [
          "Provided high-level pre-sales consulting for prospective global merchants.",
          "Launched 100+ global and local projects, reducing time-to-market by ~50%.",
          "Served as REST API expert maintaining high-standard documentation.",
          "Guided B2B and Tier 1 retailers through complex POS and digital integrations.",
          "Built demos for Sales and Customer presentations."
        ]
      },
      {
        company: "Adyen",
        role: "Technical Support Engineer LATAM",
        period: "Jul 2019 – Apr 2022",
        duration: "2 years 10 months",
        highlights: [
          "Delivered advanced technical troubleshooting for POS and Digital systems.",
          "Dedicated CSM for Netflix and Meta.",
          "Resolved 100+ tickets and 20+ calls per day as L2/L3 Support Engineer.",
          "Managed complex merchant issues related to financial reconciliation and APIs."
        ]
      },
      {
        company: "SaaSTec",
        role: "Product Support Manager",
        period: "Jan 2016 – Dec 2018",
        duration: "3 years",
        highlights: [
          "Managed a team of 3 Support Engineers with 80-90% CSAT score.",
          "Assisted customers in complex L2/L3 situations.",
          "SQL querying for advanced analysis and reporting.",
          "Facilitated communication between development and support teams."
        ]
      }
    ],
    education: [
      {
        institution: "Universidade Norte do Paraná",
        degree: "MBA in Project Management",
        year: "2019"
      },
      {
        institution: "Universidade Positivo",
        degree: "B.S. in Systems Analysis and Development",
        year: "2017"
      }
    ],
    certifications: [
      { name: "Front-End Engineer", issuer: "Codecademy", year: "2026", status: "In Progress" },
      { name: "Spanish Course", year: "2026", status: "In Progress" },
      { name: "Generative AI: Prompt Engineering Basics", issuer: "IBM", year: "2025", status: "Completed" },
      { name: "Scrum Fundamentals Certified (SFC)", year: "2020", status: "Completed" },
      { name: "Professional Customer Service (PCS)", year: "2019", status: "Completed" }
    ],
    availability: {
      type: "Remote",
      timezones: ["LATAM GMT-3 to GMT-6", "US East Coast (ET)", "US West Coast (PT)", "Western European (GMT+0)", "Central European (GMT+1)"]
    }
  }

  return res.status(200).json(resume)
}