'use client';

import { ExternalLink, Github, Construction } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

// B站图标
function BilibiliIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
    </svg>
  );
}

// 知乎图标
function ZhihuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.168H6.375c.115 1.687.004 3.57-.167 5.59h4.304c.385-.024.394 1.025.394 1.025H6.185c-.054 1.489-.22 2.854-.474 4.086.278.022.555.036.832.036 1.49 0 2.315-.486 2.804-1.547.498-1.073.643-2.523.643-4.03 0-1.495-.144-2.92-.64-3.98-.49-1.06-1.317-1.547-2.807-1.547-.278 0-.556.014-.834.036.255 1.232.42 2.597.474 4.086h4.318c0-.025.01-.025.01 0h.01c0-.025.01-.025.01 0-.01-.025 0-.025 0-.025.01-.025 0-.025 0-.025-.01-.025 0-.025 0-.025h-4.326c.17-2.02.282-3.903.167-5.59h5.172c0-.025-.01-.025-.01 0h-.01c0-.025-.01-.025-.01 0 .01-.025 0-.025 0-.025.025-.025.025-.025 0-.025.01 0 .01 0 0 0 .27.676.5 1.38.68 2.11h.01z" />
    </svg>
  );
}

export default function SocialMedia() {
  const { t } = useLanguage();

  return (
    <section id="social" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('socialTitle')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* B站 - 真实链接 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#00AEEC]/10 flex items-center justify-center mx-auto mb-4">
              <BilibiliIcon className="w-8 h-8 text-[#00AEEC]" />
            </div>

            <h3 className="font-bold text-slate-800 mb-2">{t('bilibili')}</h3>
            <p className="text-sm text-slate-500 mb-3">{t('bilibiliDesc')}</p>

            <div className="flex flex-col gap-2">
              <a
                href="https://space.bilibili.com/513985257?spm_id_from=333.1007.0.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#00AEEC] text-white rounded-lg hover:bg-[#00A0D8] transition-colors text-sm font-medium"
              >
                访问主页
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.bilibili.com/video/BV1EKJhzEEh9/?share_source=copy_web&vd_source=81173f5655bf31bdb5a54257947813db"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-[#00AEEC]/10 text-slate-600 hover:text-[#00AEEC] rounded-lg transition-colors text-sm"
              >
                观看视频
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 知乎 - 建设中 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center opacity-70">
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-4">
              <ZhihuIcon className="w-8 h-8 text-[#0066FF]" />
            </div>

            <h3 className="font-bold text-slate-800 mb-2">{t('zhihu')}</h3>
            <p className="text-sm text-slate-500 mb-4">{t('zhihuDesc')}</p>

            <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-sm font-medium cursor-not-allowed">
              <Construction className="w-4 h-4" />
              建设中
            </div>
          </div>

          {/* GitHub - 建设中 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center opacity-70">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-slate-800" />
            </div>

            <h3 className="font-bold text-slate-800 mb-2">{t('github')}</h3>
            <p className="text-sm text-slate-500 mb-4">{t('githubDesc')}</p>

            <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-sm font-medium cursor-not-allowed">
              <Construction className="w-4 h-4" />
              建设中
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
