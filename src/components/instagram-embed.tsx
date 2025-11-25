'use client';

import Script from 'next/script';

export function InstagramEmbed() {
  return (
    <>
      <div
        className="sk-ww-instagram-stories"
        data-embed-id="25626422"
      ></div>
      <Script
        src="https://widgets.sociablekit.com/instagram-stories/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
