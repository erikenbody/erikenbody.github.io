import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { team } from '../data/team';

const TeamPage = () => (
  <>
    <section className="pt-32 pb-8 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">Research group at Cornell University</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">Team</h1>
          <p className="font-body text-xl text-stone-400 max-w-3xl leading-relaxed">
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* LAB GROUP PHOTO SECTION */}
    <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-stone-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <AnimatedSection>
          <div className="mt-6 md:mt-8 mb-10 text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">
              Our Research Community
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-semibold">
              The Enbody Lab
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <figure>
            <div className="group aspect-[5/3] overflow-hidden bg-stone-900">
              <img
                src={team.groupPhoto.image}
                alt={team.groupPhoto.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{
                  objectPosition: "55% 40%"
                }}
              />
            </div>

            {team.groupPhoto.caption && (
              <AnimatedSection delay={220}>
                <figcaption className="font-body text-sm text-stone-500 mt-4 text-center">
                  {team.groupPhoto.caption}
                </figcaption>
              </AnimatedSection>
            )}
          </figure>
        </AnimatedSection>

      </div>
    </section>

    {/* PI Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="aspect-[3/4] overflow-hidden bg-stone-800 mb-6">
                <img
                  src={team.pi.image}
                  alt={team.pi.name}
                  loading="lazy" decoding="async" className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-2">
            <AnimatedSection delay={100}>
              <p className="font-body text-xs tracking-[0.2em] uppercase teal-accent mb-2">Principal Investigator</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-2">{team.pi.name}</h2>
              <p className="font-body text-stone-400 mb-6">{team.pi.title}</p>
              <p className="font-body text-stone-300 leading-relaxed mb-8">{team.pi.bio}</p>
              
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Education & Positions</h3>
              <div className="space-y-3 mb-8">
                {team.pi.education.map((edu, i) => (
                  <div key={i} className="flex gap-4 text-sm">
                    <span className="font-body text-stone-600 w-20 shrink-0">{edu.years}</span>
                    <div>
                      <span className="font-body text-stone-200">{edu.place}</span>
                      <p className="font-body text-stone-500 text-xs mt-0.5">{edu.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="mailto:enbody@cornell.edu" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">Email</a>
                <a href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">Google Scholar</a>
                <a href="https://github.com/erikenbody" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">GitHub</a>
                <a href="https://erikenbody.github.io/enbody-cv/" target="_blank" rel="noopener noreferrer" className="font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors link-underline">Full CV</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* Current Members */}
    <section className="py-20 bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-3">Current</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">Lab Members</h2>
        </AnimatedSection>

        <div className="space-y-12 mb-16">
          {team.members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy" decoding="async" className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-body text-xs tracking-[0.2em] uppercase teal-accent mb-2">{member.role}</p>
                  <h3 className="font-display text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="font-body text-sm text-stone-400 mb-4">{member.note}</p>
                  <p className="font-body text-xs text-stone-600">{member.years}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">Former Mentees & Alumni</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.alumni.map((member, i) => (
              <div key={i} className="p-4 border border-stone-800/50">
                <p className="font-body text-sm text-stone-300">{member.name}</p>
                <p className="font-body text-xs text-stone-500">{member.note}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default TeamPage;
