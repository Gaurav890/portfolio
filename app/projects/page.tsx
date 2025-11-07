'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Award, Calendar } from 'lucide-react';
import { projects } from '@/lib/data';
import { slideUp, staggerContainer, staggerItem, cardHover } from '@/lib/animations';

export default function ProjectsPage() {
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
            <h1 className="heading-xl mb-6">Personal Projects</h1>
            <div className="w-20 h-1 bg-ocean-blue mx-auto rounded-full mb-6" />
            <p className="body-lg max-w-3xl mx-auto">
              Side projects and hackathon wins showcasing my technical skills, creativity, and passion for building innovative solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={slideUp}
                custom={index}
                initial="rest"
                whileHover="hover"
              >
                <Link href={`/projects/${project.slug}`}>
                  <motion.article
                    variants={cardHover}
                    className="card h-full p-6 flex flex-col"
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">
                          <Award className="w-3 h-3" />
                          Featured Project
                        </span>
                      </div>
                    )}

                    {/* Title & Subtitle */}
                    <h2 className="text-xl font-bold text-deep-black mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-ocean-blue font-medium mb-4">
                      {project.subtitle}
                    </p>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-gray-text mb-4">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-text mb-4 flex-grow line-clamp-4">
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
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-soft-blue text-ocean-blue rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
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
