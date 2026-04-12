'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Awards from './components/Awards';
import SocialMedia from './components/SocialMedia';
import Interests from './components/Interests';
import Footer from './components/Footer';

export default function Home() {
  // 滚动动画效果
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <News />
      <Education />
      <Experience />
      <Publications />
      <Awards />
      <SocialMedia />
      <Interests />
      <Footer />
    </main>
  );
}
