'use client';

import { useLanguage } from './LanguageProvider';

// 按时间倒序排列（最新的在最上面）
const newsItems = [
  { date: '2025.10', key: 'news5' },
  { date: '2025.09', key: 'news1' },
  { date: '2025.06', key: 'news2' },
  { date: '2025.06', key: 'news3' },
  { date: '2025.04', key: 'news4' },
  { date: '2024.09', key: 'news6' },
  { date: '2024.05', key: 'news7' },
];

export default function News() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('newsTitle')}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-slate-200" />

          {/* News items */}
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-primary-100" />

                {/* Content */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-primary-600 mb-2 block">
                    {item.date}
                  </span>
                  <p className="text-slate-700">{t(item.key)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
