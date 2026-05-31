'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Card } from '@/components/ui';
import { personalInfo, education } from '@/lib/data';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { GraduationCap, Sparkles, Target, Network, TrendingUp, Zap, Trophy } from 'lucide-react';

export const AboutSection = () => {
  const philosophies = [
    {
      number: '1',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Start with the behavior, not the request',
      subtitle: 'Users and customers rarely articulate the real problem — they describe a symptom.',
      principle: 'The job is to find the behavior underneath the ask.',
      example: {
        intro: 'A fuel distributor account said they needed "more driver training." The real behavior: drivers weren\'t the problem — dispatchers had only partially adopted the platform and were still calling drivers by phone instead of assigning jobs through it.',
        problem: null,
        solution: 'Once we focused on-site time on dispatcher confidence first — walk-throughs, live dispatch sessions, mapping their existing mental model onto the FleetPanda dashboard — driver adoption followed on its own within a week.',
      },
      takeaway: 'Solve the behavioral root cause, and the right solution becomes obvious.',
    },
    {
      number: '2',
      icon: <Network className="w-6 h-6" />,
      title: 'Reduce complexity until the system is inevitable',
      subtitle: 'Complex systems are easy to build. Systems that feel obvious to the people using them are hard.',
      principle: null,
      example: {
        intro: 'A MarTech CMS serving 18 enterprise properties took 8+ seconds to load and required engineering for every content change.',
        problem: null,
        solution: 'Simplifying the execution path and cutting load time to 2.5s reduced bounce rate by 22%, lifted organic traffic 39%, and gave non-technical teams full publishing independence.',
      },
      takeaway: 'If someone pauses and thinks "what do I do now?" — the system isn\'t done.',
    },
    {
      number: '3',
      icon: <Target className="w-6 h-6" />,
      title: 'Measure what predicts outcomes, not what\'s easy to count',
      subtitle: 'Vanity metrics feel good. Leading indicators change decisions.',
      principle: 'I instrument for the signals that tell me something is working before the lagging metrics catch up.',
      example: {
        intro: 'For the AI styling agent, instead of tracking clicks or sessions, I tracked:',
        problem: null,
        solution: null,
        metrics: [
          'time to first successful task completion',
          'recovery rate after AI misinterpretations',
          'retention through the first 5 interactions',
        ],
        conclusion: 'These signals reshaped the roadmap twice before any aggregate conversion number changed.',
      },
      takeaway: 'Good metrics predict behavior. Great metrics give you time to course-correct.',
    },
    {
      number: '4',
      icon: <Zap className="w-6 h-6" />,
      title: 'Move fast — but build gates, not guardrails',
      subtitle: 'Speed without structure creates the illusion of progress.',
      principle: 'I sequence work so that each phase must prove itself before unlocking the next.',
      example: {
        intro: 'Every FleetPanda enterprise implementation runs as a 6–8 week sequence with explicit adoption gates:',
        problem: null,
        solution: null,
        metrics: [
          'dispatcher sign-off before driver rollout',
          'live order flow before invoicing goes live',
          'accounting integration only after portal adoption is confirmed',
        ],
        conclusion: 'This keeps velocity high while ensuring each layer is solid before the next one is built on top of it.',
      },
      takeaway: 'Momentum is a feature. Adoption gates are how you protect it.',
    },
  ];

  return (
    <Section className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-slate-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 mx-auto rounded-full" />
        </motion.div>

        {/* Bio with Image */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div variants={staggerItem} className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image - Left Side */}
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Circular image container with placeholder */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-ocean-blue/20 to-ocean-blue/10 border-4 border-ocean-blue/30 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/gaurav_profile.png"
                      alt="Gaurav Profile Picture"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-ocean-blue/20 -z-10 scale-110"></div>
                </div>
              </div>

              {/* Bio Text - Right Side */}
              <div className="prose prose-lg max-w-none md:max-w-2xl">
                <p className="text-lg text-gray-text leading-relaxed mb-6">
                  {personalInfo.fullBio.split('\n\n')[0]}
                </p>
                <p className="text-lg text-gray-text leading-relaxed">
                  {personalInfo.fullBio.split('\n\n')[1]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Philosophy - Creative Design */}
        <motion.div variants={staggerItem} className="max-w-7xl mx-auto px-4">
          <div className="mb-12 md:mb-20 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How I Think About Technical Delivery</h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Four operating principles stress-tested across AI agents, enterprise deployments, and systems that had to work in production
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
            {philosophies.map((principle, index) => {
              return (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group"
                  >
                    {/* Floating Number Badge */}
                    <motion.div
                      className="absolute -top-4 -left-4 z-20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-ocean-blue via-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl transform rotate-3">
                        <span className="text-2xl md:text-3xl font-black text-white">
                          {principle.number}
                        </span>
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-ocean-blue blur-xl opacity-40"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Main Card */}
                    <div className="relative h-full bg-white rounded-3xl border-2 border-slate-200 p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-ocean-blue/50 transition-all duration-500 group-hover:-translate-y-2">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ocean-blue/5 to-transparent rounded-bl-full rounded-tr-3xl" />

                      {/* Icon and Title Side by Side */}
                      <div className="relative flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-ocean-blue/10 to-indigo-600/10 border border-ocean-blue/20">
                          <div className="text-ocean-blue">
                            {principle.icon}
                          </div>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight pt-2">
                          {principle.title}
                        </h4>
                      </div>

                      {/* Subtitle & Principle */}
                      <div className="space-y-2 mb-6">
                        <p className="text-base md:text-lg text-slate-700 font-medium">
                          {principle.subtitle}
                        </p>
                        {principle.principle && (
                          <p className="text-sm md:text-base text-slate-600 italic border-l-4 border-ocean-blue/30 pl-4 py-1">
                            {principle.principle}
                          </p>
                        )}
                      </div>

                      {/* Example Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-ocean-blue animate-pulse" />
                          <p className="text-xs md:text-sm font-bold text-ocean-blue uppercase tracking-wider">
                            Real Example
                          </p>
                        </div>

                        <div className="space-y-3 text-sm md:text-base">
                          <p className="text-slate-700 leading-relaxed">
                            {principle.example.intro}
                          </p>

                          {principle.example.problem && (
                            <div className="bg-slate-100 border-l-4 border-slate-400 p-3 rounded-r-lg">
                              <p className="text-slate-900 font-semibold">
                                {principle.example.problem}
                              </p>
                            </div>
                          )}

                          {principle.example.solution && (
                            <div className="bg-slate-100 border-l-4 border-ocean-blue/40 p-3 rounded-r-lg">
                              <p className="text-slate-700">
                                {principle.example.solution}
                              </p>
                            </div>
                          )}

                          {principle.example.metrics && (
                            <div className="bg-slate-100 rounded-xl p-4">
                              <ul className="space-y-2 list-disc list-inside">
                                {principle.example.metrics.map((metric, idx) => (
                                  <li key={idx} className="text-slate-700 text-sm">
                                    {metric}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {principle.example.conclusion && (
                            <p className="text-slate-700 leading-relaxed">
                              {principle.example.conclusion}
                            </p>
                          )}
                        </div>

                        {/* Key Takeaway */}
                        <div className="mt-6 p-4 bg-gradient-to-br from-ocean-blue/5 to-indigo-600/5 rounded-2xl border-2 border-ocean-blue/20">
                          <p className="text-xs font-semibold text-ocean-blue uppercase tracking-wide mb-2">
                            Key Principle
                          </p>
                          <p className="text-sm md:text-base text-slate-900 font-semibold italic">
                            {principle.takeaway}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
