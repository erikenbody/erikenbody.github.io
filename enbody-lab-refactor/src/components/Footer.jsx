import React from 'react';

const Footer = () => (
  <footer className="py-10 border-t border-stone-800">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-semibold teal-accent">Enbody Lab</span>
          <span className="text-stone-700">·</span>
          <span className="font-body text-sm text-stone-500">Cornell University</span>
        </div>
        <div className="flex gap-6 font-body text-xs text-stone-500">
          <a href="https://github.com/erikenbody" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">GitHub</a>
          <a href="https://scholar.google.com/citations?user=3bBANnkAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Scholar</a>
          <a href="https://bsky.app/profile/erikenbody.bsky.social" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">Bluesky</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
