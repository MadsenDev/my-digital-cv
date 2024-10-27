"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { educations } from '@/data/educations'; // Import the educations data

const EducationSection = () => {
  return (
    <section className="py-10 bg-white relative">
      {/* Full-Width Horizontal Line */}
      <div className="absolute left-0 right-0 bottom-10 h-1 bg-primary hidden md:block"></div> {/* Hidden on mobile */}

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Utdanning</h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Responsive grid layout */}
          {educations.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="relative bg-gray-100 shadow-lg p-6 bottom-6 rounded-lg flex flex-col items-center"
            >
              {/* Vertical Line and Dot for larger screens */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-1 h-8 bg-primary"></div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-primary rounded-full"></div>

              {/* Card Content */}
              <div className="text-primary flex items-center justify-center mb-4">
                <FaGraduationCap size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground text-center">{education.degree}</h3>
              <p className="text-gray-600 text-center">{education.school}</p>
              <p className="text-gray-500 italic text-center">{education.duration}</p>
              <p className="mt-4 text-gray-700 text-center">{education.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;