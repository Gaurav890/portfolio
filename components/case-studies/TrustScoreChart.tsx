"use client";

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function TrustScoreChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'User Trust Score Improvement Over 16 Weeks',
        font: {
          size: 18,
          weight: 'bold' as const
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: function(context: any) {
            return `Trust Score: ${context.parsed.y.toFixed(1)}/5.0`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 2.5,
        max: 4.5,
        ticks: {
          callback: function(value: any) {
            return value.toFixed(1);
          }
        },
        title: {
          display: true,
          text: 'Trust Rating (out of 5.0)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Week'
        }
      }
    },
  };

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 4', 'Week 6', 'Week 8', 'Week 9', 'Week 12', 'Week 16'],
    datasets: [
      {
        label: 'User Trust Score',
        data: [2.8, 2.9, 3.1, 3.5, 3.7, 4.1, 4.2, 4.2],
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgb(14, 165, 233)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  // Annotations for key milestones
  const annotations = [
    { week: 'Week 6', event: 'Added confidence scores', improvement: '+0.4' },
    { week: 'Week 9', event: 'Launched educational onboarding', improvement: '+0.6' },
    { week: 'Week 12', event: 'B2B features launched', improvement: 'Stabilized at 4.2' },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ height: '400px' }}>
        <Line options={options} data={data} />
      </div>

      {/* Key Milestones */}
      <div className="bg-soft-blue/30 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4 text-deep-black">Key Milestones</h3>
        <div className="space-y-3">
          {annotations.map((annotation, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ocean-blue rounded-full mt-2"></div>
              <div>
                <span className="font-semibold text-ocean-blue">{annotation.week}:</span>{' '}
                <span className="text-gray-text">{annotation.event}</span>
                <span className="ml-2 text-sm font-medium text-green-600">({annotation.improvement})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insight */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-purple-100/50 rounded-xl p-6 border-l-4 border-ocean-blue">
        <p className="text-sm font-semibold text-ocean-blue mb-2">📊 Key Insight</p>
        <p className="text-gray-text">
          Trust score improved by <strong className="text-deep-black">+50% (2.8 → 4.2)</strong> through systematic
          transparency features. The biggest jump occurred in Week 9 when we launched educational onboarding,
          proving that <strong className="text-deep-black">user education drives trust more than perfection</strong>.
        </p>
      </div>
    </div>
  );
}
