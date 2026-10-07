import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import NewsContentBlock from '../components/NewsContentBlock';
import NotFoundPage from './NotFoundPage';
import { BLOG_IMAGE_ASPECT_CLASSES } from '../components/BlogImageFrame';
import { news } from '../data/news';

const NewsDetailPage = () => {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const isNatural = article.heroImageAspect === 'natural';
  const aspectClass = BLOG_IMAGE_ASPECT_CLASSES[article.heroImageAspect] || BLOG_IMAGE_ASPECT_CLASSES.landscape;
  const fitClass = article.heroImageFit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <AnimatedSection>
          <Link
            to="/news"
            className="inline-block font-body text-sm teal-accent hover:text-[#b8c4a8] transition-colors mb-10"
          >
            ← Back to all news
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="font-body text-xs px-2 py-1 bg-[#9CAF88]/10 text-[#9CAF88] tracking-wide uppercase">
              {article.type}
            </span>
            <span className="font-body text-sm text-stone-500">{article.date}</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-8">
            {article.title}
          </h1>
          <p className="font-body text-xl text-stone-400 leading-relaxed">
            {article.description}
          </p>
        </AnimatedSection>

        {(article.heroImage || article.image) && (
          <AnimatedSection delay={100}>
            <figure>
              <div className={`mt-12 overflow-hidden bg-stone-900 ${isNatural ? '' : aspectClass}`}>
                <img
                  src={article.heroImage || article.image}
                  alt={article.title}
                  decoding="async"
                  className={isNatural ? 'w-full h-auto' : `w-full h-full ${fitClass}`}
                  style={{ objectPosition: article.heroImagePosition || '50% 50%' }}
                />
              </div>
              {article.heroImageCaption && (
                <figcaption className="max-w-3xl mx-auto font-body text-sm text-stone-500 mt-3 leading-relaxed">
                  {article.heroImageCaption}
                </figcaption>
              )}
            </figure>
          </AnimatedSection>
        )}

        <AnimatedSection delay={200}>
          <div className="mt-14 space-y-7">
            {article.content?.map((block, index) => (
              <NewsContentBlock
                key={`${typeof block === 'object' ? block.type : 'paragraph'}-${index}`}
                block={block}
              />
            ))}

            {article.externalLink && (
              <div className="max-w-3xl mx-auto pt-4">
                <a
                  href={article.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-sm px-6 py-3 border teal-border text-stone-100 hover:bg-[#9CAF88]/10 transition-colors"
                >
                  View publication →
                </a>
              </div>
            )}
          </div>
        </AnimatedSection>
      </article>
    </main>
  );
};

export default NewsDetailPage;
