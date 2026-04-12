'use client';

import { GraduationCap, Award, Clock } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
          {t('educationTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BJTU - Current */}
          <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {t('current')}
              </span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              {/* 校徽占位符 */}
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-slate-200">                      
              <img                                                                                                                
                src="/images/bjtu-logo.png"                                                                                       
                alt="北京交通大学"          
                className="w-full h-full object-contain"                                                                          
              />                                                                                                                  
            </div>  
              <div>
                <h3 className="font-bold text-slate-800">{t('bjtu')}</h3>
                <p className="text-sm text-slate-500">{t('bjtuCollege')}</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-slate-700 font-medium">{t('bjtuMajor')}</p>
              <p className="text-sm text-slate-600">2022.09 - 2026.06</p>
              <p className="text-sm font-medium text-primary-600">{t('bjtuGPA')}</p>

              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600">{t('awardsList')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SUSTech - Upcoming */}
          <div className="relative bg-white rounded-2xl p-6 shadow-sm border-2 border-dashed border-primary-200">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
                <Clock className="w-3 h-3" />
                {t('upcoming')}
              </span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              {/* 校徽占位符 */}
  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-slate-200">                      
    <img                                                                                          
      src="/images/sustech-logo.png"                                                                                    
      alt="南方科技大学"                                                                                                
      className="w-full h-full object-contain"                                                                          
    />                                                                                                                  
  </div>   
              <div>
                <h3 className="font-bold text-slate-800">{t('sustech')}</h3>
                <p className="text-sm text-slate-500">{t('sustechCollege')}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-slate-700 font-medium">{t('sustechMajor')}</p>
              <p className="text-slate-500">{t('sustechNote')}</p>
            </div>
          </div>
        </div>

        {/* 校徽提示 */}
        <p className="text-xs text-slate-400 mt-4 text-center">
          提示：可将校徽图片放入 public/images/ 文件夹，替换上方占位符
        </p>
      </div>
    </section>
  );
}
