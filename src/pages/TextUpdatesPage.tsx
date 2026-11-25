import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';
import { BUSINESS_NAME, PHONE } from '../constants';
import SEO from '../components/SEO';
import { SMS_SERVICE_CONSENT, SMS_MARKETING_CONSENT, smsConsentRecord } from '../data/smsConsent';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Stand-alone SMS opt-in form: the checkboxes are on the first screen, so carriers
// reviewing the A2P campaign see the opt-in without stepping through the quote form.
export default function TextUpdatesPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return setError('Please enter your name and mobile number.');
    if (!service && !marketing) return setError('Check at least one box to choose which texts you want.');
    setError('');
    setState('loading');
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({
          name,
          phone,
          vehicle: 'Not provided',
          packageInterest: 'Text updates sign-up',
          notes: smsConsentRecord('website text updates form', service, marketing),
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState('done');
    } catch {
      setState('error');
      setError(`Something went wrong. Please try again or call us at ${PHONE}.`);
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-950 pt-28 md:pt-36 pb-20">
      <SEO
        title={`Text Updates | ${BUSINESS_NAME}`}
        description={`Sign up for appointment, service and promotional text messages from ${BUSINESS_NAME}. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out.`}
        canonical="/text-updates/"
      />
      <div className="container-custom max-w-xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Get text updates.</h1>
        <p className="mt-4 text-lg text-charcoal-300">
          Choose the texts you want from {BUSINESS_NAME}: appointment confirmations and reminders, offers, or both.
        </p>

        {state === 'done' ? (
          <div className="mt-10 bg-charcoal-900 rounded-2xl p-8 text-center">
            <CheckCircle className="w-10 h-10 text-accent mx-auto mb-4" />
            <p className="text-white font-semibold text-lg">You're signed up.</p>
            <p className="mt-2 text-charcoal-300">Reply STOP to any message to opt out, or HELP for help.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 bg-charcoal-900 rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="tu-name" className="block text-sm font-medium text-charcoal-300 mb-1.5">First name</label>
              <input id="tu-name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name"
                className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent text-base" />
            </div>
            <div>
              <label htmlFor="tu-phone" className="block text-sm font-medium text-charcoal-300 mb-1.5">Mobile number</label>
              <input id="tu-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(786) 555-1234"
                autoComplete="tel" inputMode="tel"
                className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent text-base" />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={service} onChange={(e) => setService(e.target.checked)} className="mt-0.5 w-5 h-5 flex-shrink-0 accent-accent" />
              <span className="text-charcoal-300 text-sm leading-relaxed">{SMS_SERVICE_CONSENT}</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-0.5 w-5 h-5 flex-shrink-0 accent-accent" />
              <span className="text-charcoal-300 text-sm leading-relaxed">{SMS_MARKETING_CONSENT}</span>
            </label>
            <p className="text-charcoal-400 text-sm leading-relaxed">
              Consent is not a condition of purchase. See our{' '}
              <Link to="/privacy-policy/" className="underline hover:text-accent">Privacy Policy</Link> and{' '}
              <Link to="/terms/" className="underline hover:text-accent">Terms &amp; SMS Terms</Link>.
            </p>

            {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>}

            <button type="submit" disabled={state === 'loading'} className="w-full btn-primary py-3.5 disabled:opacity-60">
              {state === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing up…</> : 'Sign up for texts'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
