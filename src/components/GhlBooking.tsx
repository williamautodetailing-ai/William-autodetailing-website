import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * GoHighLevel Service Menu booking widget.
 * Swap SERVICE_MENU_ID if you ever point this at a different service menu / calendar.
 */
const SERVICE_MENU_ID = '6a3a201c18abb833854f126a';
const EMBED_SRC = `https://api.leadconnectorhq.com/widget/service-menu/${SERVICE_MENU_ID}`;
const SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

export default function GhlBooking() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // form_embed.js installs a global postMessage listener that auto-resizes
    // the iframe to fit its content. Load it once, reuse for every open.
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 py-24 text-charcoal-400">
          <Loader2 className="w-6 h-6 animate-spin text-accent" />
          <span className="text-sm">Loading available times…</span>
        </div>
      )}
      <iframe
        src={EMBED_SRC}
        title="Book your appointment"
        id={`${SERVICE_MENU_ID}_embed`}
        scrolling="no"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          minHeight: 640,
          border: 'none',
          overflow: 'hidden',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />
    </div>
  );
}
