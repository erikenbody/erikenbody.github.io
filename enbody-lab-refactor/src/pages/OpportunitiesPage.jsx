import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const OpportunitiesPage = () => (
  <>
    <section className="pt-32 pb-16 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Join Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Opportunities</h1>
          <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
            We're always looking for motivated students interested in evolutionary biology, conservation, and computational genomics to join the group.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Current Openings */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="p-10 md:p-14 border-2 border-[#9CAF88]/40 bg-[#9CAF88]/5 mb-16">
            {/* <span className="font-body text-xs tracking-[0.2em] uppercase teal-accent mb-4 block">Now Recruiting</span> */}
            <h2 className="font-display text-3xl font-semibold mb-4">Graduate Students</h2>
            <p className="font-body text-stone-300 leading-relaxed mb-6">
              Interested students should reach out to inquire about opportunities in evolutionary and conservation genomics. 
            </p>
            <p className="font-body text-stone-400 leading-relaxed mb-8">
              I recruit doctoral students through the Computational Biology or Genetics, Genomics, and Development fields at Cornell.
            </p>
            <a 
              href="mailto:enbody@cornell.edu" 
              className="inline-block font-body text-sm tracking-wide px-8 py-4 teal-bg text-stone-950 font-medium hover:bg-[#b8c4a8] transition-colors"
            >
              Contact to Discuss
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={100}>
            <div className="p-8 border border-stone-800 bg-stone-900/30">
              <h3 className="font-display text-xl font-semibold mb-4">Postdoctoral Researchers</h3>
              <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                We are always looking for motivated postdoctoral researchers to join the lab. When funding is not currently available, I am happy to support internal or external postdoctoral fellowship opportunities. 
              </p>
              <a href="mailto:enbody@cornell.edu" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                Inquire about positions →
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="p-8 border border-stone-800 bg-stone-900/30">
              <h3 className="font-display text-xl font-semibold mb-4">Undergraduate Researchers</h3>
              <p className="font-body text-stone-400 text-sm leading-relaxed mb-4">
                Cornell undergraduates interested in gaining research experience in computational biology are welcome to inquire. Projects may involve bioinformatics, data analysis, or fieldwork depending on interests and lab needs.
              </p>
              <a href="mailto:enbody@cornell.edu" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">
                Inquire about positions →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Contact Info */}
    <section className="py-20 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl font-semibold mb-6">Contact</h2>

          <div className="space-y-6">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone-600 mb-2">Email</p>
              <a href="mailto:enbody@cornell.edu" className="font-display text-2xl hover:text-[#9CAF88] transition-colors">
                enbody@cornell.edu
              </a>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone-600 mb-2">Location</p>
              <p className="font-body text-stone-300">
                Department of Computational Biology<br />
                Atkinson Hall 304B<br />
                Cornell University<br />
                Ithaca, New York
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-stone-600 mb-2">Connect</p>
              <div className="flex gap-6 font-body text-sm">
                <a href="https://github.com/erikenbody" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors link-underline">GitHub</a>
                <a href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors link-underline">Google Scholar</a>
                <a href="https://bsky.app/profile/erikenbody.bsky.social" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-100 transition-colors link-underline">Bluesky</a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

  </>
);

export default OpportunitiesPage;
