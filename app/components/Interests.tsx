'use client';

import { useLanguage } from './LanguageProvider';

const interests = [
  { key: 'swimming', emoji: '🏊' },
  { key: 'running', emoji: '🏃' },
  { key: 'fitness', emoji: '💪' },
  { key: 'dataviz', emoji: '📊' },
  { key: 'aiTools', emoji: '🤖' },
  { key: 'statistics', emoji: '📚' },
];

export default function Interests() {
  const { t } = useLanguage();

  return (
    <section id="interests" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('interestsTitle')}
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {interests.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all text-center group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <p className="text-sm text-slate-600">{t(item.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
