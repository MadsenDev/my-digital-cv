"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // For bar animation
import { skills } from '@/data/skills';

const SkillsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only when the section is scrolled into view
  useEffect(() => {
    const onScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      const rect = skillsSection?.getBoundingClientRect();
      if (rect?.top && rect.top < window.innerHeight && !hasAnimated) {
        setHasAnimated(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasAnimated]);

  return (
    <section id="skills-section" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Ferdigheter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">{skill.name}</h3>
              <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
                {/* Animated skill bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-blue-600 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: hasAnimated ? `${skill.proficiency}%` : '0%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                ></motion.div>
              </div>
              <div className="text-gray-500 mt-2 flex justify-between items-center">
                <p>{skill.level}</p>
                {/* Tooltip on hover to show percentage */}
                <p className="text-sm bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300">
                  {skill.proficiency}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;