'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Users, Lightbulb, Star, Sparkles, TrendingUp, BookOpen } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { highlights } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

const iconMap = {
  hackathon: Trophy,
  certification: Award,
  speaking: Mic,
  mentoring: Users,
  leadership: Lightbulb,
};

const colorConfig = {
  hackathon: {
    gradient: 'from-purple/10 to-pink/10',
    border: 'border-purple/30',
    icon: 'bg-purple/20 text-purple',
    badge: 'bg-purple/10 text-purple',
  },
  certification: {
    gradient: 'from-ocean-blue/10 to-indigo/10',
    border: 'border-ocean-blue/30',
    icon: 'bg-ocean-blue/20 text-ocean-blue',
    badge: 'bg-ocean-blue/10 text-ocean-blue',
  },
  speaking: {
    gradient: 'from-green/10 to-teal/10',
    border: 'border-green/30',
    icon: 'bg-green/20 text-green',
    badge: 'bg-green/10 text-green',
  },
  mentoring: {
    gradient: 'from-orange/10 to-orange/5',
    border: 'border-orange/30',
    icon: 'bg-orange/20 text-orange',
    badge: 'bg-orange/10 text-orange',
  },
  leadership: {
    gradient: 'from-pink/10 to-pink/5',
    border: 'border-pink/30',
    icon: 'bg-pink/20 text-pink',
    badge: 'bg-pink/10 text-pink',
  },
};

export const HighlightsSection = () => {
  // Feature the Cal Hacks win prominently
  const featuredHighlight = highlights.find(h => h.id === 'calhacks-winner');
  const otherHighlights = highlights.filter(h => h.id !== 'calhacks-winner');

  return (
    <Section className="bg-gradient-to-b from-cream-bg to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple/5 to-transparent rounded-full -mr-48 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-ocean-blue/5 to-transparent rounded-full -ml-48 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative"
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit mx-auto">
            <Star className="w-4 h-4" />
            Achievements & Recognition
          </span>
          <h2 className="heading-lg mb-4">Highlights</h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Continuous learning, winning, and giving back to the community
          </p>
        </motion.div>

        {/* Featured Achievement - Cal Hacks Winner */}
        {featuredHighlight && (
          <motion.div variants={staggerItem} className="mb-12">
            <Card
              variant="gradient"
              padding="none"
              hover="glow"
              className="overflow-hidden bg-gradient-to-br from-purple/10 via-pink/5 to-purple/10 border-2 border-purple/20"
            >
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple/10 to-transparent rounded-full -mr-32 -mt-32" />

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center flex-shrink-0 shadow-xl">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple/20 rounded-full mb-3">
                            <Sparkles className="w-4 h-4 text-purple" />
                            <span className="text-sm font-bold text-purple">Featured Achievement</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-deep-black mb-2">
                            {featuredHighlight.title}
                          </h3>
                          <p className="text-xl text-purple font-semibold mb-2">
                            {featuredHighlight.organization}
                          </p>
                          <p className="text-gray-text mb-1">{featuredHighlight.date}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-text leading-relaxed mb-6">
                        {featuredHighlight.description}
                      </p>

                      {featuredHighlight.achievement && (
                        <div className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-purple/20">
                          <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center flex-shrink-0">
                            <Award className="w-5 h-5 text-purple" />
                          </div>
                          <div>
                            <p className="font-bold text-deep-black mb-1">Recognition</p>
                            <p className="text-gray-text">{featuredHighlight.achievement}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherHighlights.map((highlight) => {
            const Icon = iconMap[highlight.type];
            const colors = colorConfig[highlight.type];

            return (
              <motion.div
                key={highlight.id}
                variants={slideUp}
                className="group"
              >
                <Card
                  variant="outline"
                  padding="lg"
                  hover="lift"
                  className={`h-full bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} transition-all duration-300 group-hover:shadow-xl`}
                >
                  <div className="flex flex-col h-full">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`inline-block px-2 py-1 ${colors.badge} rounded-md text-xs font-semibold mb-2 capitalize`}>
                          {highlight.type}
                        </span>
                        <p className="text-xs text-gray-text">{highlight.date}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-deep-black mb-2 leading-snug">
                        {highlight.title}
                      </h3>
                      <p className="text-sm font-semibold text-ocean-blue mb-2">
                        {highlight.organization}
                      </p>
                      <p className="text-sm text-gray-text leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    {highlight.achievement && (
                      <div className={`mt-4 pt-4 border-t ${colors.border}`}>
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-ocean-blue flex-shrink-0 mt-0.5" />
                          <p className="text-xs font-semibold text-deep-black">
                            {highlight.achievement}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Stats - Meaningful Context */}
        <motion.div variants={staggerItem} className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-deep-black mb-2">By The Numbers</h3>
            <p className="text-gray-text">Quantifying my commitment to growth and excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-ocean-blue/10 to-ocean-blue/5 border-ocean-blue/20">
              <div className="w-12 h-12 rounded-full bg-ocean-blue/20 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-ocean-blue" />
              </div>
              <div className="text-4xl font-bold text-ocean-blue mb-2">5+</div>
              <div className="text-sm font-semibold text-deep-black mb-1">Certifications</div>
              <div className="text-xs text-gray-text">Google, IBM, Duke</div>
            </Card>

            <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-purple/10 to-pink/10 border-purple/20">
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-purple" />
              </div>
              <div className="text-4xl font-bold text-purple mb-2">1</div>
              <div className="text-sm font-semibold text-deep-black mb-1">Hackathon Win</div>
              <div className="text-xs text-gray-text">Cal Hacks 12.0</div>
            </Card>

            <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-pink/10 to-pink/5 border-pink/20">
              <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-6 h-6 text-pink" />
              </div>
              <div className="text-4xl font-bold text-pink mb-2">2</div>
              <div className="text-sm font-semibold text-deep-black mb-1">Leadership Roles</div>
              <div className="text-xs text-gray-text">Founded 2 clubs</div>
            </Card>

            <Card variant="gradient" padding="lg" hover="scale" className="text-center bg-gradient-to-br from-green/10 to-teal/10 border-green/20">
              <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-green" />
              </div>
              <div className="text-4xl font-bold text-green mb-2">3.8</div>
              <div className="text-sm font-semibold text-deep-black mb-1">GPA</div>
              <div className="text-xs text-gray-text">MS Computer Science</div>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={staggerItem} className="mt-12 text-center">
          <Card variant="gradient" padding="lg" className="max-w-2xl mx-auto bg-gradient-to-r from-ocean-blue/5 via-purple/5 to-pink/5">
            <div className="flex items-center justify-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-ocean-blue" />
              <p className="text-lg font-bold text-deep-black">
                Continuous Growth Mindset
              </p>
            </div>
            <p className="text-gray-text">
              Always learning, building, and pushing boundaries in product management and AI
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};
