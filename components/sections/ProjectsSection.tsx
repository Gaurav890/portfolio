'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Section, Button } from '@/components/ui';
import { projects } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, viewportConfig, cardHover } from '@/lib/animations';

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

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
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full" />
          <p className="body-md mt-6 max-w-2xl mx-auto">
            Personal projects showcasing my technical skills and passion for innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={slideUp}
              initial="rest"
              whileHover="hover"
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  variants={cardHover}
                  className="card h-full p-6 flex flex-col"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-soft-blue text-ocean-blue rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-deep-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ocean-blue font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-text text-sm mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-text rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 text-gray-text">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-text hover:text-ocean-blue transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-text hover:text-ocean-blue transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    <span className="ml-auto text-ocean-blue text-sm font-medium flex items-center gap-1">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div variants={staggerItem} className="text-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};
