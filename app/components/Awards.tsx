'use client';

import { Trophy, FlaskConical, Calculator } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const awards = [
  {
    icon: FlaskConical,
    type: 'nationalProject',
    title: 'nationalProjectTitle',
    role: 'projectLeader',
    date: '2024.07 - 2025.04',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Calculator,
    type: 'mathModeling',
    title: 'mathModelingTitle',
    role: null,
    date: '2024.09',
    color: 'text-accent-600',
    bg: 'bg-accent-50',
  },
];

export default function Awards() {
  const { t } = useLanguage();

  return (
    <section id="awards" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('awardsTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${award.bg} flex items-center justify-center shrink-0`}>
                  <award.icon className={`w-6 h-6 ${award.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 mb-1">{t(award.type)}</h3>
                  <p className="text-sm text-slate-600 mb-3">{t(award.title)}</p>

                  {award.role && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded mb-3">
                      <Trophy className="w-3 h-3" />
                      {t(award.role)}
                    </span>
                  )}

                  <p className="text-xs text-slate-400">{award.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
