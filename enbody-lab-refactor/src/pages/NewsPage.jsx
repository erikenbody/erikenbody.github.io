import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import NewsCard from '../components/NewsCard';
import { news } from '../data/news';

const NewsPage = () => (
  <main className="min-h-screen">
    <section className="pt-32 pb-16 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Lab Life</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">News & Updates</h1>
          <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
            Research updates, publications, conferences, awards, and life in the Enbody Lab.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <AnimatedSection key={item.slug} delay={Math.min(index, 5) * 60}>
              <NewsCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default NewsPage;
