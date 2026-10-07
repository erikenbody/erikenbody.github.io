import React from 'react';

const BLOG_IMAGE_ASPECT_CLASSES = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[16/9]',
  standard: 'aspect-[4/3]',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  natural: ''
};

// Shared image renderer for individual blog images and gallery images.
// `aspectRatio` remains supported for older posts that already use a raw
// Tailwind aspect class such as "aspect-[3/2]".
const BlogImageFrame = ({ image, defaultAspect = 'standard' }) => {
  const selectedAspect = image.aspect || defaultAspect;
  const aspectClass =
    image.aspectRatio ||
    BLOG_IMAGE_ASPECT_CLASSES[selectedAspect] ||
    BLOG_IMAGE_ASPECT_CLASSES[defaultAspect];

  const hasCustomHeight = Boolean(image.height);
  const useNaturalDimensions =
    selectedAspect === 'natural' && !image.aspectRatio && !hasCustomHeight;

  const fitClass = image.fit === 'contain' ? 'object-contain' : 'object-cover';
  const frameStyle = hasCustomHeight ? { height: image.height } : undefined;
  const imageStyle = {
    objectPosition: image.objectPosition || '50% 50%'
  };

  return (
    <div
      className={`w-full overflow-hidden bg-stone-900 ${
        useNaturalDimensions ? '' : aspectClass
      }`}
      style={frameStyle}
    >
      <img
        src={image.src}
        alt={image.alt || ''}
        loading="lazy"
        decoding="async"
        className={
          useNaturalDimensions
            ? 'block w-full h-auto'
            : `block w-full h-full ${fitClass}`
        }
        style={imageStyle}
      />
    </div>
  );
};

export { BLOG_IMAGE_ASPECT_CLASSES };
export default BlogImageFrame;
