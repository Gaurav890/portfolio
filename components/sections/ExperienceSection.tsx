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
            <h2 className="heading-lg mb-4 text-slate-900">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mx-auto rounded-full" />
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
                  <div className="hidden md:block absolute left-[30px] w-3 h-3 bg-indigo-600 rounded-full ring-4 ring-cream-bg" />

                  {/* Experience Card */}
                  <div className="md:ml-20">
                    <Card
                      variant="default"
                      padding="lg"
                      hover="lift"
                      className="cursor-pointer group border-slate-200 hover:border-indigo-600 transition-all duration-300 relative"
                      onClick={() => setSelectedExperience(exp)}
                    >
                      {/* Click to expand indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-slate-400 group-hover:text-indigo-600 transition-colors">
                        <span className="hidden sm:inline font-medium">Click to expand</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                      </div>

                      <div className="flex items-start justify-between mb-4 pr-24">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {exp.role}
                            </h3>
                          </div>
                          <p className="text-lg font-semibold text-gray-text">
                            {exp.company}
                          </p>
                        </div>
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

                      {/* Tags */}
                      {exp.tags && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-ocean-blue/10 text-ocean-blue rounded-lg text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
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
