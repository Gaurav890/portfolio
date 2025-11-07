'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Users, Lightbulb } from 'lucide-react';
import { Section } from '@/components/ui';
import { highlights } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

const iconMap = {
  hackathon: Trophy,
  certification: Award,
  speaking: Mic,
  mentoring: Users,
  leadership: Lightbulb,
};

const colorMap = {
  hackathon: 'bg-purple-100 text-purple-600',
  certification: 'bg-blue-100 text-blue-600',
  speaking: 'bg-green-100 text-green-600',
  mentoring: 'bg-orange-100 text-orange-600',
  leadership: 'bg-pink-100 text-pink-600',
};

export const HighlightsSection = () => {
  return (
    <Section className="bg-cream-bg">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="heading-lg mb-4">Highlights & Achievements</h2>
          <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full" />
          <p className="body-md mt-6 max-w-2xl mx-auto">
            Certifications, hackathons, and leadership roles that define my journey
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight) => {
            const Icon = iconMap[highlight.type];
            const colorClass = colorMap[highlight.type];

            return (
              <motion.div
                key={highlight.id}
                variants={slideUp}
                className="card p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${colorClass} flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-deep-black mb-1 line-clamp-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-ocean-blue font-medium mb-1">
                      {highlight.organization}
                    </p>
                    <p className="text-xs text-gray-text mb-3">{highlight.date}</p>
                    <p className="text-sm text-gray-text line-clamp-2 mb-2">
                      {highlight.description}
                    </p>
                    {highlight.achievement && (
                      <div className="mt-3 p-2 bg-soft-blue rounded-lg">
                        <p className="text-xs font-semibold text-ocean-blue">
                          🏆 {highlight.achievement}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerItem}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '5+', label: 'Certifications' },
            { value: '1', label: 'Hackathon Win' },
            { value: '2', label: 'Leadership Roles' },
            { value: '3.8', label: 'GPA' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-text">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
