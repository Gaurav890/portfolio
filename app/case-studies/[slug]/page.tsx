import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Briefcase, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import { Button } from '@/components/ui';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.subtitle} | Gaurav Chaulagain`,
    description: caseStudy.summary,
    keywords: [...caseStudy.tags, 'Product Management', 'Case Study'].join(', '),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <article className="container-custom max-w-4xl">
        {/* Back Button */}
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-ocean-blue hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="heading-xl mb-4">{caseStudy.title}</h1>
          <p className="text-2xl text-ocean-blue font-semibold mb-6">
            {caseStudy.subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-gray-text mb-6">
            <span className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              {caseStudy.company}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {caseStudy.period}
            </span>
            <span className="px-3 py-1 bg-soft-blue text-ocean-blue rounded-full font-medium">
              {caseStudy.role}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-text rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12 p-6 bg-soft-blue/30 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <p className="body-lg">{caseStudy.summary}</p>
        </section>

        {/* Challenge */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">The Challenge</h2>
          <p className="body-lg">{caseStudy.challenge}</p>
        </section>

        {/* Approach */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">My Approach</h2>
          <ul className="space-y-4">
            {caseStudy.approach.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-ocean-blue flex-shrink-0 mt-1" />
                <span className="body-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">The Solution</h2>
          <p className="body-lg">{caseStudy.solution}</p>
        </section>

        {/* Impact Metrics */}
        <section className="mb-12">
          <h2 className="heading-md mb-6 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-ocean-blue" />
            Measurable Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.impact.map((metric, idx) => (
              <div key={idx} className="card p-6">
                <div className="text-4xl font-bold text-ocean-blue mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-deep-black mb-2">
                  {metric.metric}
                </div>
                <p className="text-sm text-gray-text">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="heading-md mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-ocean-blue" />
            Key Takeaways
          </h2>
          <div className="space-y-4">
            {caseStudy.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="p-6 bg-soft-blue/30 rounded-xl">
                <p className="body-lg font-medium">{takeaway}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        {caseStudy.technologies && caseStudy.technologies.length > 0 && (
          <section className="mb-12">
            <h2 className="heading-md mb-4">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-100 text-gray-text rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/case-studies">
              <Button variant="secondary">
                <ArrowLeft className="mr-2 w-4 h-4" />
                All Case Studies
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
