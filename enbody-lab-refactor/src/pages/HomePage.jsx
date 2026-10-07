import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import NewsCard from '../components/NewsCard';
import { siteInfo } from '../data/site';
import { news } from '../data/news';
import { researchAreas } from '../data/research';

const HomePage = () => {
  const navigate = useNavigate();
  const visibleNews = news.slice(0, 3);

  return (
  <>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Daphne Major, Galápagos Islands"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="bg-stone-950/35 p-8 md:p-12 border border-stone-800/30 max-w-5xl">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">
              {siteInfo.institution}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="flex items-center gap-4 md:gap-6 mb-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95]">
                {siteInfo.name}
              </h1>
              <img
                src="/images/cornell_seal_simple_web_white.png"
                alt="Cornell University"
                className="h-16 md:h-24 lg:h-28 opacity-90"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="font-body text-xl md:text-2xl text-stone-300 max-w-2xl leading-relaxed mb-4">
              {siteInfo.tagline}
            </p>
            <p className="font-body text-base text-stone-400 max-w-2xl leading-relaxed mb-10">
              We combine field research and computational genomics to understand evolutionary processes shaping biodiversity and use this to inform conservation strategies.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/research')}
                className="font-body text-sm tracking-wide px-7 py-3.5 teal-bg text-stone-950 font-medium hover:bg-[#b8c4a8] transition-colors"
              >
                Explore Research
              </button>
              <button
                onClick={() => navigate('/opportunities')}
                className="font-body text-sm tracking-wide px-7 py-3.5 border teal-border text-stone-100 hover:bg-[#9CAF88]/10 transition-colors"
              >
                Join the Lab
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float-animation">
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#9CAF88]/50 to-transparent" />
      </div>
    </section>

    {/* Three Research Areas */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3 text-center">Research Focus</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-16">What We Study</h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              return (
                <button
                  key={area.id}
                  onClick={() => navigate(`/research/${area.id}`)}
                  className="group text-center"
                >
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-4 group-hover:text-[#9CAF88] transition-colors">
                    {area.title}
                  </h3>
                  <div className="aspect-square overflow-hidden bg-stone-800">
                    <img
                      src={area.homeImage}
                      alt={area.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* News Section */}
    <section className="py-20 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3">Latest</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">News & Updates</h2>
            </div>
            <Link to="/news" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline self-start sm:self-auto">
              View all news →
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleNews.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="p-6 md:p-8 border border-[#9CAF88]/30 bg-stone-900/30 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Interested in joining?</h2>
            <p className="font-body text-stone-400 text-sm mb-6">
              Reach out if you're interested in computational genomics, evolutionary biology, or conservation.
            </p>
            <button
              onClick={() => navigate('/opportunities')}
              className="font-body text-sm tracking-wide px-7 py-3 teal-bg text-stone-950 font-medium hover:bg-[#b8c4a8] transition-colors"
            >
              View Opportunities
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Useful Links */}
    <section className="py-16 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-stone-500 mb-6">Useful Links</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://cals.cornell.edu/computational-biology" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              Cornell Computational Biology
            </a>
            <a href="https://gradschool.cornell.edu/academics/fields-of-study/field/computational-biology/" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              Cornell Graduate Program - Computational Biology
            </a>
            <a href="https://gradschool.cornell.edu/academics/fields-of-study/field/genetics-genomics-and-development/" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              Cornell Graduate Program - GGD
            </a>
            <a href="https://www.ccgproject.org/" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              CA Conservation Genomics Project
            </a>
            <a href="https://github.com/harvardinformatics/snpArcher" target="_blank" rel="noopener noreferrer" className="font-body text-sm px-5 py-3 border border-stone-700 text-stone-300 hover:border-[#9CAF88]/50 transition-colors">
              snpArcher Pipeline
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
  );
};

export default HomePage;
