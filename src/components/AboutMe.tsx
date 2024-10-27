"use client";

import { aboutMe } from '@/data/aboutMe'; // Import the about me data
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 text-center"
        >
          {/* Profile Image - Larger, overlapping the content */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={aboutMe.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Introduction and Skills */}
          <div className="mt-32">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Om Meg</h2>

            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              {aboutMe.intro}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {aboutMe.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary text-white py-2 px-4 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default AboutMe;