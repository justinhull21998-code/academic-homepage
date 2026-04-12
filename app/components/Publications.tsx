'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Publications() {
  const { t } = useLanguage();
  const [coverLoadFailed, setCoverLoadFailed] = useState(false);

  return (
    <section id="publications" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('publicationsTitle')}
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row">
            {/* Paper Cover - 论文封面截图 */}
            <div className="relative md:w-48 h-48 md:h-auto bg-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
              {coverLoadFailed ? (
                <div className="flex items-center justify-center w-full h-full">
                  <svg
                    className="w-12 h-12 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
              ) : (
                <Image
                  src="/images/paper-cover.png"
                  alt="Paper Cover"
                  fill
                  sizes="(min-width: 768px) 12rem, 100vw"
                  className="object-cover"
                  onError={() => setCoverLoadFailed(true)}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded">
                  {t('firstAuthor')}
                </span>
                <span className="px-2 py-1 text-xs font-medium text-green-600 bg-green-50 rounded">
                  SCI
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                {t('paperTitle')}
              </h3>

              <p className="text-sm text-slate-500 mb-3">
                <span className="font-medium">{t('journal')}:</span> Symmetry, 2025
              </p>

              {/* 作者信息 */}
              <div className="text-sm text-slate-600 mb-4 space-y-1">
                <p>
                  <span className="font-medium">Wei Wang</span>
                  <span className="text-slate-400 text-xs ml-1">(First Author)</span>
                </p>
                <p className="text-slate-500">
                  <span className="text-slate-400">Corresponding Author:</span>{' '}
                  <span className="font-medium">Wenhao Gui</span>
                </p>
              </div>

              {/* Action Buttons - 只保留 PDF */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/images/paper.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  {t('pdf')}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-500 hover:text-primary-600 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
