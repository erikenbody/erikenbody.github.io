import React from 'react';
import BlogImageFrame from './BlogImageFrame';

const NewsContentBlock = ({ block }) => {
  // Keep existing string-only content working as normal paragraphs.
  if (typeof block === 'string') {
    return (
      <p className="max-w-3xl mx-auto font-body text-lg text-stone-300 leading-8 whitespace-pre-line">
        {block}
      </p>
    );
  }

  if (!block || typeof block !== 'object') {
    return null;
  }

  switch (block.type) {
    case 'heading':
      return (
        <h2 className="max-w-3xl mx-auto font-display text-3xl md:text-4xl font-semibold text-stone-100 pt-8">
          {block.text}
        </h2>
      );

    case 'image':
      return (
        <figure className="my-10">
          <BlogImageFrame image={block} defaultAspect="landscape" />

          {block.caption && (
            <figcaption className="max-w-3xl mx-auto font-body text-sm text-stone-500 mt-3 leading-relaxed">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

      case 'gallery':
        return (
          <div
            className={`grid ${block.gap || 'gap-5'} my-10 ${
              block.columns === 1
                ? 'grid-cols-1'
                : block.columns === 3
                  ? 'md:grid-cols-3'
                  : 'md:grid-cols-2'
            }`}
          >
            {block.images?.map((image, index) => (
              <figure key={`${image.src}-${index}`}>
                <BlogImageFrame image={image} defaultAspect="standard" />
      
                {image.caption && (
                  <figcaption className="font-body text-sm text-stone-500 mt-3 leading-relaxed">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        );

    case 'quote':
      return (
        <blockquote className="max-w-3xl mx-auto my-12 border-l-2 border-[#9CAF88] pl-6">
          <p className="font-display text-2xl md:text-3xl italic text-stone-200 leading-relaxed">
            “{block.text}”
          </p>

          {block.attribution && (
            <footer className="font-body text-sm text-stone-500 mt-4">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );

    case 'list':
      return (
        <ul className="max-w-3xl mx-auto font-body text-lg text-stone-300 leading-8 list-disc pl-6 space-y-2">
          {block.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case 'link':
      return (
        <div className="max-w-3xl mx-auto">
          <a
            href={block.href}
            target={block.newTab === false ? undefined : '_blank'}
            rel={block.newTab === false ? undefined : 'noopener noreferrer'}
            className="inline-block font-body text-sm px-6 py-3 border teal-border text-stone-100 hover:bg-[#9CAF88]/10 transition-colors"
          >
            {block.label || 'Read more'} →
          </a>
        </div>
      );

    case 'paragraph':
    default:
      return (
        <p className="max-w-3xl mx-auto font-body text-lg text-stone-300 leading-8 whitespace-pre-line">
          {block.text}
        </p>
      );
  }
};

export default NewsContentBlock;
