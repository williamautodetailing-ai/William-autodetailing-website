import { useEffect } from 'react';

const SITE_URL = 'https://williamautodetailing.net';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/optimized/hero-porsche.webp`;

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, canonical, image }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const ogImage = image || DEFAULT_OG_IMAGE;

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');

    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);

    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    if (canonical) {
      const href = canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`;

      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = href;

      setMeta('og:url', href, true);
    }
  }, [title, description, keywords, canonical, image]);

  return null;
}
