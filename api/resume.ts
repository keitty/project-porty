import { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Allow requests from anywhere
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Content-Type', 'application/json')

  const resume = {
    meta: {
      version: "1.0.0",
      last_updated: "2026",
      url: "https://your-portfolio.vercel.app/api/resume"
    },
    personal: {
      name: "Keitty",
      title: "Front-End & Solutions Engineer",
      email: "keitty.prevedel@gmail.com",
      location: "São Paulo, Brasil",
      github: "https://github.com/keitty",
      linkedin: "https://linkedin.com/in/keitty-prevedel",
      portfolio: "https://project-porty.vercel.app"
    },
    summary: "Front-End & Solutions Engineer passionate about building modern web applications with React, TypeScript and API integrations.",
    skills: {
      languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
      frameworks: ["React", "Node.js"],
      tools: ["Git", "GitHub", "Vite", "Tailwind CSS", "Framer Motion"],
      apis: ["REST APIs", "GitHub API", "Open-Meteo", "Open Exchange Rates"]
    },
    experience: [
      {
        company: "Adyen",
        role: "Solutions Engineer",
        period: "April 2022 — March 2026",
        location: "São Paulo, Brasil",
        description: "Drove the technical success of 100+ global projects as a REST API and Unified Platforms expert, slashing time-to-market by 50% through high-level pre-sales consulting. Architected complex B2B/Tier 1 integrations for POS and SaaS while delivering high-impact demos and documentation to accelerate merchant launches.",
        technologies: ["JavaScript", "RESTFul API", "Remote Troubleshooting", "Technical Consulting", "Pre-Sales Support", "B2B Integrations", "SaaS Solutions", "Demo Creation", "Technical Documentation", "Merchant Enablement"]
      },

      {
        company: "Adyen",
        role: "Technical Support Engineer",
        period: "June 2019 — April 2022",
        location: "São Paulo, Brasil",
        description: "Provided advanced L2/L3 technical support and troubleshooting for POS and digital systems, resolving 100+ daily tickets and managing complex financial and API integrations. Served as a dedicated CSM for Netflix and Meta, collaborating with global teams to optimize service delivery and streamline large-scale data reconciliation.",
        technologies: ["JavaScript", "RESTFul API", "Remote Troubleshooting", "Technical Consulting", "Pre-Sales Support", "B2B Integrations", "SaaS Solutions", "Demo Creation", "Technical Documentation", "Merchant Enablement", "Financial Reconciliation", "Data Analysis", "Customer Success Management"]
      },

      {
        company: "SaaSTec",
        role: "Product Support Manager",
        period: "January 2016 — December 2018",
        location: "Curitiba, Brasil",
        description: "Led a team of three support engineers to maintain a 90% CSAT while managing L2/L3 escalations and streamlining dev-to-support communication. Leveraged advanced SQL querying for data analysis to resolve complex technical issues and drive continuous product and service delivery improvements.",
        technologies: ["SQL", "Technical Support Management", "Customer Satisfaction", "L2/L3 Escalation Management", "Team Leadership", "Data Analysis", "Dev-to-Support Communication", "Product Improvement"]
      }
    ],
    education: [

      {
        institution: "Univesidade do Norte do Parana",
        degree: "MBA - Project Management",
        period: "2019 — 2019",
        location: "Curitiba, Brasil"
      },

      {
        institution: "Universidade Positivo",
        degree: "Analysis and Systems Development",
        period: "2010 — 2014",
        location: "Curitiba, Brasil"
      }
    ],
    projects: [
      {
        name: "Project Porty",
        description: "Personal portfolio with live API integrations including Weather, World Clock and Currency Converter.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        url: "https://project-porty.vercel.app",
        github: "https://github.com/keitty/project-porty"
      }
    ],
    languages: [
      { language: "Spanish", level: "Professional - On Course 2026" },
      { language: "English", level: "Fluent" },
      { language: "Portuguese", level: "Native" }
    ]
  }

  return res.status(200).json(resume)
}