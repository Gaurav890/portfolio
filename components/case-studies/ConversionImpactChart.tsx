"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ConversionImpactChart() {
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
        text: 'Conversion Rate Improvements',
        font: {
          size: 18,
          weight: 'bold' as const
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        },
        title: {
          display: true,
          text: 'Conversion Rate (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'User Journey Stage'
        }
      }
    },
  };

  const data = {
    labels: ['Photo Upload → Try-On', 'Try-On → Multiple Outfits', 'Try-On → Purchase Intent'],
    datasets: [
      {
        label: 'Before (Baseline)',
        data: [68, 42, 15],
        backgroundColor: 'rgba(148, 163, 184, 0.7)',
        borderColor: 'rgb(148, 163, 184)',
        borderWidth: 2,
      },
      {
        label: 'After (Post-Launch)',
        data: [80, 58, 28],
        backgroundColor: 'rgba(14, 165, 233, 0.7)',
        borderColor: 'rgb(14, 165, 233)',
        borderWidth: 2,
      },
    ],
  };

  const improvements = [
    { metric: 'Photo Upload → Try-On', before: '68%', after: '80%', improvement: '+18%' },
    { metric: 'Try-On → Multiple Outfits', before: '42%', after: '58%', improvement: '+38%' },
    { metric: 'Try-On → Purchase Intent', before: '15%', after: '28%', improvement: '+87%' },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" style={{ height: '400px' }}>
        <Bar options={options} data={data} />
      </div>

      {/* Detailed Breakdown */}
      <div className="grid md:grid-cols-3 gap-4">
        {improvements.map((item, idx) => (
          <div key={idx} className="card p-5 bg-gradient-to-br from-white to-soft-blue/20">
            <div className="text-sm text-gray-text mb-2">{item.metric}</div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl font-bold text-gray-400 line-through">{item.before}</span>
              <span className="text-3xl font-bold text-ocean-blue">{item.after}</span>
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              {item.improvement}
            </div>
          </div>
        ))}
      </div>

      {/* Business Impact */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
        <p className="text-sm font-semibold text-green-700 mb-2">💰 Business Impact</p>
        <p className="text-gray-text">
          The <strong className="text-deep-black">+18% improvement</strong> in photo upload completion directly
          translated to more users engaging with the product. More importantly, the <strong className="text-deep-black">+87%
          increase in purchase intent</strong> showed that trust-building features didn't just improve engagement—they
          drove actual buying behavior.
        </p>
      </div>
    </div>
  );
}
