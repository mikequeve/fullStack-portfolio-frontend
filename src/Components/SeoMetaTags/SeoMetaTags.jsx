import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoMetaTags = ({ title, description, name }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel='canonical' href={window.location.href} />
      <meta name='description' content={description} />
      {/* Open Graph tags (OG) */}
      <meta property='og:url' content={window.location.href} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {/* OG image tags */}
      <meta property='og:image:alt' content={`Image of ${title} site`} />
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  );
};

export default SeoMetaTags;
