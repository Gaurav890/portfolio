import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Award, Github, ExternalLink, CheckCircle, Lightbulb } from 'lucide-react';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ${project.subtitle} | Gaurav H. Chaulagain`,
    description: project.description,
    keywords: [...project.tags, 'Project', 'Portfolio'].join(', '),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <article className="container-custom max-w-4xl">
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-ocean-blue hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="heading-xl mb-4">{project.title}</h1>
              <p className="text-2xl text-ocean-blue font-semibold mb-6">
                {project.subtitle}
              </p>
            </div>
            {project.featured && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg text-sm font-semibold flex-shrink-0">
                <Award className="w-4 h-4" />
                Featured
              </span>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="flex items-center gap-2 text-gray-text">
              <Calendar className="w-5 h-5" />
              {project.period}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-soft-blue text-ocean-blue rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.links?.github || project.links?.live || project.links?.demo) && (
            <div className="flex flex-wrap gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-blue text-white rounded-lg hover:bg-ocean-blue/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-ocean-blue text-ocean-blue rounded-lg hover:bg-ocean-blue hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Demo Video
                </a>
              )}
            </div>
          )}
        </header>

        {/* Description */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">About the Project</h2>
          <p className="body-lg">{project.description}</p>
        </section>

        {/* Challenge */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">The Challenge</h2>
          <p className="body-lg">{project.challenge}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">The Solution</h2>
          <p className="body-lg">{project.solution}</p>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="heading-md mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-ocean-blue" />
            Impact & Results
          </h2>
          <ul className="space-y-4">
            {project.impact.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-soft-blue/30 rounded-lg">
                <CheckCircle className="w-6 h-6 text-ocean-blue flex-shrink-0 mt-1" />
                <span className="body-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-100 text-gray-text rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/projects">
              <Button variant="secondary">
                <ArrowLeft className="mr-2 w-4 h-4" />
                All Projects
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="primary">
                Let's Work Together
              </Button>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
