'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-Z8BHQWQWV8';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize dataLayer immediately
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize gtag after script loads
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }
          gtag('js', new Date());
          gtag('config', GA_MEASUREMENT_ID);
        }}
      />
    </>
  );
}
