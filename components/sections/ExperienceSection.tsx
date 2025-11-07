'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
import { Section, Modal, Card } from '@/components/ui';
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
            <h2 className="heading-lg mb-4 text-deep-black">Experience</h2>
            <div className="w-20 h-1 bg-deep-black mx-auto" />
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={slideUp}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-[30px] w-3 h-3 bg-deep-black rounded-full ring-4 ring-cream-bg" />

                  {/* Experience Card */}
                  <div className="md:ml-20">
                    <Card
                      variant="default"
                      padding="lg"
                      hover="lift"
                      className="cursor-pointer group border-gray-200 hover:border-deep-black transition-all duration-300"
                      onClick={() => setSelectedExperience(exp)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-deep-black group-hover:text-ocean-blue transition-colors">
                              {exp.role}
                            </h3>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-ocean-blue group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-lg font-semibold text-gray-text">
                            {exp.company}
                          </p>
                        </div>
                        <Briefcase className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-text">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-text leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Achievements Preview */}
                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-semibold text-deep-black flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Key Impact
                        </p>
                        {exp.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-text">
                            <span className="w-1.5 h-1.5 rounded-full bg-deep-black mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-text rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-text rounded-lg text-xs font-medium">
                              +{exp.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      )}
                    </Card>
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
            {/* Company Info */}
            <div className="pb-6 border-b border-gray-200">
              <p className="text-2xl font-bold text-ocean-blue mb-3">
                {selectedExperience.company}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-text rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  {selectedExperience.period}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-text rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {selectedExperience.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-ocean-blue" />
                Role Overview
              </h4>
              <p className="text-gray-text leading-relaxed">
                {selectedExperience.description}
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-deep-black" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {selectedExperience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-deep-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-gray-text leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            {selectedExperience.technologies && (
              <div>
                <h4 className="font-bold text-lg mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-text rounded-lg text-sm font-semibold"
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
