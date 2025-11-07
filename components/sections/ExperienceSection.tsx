'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Section, Modal } from '@/components/ui';
import { experiences } from '@/lib/data';
import { Experience } from '@/lib/types';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <>
      <Section className="bg-cream-bg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="heading-lg mb-4">Experience</h2>
            <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full" />
            <p className="body-md mt-6 max-w-2xl mx-auto">
              My journey building products that matter
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-ocean-blue/20 transform md:-translate-x-px" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={slideUp}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-ocean-blue rounded-full transform -translate-x-1.5 md:-translate-x-2 z-10 ring-4 ring-cream-bg" />

                  {/* Content card */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="card p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedExperience(exp)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-deep-black mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-ocean-blue font-semibold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <Briefcase className="w-6 h-6 text-ocean-blue flex-shrink-0 ml-4" />
                      </div>

                      <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-text">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-text line-clamp-2">
                        {exp.description}
                      </p>

                      <button className="mt-4 text-ocean-blue font-medium text-sm hover:underline">
                        View Details →
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Experience Detail Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.role}
      >
        {selectedExperience && (
          <div className="space-y-6">
            <div>
              <p className="text-xl font-semibold text-ocean-blue mb-2">
                {selectedExperience.company}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-text mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedExperience.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedExperience.location}
                </span>
              </div>
              <p className="text-gray-text">{selectedExperience.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
              <ul className="space-y-3">
                {selectedExperience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-ocean-blue mt-2 flex-shrink-0" />
                    <span className="text-gray-text">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedExperience.technologies && (
              <div>
                <h4 className="font-semibold text-lg mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-soft-blue text-ocean-blue rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};
