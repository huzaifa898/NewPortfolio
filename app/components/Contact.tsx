"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        {/* Centered Contact Info */}
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:yousafxaihuzaifa@gmail.com"
                className="flex justify-center items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                yousafxaihuzaifa@gmail.com
              </a>
              <a
                href="tel:+923439442998"
                className="flex justify-center items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                +92-343-9442998
              </a>
              <div className="flex justify-center items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                Lahore, Pakistan
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}
