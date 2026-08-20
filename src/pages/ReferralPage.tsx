import { useState } from 'react';
import { Gift, UserPlus, PhoneCall, Sparkles, Loader2, CheckCircle, Phone } from 'lucide-react';
import { BUSINESS_NAME, PHONE } from '../constants';
import SEO from '../components/SEO';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const STEPS = [
  {
    icon: UserPlus,
    title: 'Send Us Their Info',
    description: "Fill out the form below with your friend's name and number. Takes less than a minute.",
  },
  {
    icon: PhoneCall,
    title: 'We Reach Out',
    description: "We'll contact them directly to introduce our services — no pressure, no spam.",
  },
  {
    icon: Sparkles,
    title: 'You Both Get Upgraded',
    description: 'Once they book their first paid service, you both get a free one-time upgrade from basic wax to premium wax/sealant.',
  },
];

type FormState = 'idle' | 'loading' | 'error';

export default function ReferralPage() {
  const [referrerName, setReferrerName] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friendPhone, setFriendPhone] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!referrerName.trim() || !referrerPhone.trim() || !referrerEmail.trim() || !friendName.trim() || !friendPhone.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setState('loading');

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/submit-referral`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({
          referrerName,
          referrerPhone,
          referrerEmail,
          friendName,
          friendPhone,
          friendEmail: friendEmail || undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
      setSubmitted(true);
      setState('idle');
    } catch (err) {
      setState('error');
      setErrorMsg((err as Error).message || 'Something went wrong. Please try again or call us.');
    }
  }

  return (
    <div className="bg-charcoal-950 text-white pt-24 md:pt-32">
      <SEO
        title={`Give a Wax, Get a Wax — Referral Program | ${BUSINESS_NAME}`}
        description="Refer a friend to William's Auto Detailing and you both get a free one-time upgrade from basic wax to premium wax/sealant. No cost, no catch."
        canonical="/refer"
      />

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_65%)]" />
        <div className="decorative-blur absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/8 rounded-full blur-[180px]" />

        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800/80 border border-charcoal-700 mb-8">
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-charcoal-200 text-sm font-medium">Referral Program</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Give a Wax, <span className="gradient-text">Get a Wax</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto">
            Send us a friend who needs their car detailed. When they book their first service, you <span className="text-white font-semibold">both</span> get
            a free one-time upgrade from basic wax to premium wax/sealant.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-4 md:pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 items-start bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-charcoal-950 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-charcoal-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom max-w-2xl">
          {submitted ? (
            <div className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-8 sm:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5 mx-auto">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Thanks, {referrerName.split(' ')[0]}! 🎉</h2>
              <p className="text-charcoal-400 mb-2 leading-relaxed">
                We'll reach out to <span className="text-white font-medium">{friendName.split(' ')[0]}</span> shortly.
              </p>
              <p className="text-charcoal-400 leading-relaxed">
                Once they book and complete their first service, you'll both get your free wax/sealant upgrade automatically applied.
              </p>
              <div className="w-full max-w-xs mx-auto mt-6 px-5 py-5 bg-accent/10 border border-accent/30 rounded-xl">
                <p className="text-white font-semibold mb-1">Questions in the meantime?</p>
                <a
                  href={`tel:${PHONE.replace(/\D/g, '')}`}
                  className="btn-primary w-full py-2.5 text-sm flex items-center justify-center gap-1.5 mt-3"
                >
                  <Phone className="w-4 h-4" /> Call {PHONE}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-charcoal-800/50 border border-charcoal-700 rounded-2xl p-6 sm:p-8" noValidate>
              <h2 className="text-2xl font-bold text-white text-center mb-1">Refer a Friend</h2>
              <p className="text-charcoal-400 text-sm text-center mb-6">
                Both of you get a free basic-to-premium wax/sealant upgrade once they book.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">Your Info</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Your Name <span className="text-accent">*</span></label>
                      <input type="text" value={referrerName} onChange={e => setReferrerName(e.target.value)} placeholder="Your full name"
                        className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Your Phone <span className="text-accent">*</span></label>
                        <input type="tel" value={referrerPhone} onChange={e => setReferrerPhone(e.target.value)} placeholder="(786) 555-1234"
                          className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Your Email <span className="text-accent">*</span></label>
                        <input type="email" value={referrerEmail} onChange={e => setReferrerEmail(e.target.value)} placeholder="you@email.com"
                          className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-1 border-t border-charcoal-700">
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3 mt-5">Their Info</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Friend's Name <span className="text-accent">*</span></label>
                      <input type="text" value={friendName} onChange={e => setFriendName(e.target.value)} placeholder="Their full name"
                        className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Friend's Phone <span className="text-accent">*</span></label>
                        <input type="tel" value={friendPhone} onChange={e => setFriendPhone(e.target.value)} placeholder="(786) 555-5678"
                          className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                          Friend's Email <span className="text-charcoal-500 font-normal">(optional)</span>
                        </label>
                        <input type="email" value={friendEmail} onChange={e => setFriendEmail(e.target.value)} placeholder="them@email.com"
                          className="w-full bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {errorMsg && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mt-5">{errorMsg}</p>}

              <button type="submit" disabled={state === 'loading'}
                className="w-full btn-primary py-3.5 mt-6 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                {state === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Send My Referral</>}
              </button>

              <p className="text-charcoal-500 text-xs text-center mt-4 leading-relaxed">
                By submitting, you confirm your friend is okay with us reaching out. One upgrade per person, one-time use,
                applied after your friend's first paid booking. Valid for new customers only. No cash value and can't be
                combined with other offers.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
