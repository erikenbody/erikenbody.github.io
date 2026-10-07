import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { publications } from '../data/publications';

const PublicationsPage = () => {
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
  
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase sage-accent mb-4">Research Output</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Publications</h1>
            <div className="flex gap-6 items-center">
              <a 
                href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-sm sage-accent hover:text-[#b8c4a8] transition-colors link-underline"
              >
                Google Scholar →
              </a>
              <span className="text-stone-700">|</span>
              <p className="font-body text-stone-500 text-sm">† denotes equal contribution</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {years.map((year, yearIndex) => (
            <AnimatedSection key={year} delay={yearIndex * 50}>
              <div className="mb-16">
                <h2 className="font-display text-3xl font-semibold sage-accent mb-8 sticky top-20 bg-stone-950 py-2 z-10">
                  {year}
                </h2>
                <div className="space-y-6">
                  {publications.filter(p => p.year === year).map((pub, index) => (
                    <article 
                      key={index} 
                      className="pl-5 border-l-2 border-stone-800 hover:border-[#9CAF88]/60 transition-colors"
                    >
                      {pub.link ? (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-display text-lg font-medium mb-2 leading-snug block hover:text-[#9CAF88] transition-colors"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <h3 className="font-display text-lg font-medium mb-2 leading-snug">
                          {pub.title}
                        </h3>
                      )}
                      <p className="font-body text-sm text-stone-500 mb-1">
                        {pub.authors}
                      </p>
                      <p className="font-body text-sm text-stone-400">
                        <span className="italic">{pub.journal}</span>
                        {pub.note && <span className="text-[#9CAF88]/70 ml-2">· {pub.note}</span>}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
};

export default PublicationsPage;
