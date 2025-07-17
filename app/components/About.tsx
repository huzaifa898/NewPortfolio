"use client"

import { motion } from "framer-motion"
import { Code, Bug, Network,Settings } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: "Frontend",
    description: "React, Next.js, Redux",
  },
  {
    icon: <Bug className="w-8 h-8 text-red-500" />,
    title: "QA",
    description: "Manual Testing, Test Cases, Bug Reporting",
  },
  {
    icon: <Network className="w-8 h-8 text-green-500" />,
    title: "API Testing",
    description: "Postman, Swagger, REST APIs",
  },
   {
    icon: <Settings className="w-8 h-8 text-orange-500" />,
    title: "Automation Testing",
    description: "Selenium, Cypress, Playwright",
  },
];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 md:mr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-tight mb-6 text-justify">
              As a passionate Frontend Developer, I specialize in building visually appealing and responsive web interfaces.
              With expertise in React.js, Next.js, and modern UI frameworks, I craft seamless user experiences that are both dynamic and accessible.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-tight text-justify">
              In addition to frontend development, I work as a QA Engineer—focusing on software testing, bug tracking, and quality assurance processes
              to ensure high-performance, reliable applications. I’m committed to clean code, user-focused design, and continuous learning to stay ahead of industry trends.
            </p>

          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6 md:ml-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
