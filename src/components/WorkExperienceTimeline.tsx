"use client";

import { motion } from 'framer-motion';
import WorkExperience from './WorkExperience';
import { workExperiences } from '@/data/workExperiences'; // Import the work experiences data

const WorkExperienceTimeline = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 md:px-16 lg:px-48"> {/* Adjust padding for mobile */}
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Arbeidserfaring</h2>
        <div className="relative">
          {/* Vertical Line for large screens */}
          <div className="block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-primary"></div>

          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
                transition={{ duration: 0.4, delay: index * 0.1 }} 
                viewport={{ once: false, margin: '-10% 0px' }}
                className={`relative flex md:${index % 2 === 0 ? 'justify-start' : 'justify-end'} justify-center`}
              >
                {/* Dot Indicator for larger screens */}
                <div className="block absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-primary rounded-full"></div>

                {/* Work Experience Card */}
                <div className="w-full max-w-md md:max-w-sm lg:max-w-md">
                  <WorkExperience
                    title={experience.title}
                    company={experience.company}
                    duration={experience.duration}
                    description={experience.description}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceTimeline;