import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { researchAreas } from '../data/research';

const ResearchPage = () => {
  const { section: activeSection } = useParams();
  const sectionRefs = useRef({});

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      setTimeout(() => {
        sectionRefs.current[activeSection].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [activeSection]);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Our Work</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Research</h1>
            <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
              We combine computational genomics with field research to study adaptation, speciation, & conservation across a variety of taxa.
              Most current projects involve birds. We partner with collaborators worldwide to carry out community-engaged research.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {researchAreas.map((area, index) => (
              <div 
                key={area.id} 
                id={area.id} 
                ref={el => sectionRefs.current[area.id] = el}
                className="scroll-mt-24"
              >
                <AnimatedSection>
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="aspect-[4/3] overflow-hidden sticky top-24">
                        <img src={area.image} alt={area.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">{area.title}</h2>
                      <p className="font-body text-sm teal-accent mb-6">{area.subtitle}</p>
                      <p className="font-body text-stone-300 leading-relaxed mb-8">{area.description}</p>
                      
                      {area.sections.map((section, i) => (
                        <div key={i} className="mb-8">
                          <h3 className="font-display text-xl font-medium mb-3">{section.title}</h3>
                          <p className="font-body text-stone-400 leading-relaxed text-sm">{section.content}</p>

                          {/* Show projects box after first section if it exists */}
                          {i === 0 && area.projects && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {area.projects.map((project, j) => (
                                <a
                                  key={j}
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-body text-xs px-3 py-2 bg-stone-800/50 text-stone-300 border border-stone-700 hover:border-[#9CAF88]/40 transition-colors"
                                >
                                  {project.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {area.genomes && (
                        <div className="mb-8">
                          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Genome Assemblies</h4>
                          <div className="flex flex-wrap gap-2">
                            {area.genomes.map((genome, i) => (
                              <a 
                                key={i}
                                href={genome.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-xs px-3 py-2 bg-stone-800/50 text-stone-300 border border-stone-700 hover:border-[#9CAF88]/40 transition-colors"
                              >
                                {genome.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <h4 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Selected Publications</h4>
                      <div className="space-y-3">
                        {area.publications.map((pub, i) => (
                          <div key={i} className="pl-4 border-l-2 border-stone-700 hover:border-[#9CAF88]/50 transition-colors">
                            {pub.link ? (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-sm text-stone-200 hover:text-[#9CAF88] transition-colors mb-1 inline-block"
                              >
                                {pub.title}
                              </a>
                            ) : (
                              <p className="font-body text-sm text-stone-200 mb-1">{pub.title}</p>
                            )}
                            <p className="font-body text-xs text-stone-500">
                              <span className="italic">{pub.journal}</span> · {pub.year}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3">Tools</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">Methods & Pipelines</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="p-8 border border-stone-800 bg-stone-900/30">
                <h3 className="font-display text-xl font-semibold mb-3">snpArcher</h3>
                <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                  A fast, reproducible, high-throughput variant calling workflow for population genomics. Designed for scalability in cloud environments.
                </p>
                <a href="https://github.com/harvardinformatics/snpArcher" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                  View on GitHub →
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-8 border border-stone-800 bg-stone-900/30">
                <h3 className="font-display text-xl font-semibold mb-3">Tn5 Library Prep Protocol</h3>
                <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                  High-throughput library preparation technique for creating WGS libraries at roughly $2/sample at 400 samples per day.
                </p>
                <a href="https://protocols.io" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                  View on protocols.io →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;
