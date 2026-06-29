'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '@/components/ui';
import { personalInfo } from '@/lib/data';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

export const AboutSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const philosophies = [
    {
      number: '01',
      title: 'Start with the behavior, not the request',
      subtitle: 'Users and customers rarely articulate the real problem — they describe a symptom.',
      example: {
        intro: 'A fuel distributor account said they needed "more driver training." The real behavior: drivers weren\'t the problem — dispatchers had only partially adopted the platform and were still calling drivers by phone instead of assigning jobs through it.',
        solution: 'Once we focused on-site time on dispatcher confidence first — walk-throughs, live dispatch sessions, mapping their existing mental model onto the FleetPanda dashboard — driver adoption followed on its own within a week.',
        metrics: null,
        conclusion: null,
      },
      takeaway: 'Solve the behavioral root cause, and the right solution becomes obvious.',
    },
    {
      number: '02',
      title: 'Reduce complexity until the system is inevitable',
      subtitle: 'Complex systems are easy to build. Systems that feel obvious to the people using them are hard.',
      example: {
        intro: 'A MarTech CMS serving 18 enterprise properties took 8+ seconds to load and required engineering for every content change.',
        solution: 'Simplifying the execution path and cutting load time to 2.5s reduced bounce rate by 22%, lifted organic traffic 39%, and gave non-technical teams full publishing independence.',
        metrics: null,
        conclusion: null,
      },
      takeaway: 'If someone pauses and thinks "what do I do now?" — the system isn\'t done.',
    },
    {
      number: '03',
      title: 'Measure what predicts outcomes, not what\'s easy to count',
      subtitle: 'Vanity metrics feel good. Leading indicators change decisions.',
      example: {
        intro: 'For the AI styling agent, instead of tracking clicks or sessions, I tracked:',
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
      number: '04',
      title: 'Move fast — but build gates, not guardrails',
      subtitle: 'Speed without structure creates the illusion of progress.',
      example: {
        intro: 'Every FleetPanda enterprise implementation runs as a 6–8 week sequence with explicit adoption gates:',
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

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + philosophies.length) % philosophies.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % philosophies.length);
  };

  const principle = philosophies[current];

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
          <div className="w-12 h-px bg-slate-300 mx-auto" />
        </motion.div>

        {/* Bio with Image */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div variants={staggerItem}>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-slate-200">
                  <Image
                    src="/images/gaurav_profile.png"
                    alt="Gaurav Profile Picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {personalInfo.fullBio.split('\n\n')[0]}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {personalInfo.fullBio.split('\n\n')[1]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Philosophy Carousel */}
        <motion.div variants={staggerItem} className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">How I Think About Technical Delivery</h3>
            <p className="text-lg text-slate-500">
              Four operating principles stress-tested across AI agents, enterprise deployments, and systems that had to work in production
            </p>
          </div>

          {/* Carousel */}
          <div className="relative border-t border-slate-100 pt-10">
            {/* Slide */}
            <div className="overflow-hidden min-h-[320px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="grid grid-cols-[64px_1fr] gap-6"
                >
                  {/* Number */}
                  <div className="text-4xl font-bold text-slate-200 select-none leading-none pt-1">
                    {principle.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{principle.title}</h4>
                    <p className="text-slate-500 mb-5">{principle.subtitle}</p>

                    <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                      <p>{principle.example.intro}</p>

                      {principle.example.metrics && (
                        <ul className="space-y-1 pl-4">
                          {principle.example.metrics.map((metric, idx) => (
                            <li key={idx} className="list-disc list-outside">{metric}</li>
                          ))}
                        </ul>
                      )}

                      {principle.example.solution && (
                        <p>{principle.example.solution}</p>
                      )}

                      {principle.example.conclusion && (
                        <p>{principle.example.conclusion}</p>
                      )}
                    </div>

                    <p className="mt-5 text-sm font-semibold text-slate-900 italic">
                      {principle.takeaway}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
              {/* Dot indicators */}
              <div className="flex gap-2">
                {philosophies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-slate-900' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to principle ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded border border-slate-200 hover:border-slate-400 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded border border-slate-200 hover:border-slate-400 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
