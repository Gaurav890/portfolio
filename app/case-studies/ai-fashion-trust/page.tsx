import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Briefcase, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import { Button } from '@/components/ui';
import TrustScoreChart from '@/components/case-studies/TrustScoreChart';
import ConversionImpactChart from '@/components/case-studies/ConversionImpactChart';
import APIDocumentation from '@/components/case-studies/APIDocumentation';
import { ImagePrompt, AI_FASHION_PROMPTS } from '@/components/case-studies/ImagePrompts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Fashion Tech - Building Trust in AI Try-On | Gaurav Chaulagain',
  description: 'Led development of AI-powered virtual try-on platform with +18% conversion improvement through transparency and trust-building features.',
};

export default function AIFashionCaseStudy() {
  const caseStudy = caseStudies.find((cs) => cs.slug === 'ai-fashion-trust');

  if (!caseStudy) {
    return null;
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
          <p className="body-lg mb-8">{caseStudy.challenge}</p>

          {/* User Research Synthesis Image */}
          <ImagePrompt
            promptData={AI_FASHION_PROMPTS.userResearchSynthesis}
            alt="User research synthesis showing trust barriers"
          />
        </section>

        {/* Approach */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">My Approach</h2>
          <ul className="space-y-4 mb-8">
            {caseStudy.approach.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-ocean-blue flex-shrink-0 mt-1" />
                <span className="body-lg">{item}</span>
              </li>
            ))}
          </ul>

          {/* Product Roadmap */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">Product Roadmap</h3>
            <ImagePrompt
              promptData={AI_FASHION_PROMPTS.productRoadmap}
              alt="Product roadmap showing 12-week delivery plan"
            />
          </div>

          {/* Feature Prioritization */}
          <div>
            <h3 className="text-xl font-bold mb-6">Feature Prioritization</h3>
            <ImagePrompt
              promptData={AI_FASHION_PROMPTS.featurePrioritization}
              alt="Feature prioritization matrix"
            />
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">The Solution</h2>
          <p className="body-lg mb-8">{caseStudy.solution}</p>

          {/* Main Interface */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">AI Try-On Interface with Confidence Scores</h3>
            <ImagePrompt
              promptData={AI_FASHION_PROMPTS.mainInterface}
              alt="Main AI try-on interface with confidence scores"
            />
          </div>

          {/* Educational Onboarding */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">Educational Onboarding</h3>
            <ImagePrompt
              promptData={AI_FASHION_PROMPTS.educationalOnboarding}
              alt="Educational onboarding explaining AI process"
            />
          </div>

          {/* Feedback System */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">User Feedback System</h3>
            <ImagePrompt
              promptData={AI_FASHION_PROMPTS.feedbackSystem}
              alt="User feedback system interface"
            />
          </div>

          {/* Wireframe Iterations */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">Design Iterations</h3>
            <ImagePrompt
              promptData={AI_FASHION_PROMPTS.wireframeIteration}
              alt="UI design iterations based on user feedback"
            />
          </div>

          {/* API Documentation */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">B2B API Documentation</h3>
            <APIDocumentation />
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-12">
          <h2 className="heading-md mb-6 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-ocean-blue" />
            Measurable Impact
          </h2>

          {/* Trust Score Chart */}
          <div className="mb-12">
            <TrustScoreChart />
          </div>

          {/* Conversion Impact Chart */}
          <div className="mb-12">
            <ConversionImpactChart />
          </div>

          {/* Impact Metrics Cards */}
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
