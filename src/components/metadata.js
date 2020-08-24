import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Metadata({ title, description, image }) {
  const pageTitle = title ?? 'Yellow Brick Code';
  const pageDescription =
    description ?? 'Coding and stories and thoughts, oh my!';
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href);
  });

  const metaImage = image ? (
    <meta name="og:image" content={`${image}`}></meta>
  ) : null;

  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:creator" content="@ff0brickcode"></meta>
      <meta property="og:url" content={href}></meta>
      <meta property="og:title" content={pageTitle}></meta>
      <meta property="og:description" content={pageDescription}></meta>
      {metaImage}
      <meta property="og:type" content="website"></meta>
      <meta name="msapplication-TileColor" content="#ffffff"></meta>
      <meta
        name="msapplication-TileImage"
        content="/ms-icon-144x144.png"
      ></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
      <meta
        name="google-site-verification"
        content="zLUxlakyoAQefyGqlZ9WkzvInwuvPojrSgG9MPDylpI"
      ></meta>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/images/favicon/apple-icon-57x57.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/images/favicon/apple-icon-60x60.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/favicon/apple-icon-72x72.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/favicon/apple-icon-76x76.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/images/favicon/apple-icon-114x114.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/favicon/apple-icon-120x120.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/images/favicon/apple-icon-144x144.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/images/favicon/apple-icon-152x152.png"
      ></link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-icon-180x180.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/images/favicon/android-icon-192x192.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/images/favicon/favicon-96x96.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/images/favicon/manifest.json"></link>
    </Head>
  );
}
