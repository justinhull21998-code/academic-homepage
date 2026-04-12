'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const navItems = [
  { id: 'hero', label: 'homepage' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'publications', label: 'publications' },
  { id: 'awards', label: 'awards' },
  { id: 'social', label: 'socialMedia' },
  { id: 'interests', label: 'interests' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
          >
            {t('name')}
            <span className="text-slate-400 font-normal"> / {t('nameEn')}</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md transition-all"
              >
                {t(item.label)}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md transition-all"
            >
              <Globe className="w-4 h-4" />
              {language === 'zh' ? '中' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-primary-600 rounded-md"
            >
              <Globe className="w-4 h-4" />
              {language === 'zh' ? '中' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-primary-600 rounded-md"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-3 text-left text-slate-600 hover:text-primary-600 hover:bg-slate-50 transition-colors"
              >
                {t(item.label)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
