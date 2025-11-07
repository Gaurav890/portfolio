'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Calendar, MapPin, Phone } from 'lucide-react';
import { Section, Button } from '@/components/ui';
import { personalInfo, socialLinks } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';

const iconComponents = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  calendar: Calendar,
  'book-open': Mail,
};

export const ContactSection = () => {
  return (
    <Section id="contact" className="bg-gradient-to-br from-ocean-blue to-blue-600 text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6" />
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {personalInfo.availability}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={staggerItem}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Email</p>
                <p className="font-semibold">{personalInfo.email}</p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${personalInfo.phone}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Phone</p>
                <p className="font-semibold">{personalInfo.phone}</p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Location</p>
                <p className="font-semibold">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Calendly */}
          <a
            href={socialLinks.find(l => l.platform === 'Calendly')?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Schedule a Call</p>
                <p className="font-semibold">Book a meeting</p>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={staggerItem} className="text-center mb-12">
          <p className="text-white/90 mb-6 text-lg">Connect with me</p>
          <div className="flex justify-center gap-4">
            {socialLinks.filter(link => ['LinkedIn', 'GitHub'].includes(link.platform)).map((link) => {
              const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label={link.platform}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={staggerItem} className="text-center">
          <a href={`mailto:${personalInfo.email}`}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-ocean-blue hover:bg-white/90 border-0"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send me an email
            </Button>
          </a>
          <p className="mt-6 text-white/70 text-sm">
            Usually responds within 24 hours
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};
