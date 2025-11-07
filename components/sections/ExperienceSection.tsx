'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, TrendingUp, Award, ChevronRight } from 'lucide-react';
import { Section, Modal, Card } from '@/components/ui';
import { experiences } from '@/lib/data';
import { Experience } from '@/lib/types';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const colors = ['blue', 'purple', 'green'];

  return (
    <>
      <Section className="bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ocean-blue/30 to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple/5 to-transparent rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-ocean-blue/5 to-transparent rounded-full -ml-32 -mb-32 blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo/10 text-indigo rounded-full text-sm font-semibold mb-4">
              Career Journey
            </span>
            <h2 className="heading-lg mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Building products that drive measurable impact across AI, SEO, and cloud infrastructure
            </p>
          </motion.div>

          {/* Modern Timeline with Cards */}
          <div className="max-w-5xl mx-auto relative">
            {/* Gradient Timeline Line */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-ocean-blue via-purple to-green rounded-full" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={slideUp}
                  className="relative"
                >
                  {/* Timeline Indicator */}
                  <div className="hidden md:flex absolute left-8 w-9 h-9 bg-gradient-to-br from-ocean-blue to-purple rounded-full items-center justify-center z-10 ring-4 ring-white shadow-lg">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Experience Card */}
                  <div className="md:ml-24">
                    <Card
                      variant="elevated"
                      padding="none"
                      hover="lift"
                      accent={colors[index % 3] as any}
                      className="overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedExperience(exp)}
                    >
                      {/* Gradient Header */}
                      <div className={`p-6 bg-gradient-to-r ${
                        index === 0 ? 'from-ocean-blue/10 to-ocean-blue/5' :
                        index === 1 ? 'from-purple/10 to-purple/5' :
                        'from-green/10 to-green/5'
                      }`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-deep-black group-hover:text-ocean-blue transition-colors">
                                {exp.role}
                              </h3>
                              <ChevronRight className="w-5 h-5 text-ocean-blue transform group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-xl font-semibold text-ocean-blue">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-text">
                          <span className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6">
                        <p className="text-gray-text leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Key Achievements Preview */}
                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-semibold text-deep-black flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green" />
                            Key Impact
                          </p>
                          {exp.achievements.slice(0, 2).map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-text">
                              <span className="w-1.5 h-1.5 rounded-full bg-ocean-blue mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 mb-4">
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

                        <button className="text-ocean-blue font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Full Details
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={staggerItem} className="mt-16">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-ocean-blue/10 to-ocean-blue/5">
                <div className="w-12 h-12 rounded-full bg-ocean-blue/20 flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-ocean-blue" />
                </div>
                <div className="text-3xl font-bold text-ocean-blue mb-1">3+</div>
                <div className="text-sm text-gray-text font-medium">Years of Experience</div>
              </Card>

              <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-purple/10 to-purple/5">
                <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple" />
                </div>
                <div className="text-3xl font-bold text-purple mb-1">15+</div>
                <div className="text-sm text-gray-text font-medium">Successful Projects</div>
              </Card>

              <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-green/10 to-green/5">
                <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-green" />
                </div>
                <div className="text-3xl font-bold text-green mb-1">3</div>
                <div className="text-sm text-gray-text font-medium">Companies</div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Enhanced Experience Detail Modal */}
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
                <span className="flex items-center gap-2 px-4 py-2 bg-ocean-blue/10 text-ocean-blue rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  {selectedExperience.period}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-ocean-blue/10 text-ocean-blue rounded-full text-sm font-medium">
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
                <TrendingUp className="w-5 h-5 text-green" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {selectedExperience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green/5 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-green">{idx + 1}</span>
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
                      className="px-4 py-2 bg-ocean-blue/10 text-ocean-blue rounded-lg text-sm font-semibold"
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
