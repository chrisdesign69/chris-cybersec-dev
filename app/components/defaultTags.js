import React from "react";

const DefaultTags = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="/favicon.ico" rel="shortcut icon" />
      {/* for PWA  */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/icons/maskable_icon.png" color="#5bbad5" />

      <meta name="application-name" content="chris-cybersec.dev PWA" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="chrisDev PWA" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#1976d2" />

      {/* Apple device */}
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="chrisDev PWA" />
      <meta property="og:description" content="Best PWA App in the world" />
      <meta property="og:site_name" content="chrisDev PWA" />
      <meta property="og:url" content="https://chris-cybersec.dev" />
      <meta
        property="og:image"
        content="https://yourdomain.com/icons/icon-152x152.png"
      />
    </>
  );
};

export default DefaultTags;
