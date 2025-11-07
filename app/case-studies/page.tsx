'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Briefcase } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, cardHover } from '@/lib/animations';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h1 className="heading-xl mb-6">Case Studies</h1>
            <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full mb-6" />
            <p className="body-lg max-w-3xl mx-auto">
              Real product challenges, measurable impact, and lessons learned. Each case study showcases how I approach problems, collaborate with teams, and drive results.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={slideUp}
                custom={index}
                initial="rest"
                whileHover="hover"
              >
                <Link href={`/case-studies/${caseStudy.slug}`}>
                  <motion.article
                    variants={cardHover}
                    className="card h-full p-8 flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-deep-black mb-2">
                          {caseStudy.title}
                        </h2>
                        <p className="text-lg text-ocean-blue font-medium mb-3">
                          {caseStudy.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-text">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {caseStudy.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {caseStudy.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-text mb-6 flex-grow">
                      {caseStudy.summary}
                    </p>

                    {/* Impact Metrics */}
                    <div className="space-y-3 mb-6">
                      <p className="text-sm font-semibold text-deep-black">Key Impact:</p>
                      <div className="grid grid-cols-2 gap-3">
                        {caseStudy.impact.slice(0, 4).map((metric, idx) => (
                          <div key={idx} className="bg-soft-blue/30 rounded-lg p-3">
                            <div className="flex items-center gap-1 mb-1">
                              <TrendingUp className="w-3 h-3 text-ocean-blue" />
                              <span className="text-lg font-bold text-ocean-blue">
                                {metric.value}
                              </span>
                            </div>
                            <p className="text-xs text-gray-text line-clamp-1">
                              {metric.metric}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-soft-blue text-ocean-blue rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-text">{caseStudy.role}</span>
                      <span className="px-4 py-2 bg-ocean-blue text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-ocean-blue/90 transition-colors group">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
