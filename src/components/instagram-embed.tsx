'use client';

import Script from 'next/script';

export function InstagramEmbed() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-438ff154-14c5-43dc-80af-c4ac86e3e9ab"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
