import { motion } from 'framer-motion'

function Experience() {
  return (
    <section id="experience" className="p-16 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Experience</h2>
      <div className="flex flex-col gap-6">
        {[
          {
            title: "Solutions Engineer",
            company: "@Adyen",
            period: "Apr-2022 - Mar-2026",
            description: "Drove the technical success of 100+ global projects as a REST API and Unified Platforms expert, slashing time-to-market by 50% through high-level pre-sales consulting. Architected complex B2B/Tier 1 integrations for POS and SaaS while delivering high-impact demos and documentation to accelerate merchant launches."
          },
          {
            title: "Technical Support Engineer",
            company: "@Adyen",
            period: "Jun-2019 - Apr-2022",
            description: "Provided advanced L2/L3 technical support and troubleshooting for POS and digital systems, resolving 100+ daily tickets and managing complex financial and API integrations. Served as a dedicated CSM for Netflix and Meta, collaborating with global teams to optimize service delivery and streamline large-scale data reconciliation."
          },
          {
            title: "Product Support Manager",
            company: "@SaaSTec",
            period: "Jan-2016 - Dec-2018",
            description: "Led a team of three support engineers to maintain a 90% CSAT while managing L2/L3 escalations and streamlining dev-to-support communication. Leveraged advanced SQL querying for data analysis to resolve complex technical issues and drive continuous product and service delivery improvements."
          }
        ].map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border border-lime-200 p-6 rounded-lg shadow hover:shadow-md transition-shadow dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="font-bold text-xl dark:text-white">{job.title}</h3>
            <p className="text-lime-600 font-medium dark:text-lime-400">{job.company}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{job.period}</p>
            <p className="mt-2 dark:text-gray-300">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience