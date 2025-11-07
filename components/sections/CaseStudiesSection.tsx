'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Section, Button } from '@/components/ui';
import { caseStudies } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig, cardHover } from '@/lib/animations';

export const CaseStudiesSection = () => {
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured).slice(0, 3);

  return (
    <Section id="case-studies" className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="heading-lg mb-4">Featured Case Studies</h2>
          <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full" />
          <p className="body-md mt-6 max-w-2xl mx-auto">
            Real product challenges, measurable impact, and lessons learned from building products that matter
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              variants={slideUp}
              initial="rest"
              whileHover="hover"
            >
              <Link href={`/case-studies/${caseStudy.slug}`}>
                <motion.div
                  variants={cardHover}
                  className="card h-full p-6 flex flex-col"
                >
                  {/* Company & Role */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-ocean-blue">
                      {caseStudy.company}
                    </span>
                    <span className="text-xs text-gray-text">{caseStudy.period.split(' - ')[1] || caseStudy.period}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-deep-black mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-gray-text mb-4">
                    {caseStudy.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-gray-text mb-4 flex-grow line-clamp-3">
                    {caseStudy.summary}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-4 space-y-2">
                    {caseStudy.impact.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-ocean-blue flex-shrink-0" />
                        <span className="text-sm">
                          <span className="font-bold text-ocean-blue">{metric.value}</span>
                          <span className="text-gray-text ml-1">{metric.metric}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-soft-blue text-ocean-blue rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-text">{caseStudy.role}</span>
                    <span className="text-ocean-blue text-sm font-medium flex items-center gap-1">
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Case Studies CTA */}
        <motion.div variants={staggerItem} className="text-center">
          <Link href="/case-studies">
            <Button variant="secondary" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};
