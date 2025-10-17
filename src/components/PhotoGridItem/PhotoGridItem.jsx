import React from 'react';
import styled from 'styled-components';

const getResponsiveImageURLs = (src, type) => [`.${type} 1x`, `@2x.${type} 2x`, `@3x.${type} 3x`].map(
  suffix => src.replace('.jpg', suffix)
).join(',');

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source srcSet={getResponsiveImageURLs(src,'avif')} />
          <source srcSet={'jpg'} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 16px;
`;

const Tags = styled.ul`
  overflow-x: clip;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  margin-right: 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
