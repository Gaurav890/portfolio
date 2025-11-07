'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui';
import { personalInfo, education } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

export const AboutSection = () => {
  return (
    <Section className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.div variants={staggerItem} className="space-y-6 mb-12">
          <p className="body-lg leading-relaxed">
            {personalInfo.fullBio.split('\n\n')[0]}
          </p>
          <p className="body-lg leading-relaxed">
            {personalInfo.fullBio.split('\n\n')[1]}
          </p>
        </motion.div>

        {/* Education */}
        <motion.div variants={staggerItem} className="space-y-6">
          <h3 className="heading-sm text-center mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="card p-6 space-y-3"
              >
                <h4 className="text-xl font-semibold text-deep-black">
                  {edu.degree}
                </h4>
                <p className="text-ocean-blue font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-text">{edu.location}</p>
                <p className="text-sm text-gray-text">{edu.period}</p>
                {edu.gpa && (
                  <p className="text-sm font-medium text-deep-black">
                    GPA: {edu.gpa}
                  </p>
                )}
                {edu.focus && (
                  <p className="text-sm text-gray-text">Focus: {edu.focus}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Philosophy */}
        <motion.div variants={staggerItem} className="mt-12 p-8 bg-soft-blue/30 rounded-xl">
          <h3 className="heading-sm mb-6 text-center">Product Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Reframe the Problem', desc: 'Dig deeper than stated requirements' },
              { title: 'Think in Systems', desc: 'Address root causes, not symptoms' },
              { title: 'Measure What Matters', desc: 'Focus on impact metrics over vanity metrics' },
              { title: 'Velocity Compounds', desc: 'Small improvements lead to transformative change' },
            ].map((principle, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-ocean-blue">{principle.title}</h4>
                <p className="text-sm text-gray-text">{principle.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
