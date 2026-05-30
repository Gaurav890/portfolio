"use client";

import { useState } from 'react';

export default function APIDocumentation() {
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request');

  const requestExample = `POST /api/v1/tryon/generate
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "user_image": "base64_encoded_string",
  "garment_id": "GM-12345",
  "return_confidence": true,
  "options": {
    "body_measurements": {
      "height_cm": 170,
      "bust_cm": 86,
      "waist_cm": 68,
      "hips_cm": 92
    },
    "generate_comparison": true
  }
}`;

  const responseExample = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "success",
  "tryon_id": "TO-789xyz",
  "generated_image": "base64_encoded_string",
  "original_image": "base64_encoded_string",
  "confidence_scores": {
    "fit_accuracy": 0.92,
    "color_rendering": 0.88,
    "fabric_drape": 0.85,
    "edge_detection": 0.91,
    "overall_quality": 0.89
  },
  "trust_level": "high",
  "recommendations": [
    "This garment appears to fit well based on your measurements",
    "Color rendering is accurate within ±5% variance"
  ],
  "limitations": [
    "Complex patterns may show slight distortion",
    "Lighting conditions affect color accuracy"
  ],
  "processing_time_ms": 2340
}`;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-deep-black mb-2">AI Try-On API Documentation</h3>
        <p className="text-gray-text">
          Enterprise-grade API for integrating AI try-on capabilities into your e-commerce platform.
          Built for B2B clients with comprehensive confidence scoring and transparency features.
        </p>
      </div>

      {/* Endpoint Overview */}
      <div className="card p-6">
        <h4 className="font-bold text-lg mb-4">Endpoint</h4>
        <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          POST https://api.faishion.ai/v1/tryon/generate
        </div>
      </div>

      {/* Authentication */}
      <div className="card p-6">
        <h4 className="font-bold text-lg mb-3">Authentication</h4>
        <p className="text-gray-text mb-3">All API requests require authentication using an API key in the Authorization header:</p>
        <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
          Authorization: Bearer YOUR_API_KEY
        </div>
      </div>

      {/* Request/Response Tabs */}
      <div className="card overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('request')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'request'
                ? 'bg-ocean-blue text-white'
                : 'bg-gray-50 text-gray-text hover:bg-gray-100'
            }`}
          >
            Request Example
          </button>
          <button
            onClick={() => setActiveTab('response')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'response'
                ? 'bg-ocean-blue text-white'
                : 'bg-gray-50 text-gray-text hover:bg-gray-100'
            }`}
          >
            Response Example
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'request' ? (
            <div className="space-y-4">
              <div className="bg-slate-900 text-gray-100 p-5 rounded-lg overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">{requestExample}</pre>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-text">
                  <strong className="text-ocean-blue">💡 Tip:</strong> Setting <code className="bg-blue-100 px-2 py-1 rounded text-xs">return_confidence: true</code> enables
                  transparency features that help end-users trust AI outputs.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-slate-900 text-gray-100 p-5 rounded-lg overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">{responseExample}</pre>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-text">
                  <strong className="text-green-700">✅ Trust Level:</strong> The API returns a <code className="bg-green-100 px-2 py-1 rounded text-xs">trust_level</code> field
                  (high/medium/low) that helps you communicate reliability to users.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confidence Score Breakdown */}
      <div className="card p-6">
        <h4 className="font-bold text-lg mb-4">Confidence Score Breakdown</h4>
        <div className="space-y-3">
          {[
            { name: 'fit_accuracy', description: 'How well the garment fits body measurements', range: '0.0 - 1.0' },
            { name: 'color_rendering', description: 'Accuracy of color representation', range: '0.0 - 1.0' },
            { name: 'fabric_drape', description: 'Realism of fabric physics and draping', range: '0.0 - 1.0' },
            { name: 'edge_detection', description: 'Precision of garment edge detection', range: '0.0 - 1.0' },
            { name: 'overall_quality', description: 'Composite quality score', range: '0.0 - 1.0' },
          ].map((score, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
              <code className="text-sm font-mono text-ocean-blue font-semibold min-w-[140px]">{score.name}</code>
              <div className="flex-1">
                <p className="text-sm text-gray-text">{score.description}</p>
                <span className="text-xs text-gray-400">Range: {score.range}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PM Insight */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
        <p className="text-sm font-semibold text-purple-700 mb-2">🎯 PM Decision</p>
        <p className="text-gray-text">
          The decision to expose granular confidence scores (not just a single number) came from user research.
          Users wanted to understand <em>why</em> a try-on looked good or bad. Breaking down confidence into
          fit, color, drape, and edge detection gave B2B clients the flexibility to customize their UX based on
          what matters most to their customers.
        </p>
      </div>

      {/* Rate Limits */}
      <div className="card p-6 bg-amber-50 border-l-4 border-amber-500">
        <h4 className="font-bold text-lg mb-3 text-amber-900">Rate Limits & Pricing</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="font-semibold">Free Tier:</span>
            <span>100 requests/month</span>
          </div>
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="font-semibold">Starter:</span>
            <span>1,000 requests/month ($199)</span>
          </div>
          <div className="flex justify-between py-2 border-b border-amber-200">
            <span className="font-semibold">Professional:</span>
            <span>10,000 requests/month ($1,499)</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-semibold">Enterprise:</span>
            <span>Custom volume & SLA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
