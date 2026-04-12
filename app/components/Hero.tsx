'use client';

import { Mail, Github } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

// B站图标组件
function BilibiliIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
    </svg>
  );
}

// 抖音图标组件
function DouyinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Avatar */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-lg">
              <img
                src="/images/life-photo.jpg"
                alt="头像"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              {t('name')}
            </h1>
            <p className="text-lg text-slate-500 mb-4">
              {t('nameEn')}
            </p>

            {/* School & Role */}
            <div className="mb-6">
              <p className="text-primary-600 font-medium">{t('school')}</p>
              <p className="text-slate-600">{t('role')}</p>
            </div>

            {/* Contact Links - 删除 LinkedIn 和知乎，换成抖音 */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:onewey1@sina.com"
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 rounded-full transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-[#00AEEC]/10 text-slate-600 hover:text-[#00AEEC] rounded-full transition-all text-sm"
              >
                <BilibiliIcon className="w-4 h-4" />
                B站
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-black/10 text-slate-600 hover:text-black rounded-full transition-all text-sm"
              >
                <DouyinIcon className="w-4 h-4" />
                抖音
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-primary-50 text-slate-600 hover:text-primary-600 rounded-full transition-all text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side - About */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{t('bio1')}</p>
              <p className="text-accent-600 font-medium">{t('bio2')}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">3.85</div>
                <div className="text-xs text-slate-500">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">3/61</div>
                <div className="text-xs text-slate-500">Rank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">1st</div>
                <div className="text-xs text-slate-500">Paper</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
