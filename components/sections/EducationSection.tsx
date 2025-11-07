'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { education } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

export const EducationSection = () => {
  return (
    <Section className="bg-gradient-to-br from-soft-blue via-cream-bg to-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-slate-900">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                custom={index}
              >
                <Card
                  variant="default"
                  padding="lg"
                  hover="lift"
                  className="h-full border-slate-200 hover:border-indigo-600 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-indigo-600 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <GraduationCap className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    {edu.gpa && (
                      <div className="ml-auto text-right">
                        <div className="text-3xl font-bold text-indigo-600">{edu.gpa}</div>
                        <div className="text-xs text-slate-600 font-medium">GPA</div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {edu.degree}
                  </h3>

                  <p className="text-lg font-semibold text-gray-text mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-text mb-4">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  {edu.focus && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold text-deep-black">Focus Area:</span>
                          <p className="text-sm text-gray-text mt-1">{edu.focus}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
