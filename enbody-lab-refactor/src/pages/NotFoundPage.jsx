import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <main className="min-h-screen flex items-center justify-center px-6">
    <div className="text-center">
      <p className="font-body text-sm tracking-[0.25em] uppercase teal-accent mb-4">404</p>
      <h1 className="font-display text-5xl font-semibold mb-5">Page not found</h1>
      <p className="font-body text-stone-400 mb-8">
        The page or news article you requested could not be found.
      </p>
      <Link
        to="/"
        className="inline-block font-body text-sm px-7 py-3 teal-bg text-stone-950 font-medium"
      >
        Return home
      </Link>
    </div>
  </main>
);

export default NotFoundPage;
