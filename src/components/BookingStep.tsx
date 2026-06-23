import { useEffect, useState } from 'react';
import { Gift, ChevronDown, Loader2, ShieldCheck } from 'lucide-react';
import { GHL_CALENDAR_URL, GHL_CALENDAR_BY_PACKAGE } from '../constants';

const SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';
const PROMO = 'Free Engine Bay Detail — included with every booking, gone after June 30';

// GHL_CALENDAR_URL may hold a bare URL OR a full <iframe ...> embed snippet.
// Pull the src out either way.
function extractSrc(value: string): string {
  const m = value.match(/src="([^"]+)"/i);
  return m ? m[1] : value.trim();
}

interface Props {
  firstName?: string;
  email?: string;
  phone?: string;
  packageName?: string;
  service?: string;
  vehicle?: string;
  carModel?: string;   // accepted for the lead record — not used by the iframe
  estimate?: number;
  features?: string[];
}

export default function BookingStep({
  firstName, email, phone, packageName, service, vehicle, estimate, features = [],
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [showIncluded, setShowIncluded] = useState(false);

  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // Pick the calendar for the chosen package (or the default one), prefilled with the lead.
  const embed = (packageName && GHL_CALENDAR_BY_PACKAGE[packageName]) || GHL_CALENDAR_URL;
  const base = extractSrc(embed);
  const params = new URLSearchParams();
  if (firstName) params.set('first_name', firstName);
  if (email) params.set('email', email);
  if (phone) params.set('phone', phone);
  const qs = params.toString();
  const calendarSrc = qs ? `${base}${base.includes('?') ? '&' : '?'}${qs}` : base;
  const calId = base.split('?')[0].split('/').pop() || 'cal';
  const frameId = `gcal-${calId}`;

  const firstNameOnly = (firstName || '').split(' ')[0];

  return (
    <div className="px-5 sm:px-6 py-6">
      {/* Thank you */}
      <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-1">Request Received</p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
        Thank you{firstNameOnly ? `, ${firstNameOnly}` : ''}
      </h3>

      {/* Promo banner */}
      <div className="flex items-start gap-3 px-4 py-3 bg-gradient-to-r from-accent/15 to-transparent border border-accent/30 rounded-xl mb-4">
        <Gift className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-0.5">This Month Only</p>
          <p className="text-sm text-white font-medium leading-snug">{PROMO}</p>
        </div>
      </div>

      {/* Estimate card */}
      <div className="border border-charcoal-700 rounded-xl overflow-hidden mb-6">
        <div className="flex items-start justify-between gap-4 px-4 py-4 bg-charcoal-800/60">
          <div className="min-w-0">
            <p className="text-charcoal-500 text-[10px] font-bold tracking-widest uppercase mb-1">Your Estimate</p>
            <p className="text-white font-semibold text-sm truncate">{packageName || 'Detail'}</p>
            {service && <p className="text-charcoal-400 text-xs mt-0.5">{service}</p>}
            {vehicle && (
              <span className="inline-block mt-2 text-xs font-medium text-charcoal-200 bg-charcoal-900 border border-charcoal-700 px-2.5 py-1 rounded-lg">
                {vehicle}
              </span>
            )}
          </div>
          {typeof estimate === 'number' && estimate > 0 && (
            <div className="text-right flex-shrink-0">
              <p className="text-3xl font-bold gradient-text leading-none">${estimate}</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 px-4 py-2.5 border-t border-charcoal-800 bg-charcoal-900/40">
          <Gift className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <p className="text-xs text-charcoal-300">+ FREE Engine Bay Detail <span className="text-charcoal-500">· ends June 30</span></p>
        </div>

        {features.length > 0 && (
          <div className="border-t border-charcoal-800">
            <button
              onClick={() => setShowIncluded(v => !v)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
              <span className="text-charcoal-300 text-xs font-bold tracking-widest uppercase">See exactly what's included</span>
              <ChevronDown className={`w-4 h-4 text-charcoal-400 transition-transform ${showIncluded ? 'rotate-180' : ''}`} />
            </button>
            {showIncluded && (
              <ul className="px-4 pb-4 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-charcoal-300">
                    <span className="text-accent mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Calendar */}
      <p className="text-charcoal-500 text-[10px] font-bold tracking-widest uppercase mb-1">Final Step</p>
      <h4 className="font-display text-xl font-bold text-white mb-1">
        Lock In Your <span className="gradient-text">Spot</span>
      </h4>
      <p className="text-charcoal-400 text-sm mb-4">Pick a date &amp; time that works — instant confirmation.</p>

      <div className="relative rounded-xl overflow-hidden border border-charcoal-700 bg-charcoal-800/40">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 py-24 text-charcoal-400 pointer-events-none">
            <Loader2 className="w-6 h-6 animate-spin text-accent" />
            <span className="text-sm">Loading available times…</span>
          </div>
        )}
        <iframe
          id={frameId}
          src={calendarSrc}
          title="Book your appointment"
          scrolling="yes"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: 'min(80vh, 720px)',
            border: 'none',
            display: 'block',
          }}
        />
      </div>

      <div className="flex items-center gap-2 mt-4 text-charcoal-400 text-xs">
        <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
        <span>No payment required to book · Free reschedule anytime</span>
      </div>
    </div>
  );
}
