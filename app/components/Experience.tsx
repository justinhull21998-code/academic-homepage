'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingDown, Minus, TrendingUp } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const highlights = [
  'kuaishouHighlight1',
  'kuaishouHighlight2',
  'kuaishouHighlight3',
  'kuaishouHighlight4',
  'kuaishouHighlight5',
];

const dataCards = [
  { key: 'kuaishouData1', icon: TrendingDown, color: 'text-green-600', bg: 'bg-green-50' },
  { key: 'kuaishouData2', icon: Minus, color: 'text-slate-600', bg: 'bg-slate-50' },
  { key: 'kuaishouData3', icon: TrendingUp, color: 'text-primary-600', bg: 'bg-primary-50' },
];

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('experienceTitle')}
        </h2>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xl">
                快
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800">{t('kuaishou')}</h3>
                <p className="text-slate-600">{t('kuaishouDept')}</p>
                <p className="text-sm text-slate-500 mt-1">2025.10 - 2026.02</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="p-6">
            <div className={`space-y-3 ${isExpanded ? '' : 'max-h-32 overflow-hidden relative'}`}>
              {highlights.map((key, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
                  <p className="text-slate-700">{t(key)}</p>
                </div>
              ))}
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show more
                </>
              )}
            </button>
          </div>

          {/* Data Cards */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-3 gap-4">
              {dataCards.map((card, index) => (
                <div key={index} className={`${card.bg} rounded-xl p-4 text-center`}>
                  <card.icon className={`w-6 h-6 ${card.color} mx-auto mb-2`} />
                  <p className="text-sm font-medium text-slate-700">{t(card.key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
