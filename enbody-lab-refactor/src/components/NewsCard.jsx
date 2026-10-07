import React from 'react';
import { Link } from 'react-router-dom';

const CARD_IMAGE_ASPECT_CLASSES = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[16/9]',
  standard: 'aspect-[4/3]',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]'
};

const NewsCard = ({ item }) => {
  const aspectClass = CARD_IMAGE_ASPECT_CLASSES[item.cardImageAspect] || CARD_IMAGE_ASPECT_CLASSES.standard;

  return (
    <Link to={`/news/${item.slug}`} className="group block h-full">
      <article className="bg-stone-900/50 border border-stone-800 group-hover:border-[#9CAF88]/40 transition-colors h-full flex flex-col">
        {item.image && (
          <div className={`${aspectClass} overflow-hidden bg-stone-800`}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-[transform,opacity] duration-300 group-hover:scale-[1.02] group-hover:opacity-85"
              style={{ objectPosition: item.cardImagePosition || '50% 50%' }}
            />
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-xs px-2 py-1 bg-[#9CAF88]/10 text-[#9CAF88] tracking-wide uppercase">
              {item.type}
            </span>
            <span className="font-body text-xs text-stone-500">{item.date}</span>
          </div>

          <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[#9CAF88] transition-colors">
            {item.title}
          </h3>
          <p className="font-body text-sm text-stone-400 leading-relaxed">
            {item.description}
          </p>
          <span className="font-body text-sm teal-accent mt-5">Read more →</span>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
