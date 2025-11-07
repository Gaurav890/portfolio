'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { highlights } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

export const HighlightsSection = () => {
  // Segregate highlights by type
  const hackathons = highlights.filter(h => h.type === 'hackathon');
  const certifications = highlights.filter(h => h.type === 'certification');
  const leadership = highlights.filter(h => h.type === 'leadership');

  return (
    <Section className="bg-cream-bg">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-20">
          <h2 className="heading-lg mb-4 text-slate-900">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ocean-blue to-indigo-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Continuous learning and community leadership
          </p>
        </motion.div>

        {/* Hackathons & Awards */}
        <motion.div variants={staggerItem} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-ocean-blue flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Hackathons & Awards</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((highlight) => (
              <motion.div
                key={highlight.id}
                variants={slideUp}
                className="group"
              >
                <Card
                  variant="default"
                  padding="lg"
                  hover="lift"
                  className="h-full border-gray-200 hover:border-deep-black transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-deep-black group-hover:text-white transition-all duration-300">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-text mb-1">{highlight.date}</p>
                      <h4 className="text-lg font-bold text-deep-black mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm font-semibold text-gray-text">
                        {highlight.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-text leading-relaxed mb-4">
                    {highlight.description}
                  </p>

                  {highlight.achievement && (
                    <div className="pt-4 border-t border-gray-200 mb-4">
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-deep-black flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold text-deep-black">
                          {highlight.achievement}
                        </p>
                      </div>
                    </div>
                  )}

                  {highlight.link && (
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-deep-black hover:text-ocean-blue transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        View Details
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={staggerItem} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-ocean-blue flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Professional Certifications</h3>
            <span className="ml-auto px-3 py-1 bg-gray-100 text-deep-black rounded-full text-sm font-semibold">
              {certifications.length} Certifications
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((highlight) => (
              <motion.div
                key={highlight.id}
                variants={slideUp}
                className="group"
              >
                <Card
                  variant="default"
                  padding="md"
                  hover="lift"
                  className="h-full border-gray-200 hover:border-deep-black transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-deep-black group-hover:text-white transition-all duration-300">
                      <Award className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-base font-bold text-deep-black mb-2 leading-snug">
                        {highlight.title}
                      </h4>
                      <p className="text-sm font-semibold text-gray-text mb-2">
                        {highlight.organization}
                      </p>
                      <p className="text-xs text-gray-text mb-3">{highlight.date}</p>
                      <p className="text-sm text-gray-text leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {highlight.link && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <a
                          href={highlight.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-deep-black hover:text-ocean-blue transition-colors inline-flex items-center gap-1 cursor-pointer"
                        >
                          View Credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div variants={staggerItem}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-ocean-blue flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Leadership & Community</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((highlight) => (
              <motion.div
                key={highlight.id}
                variants={slideUp}
                className="group"
              >
                <Card
                  variant="default"
                  padding="lg"
                  hover="lift"
                  className="h-full border-gray-200 hover:border-deep-black transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-deep-black group-hover:text-white transition-all duration-300">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-text mb-1">{highlight.date}</p>
                      <h4 className="text-lg font-bold text-deep-black mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm font-semibold text-gray-text">
                        {highlight.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-text leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
