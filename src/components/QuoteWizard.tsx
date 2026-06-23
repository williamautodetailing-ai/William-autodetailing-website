import { useState } from 'react';
import {
  Sparkles, Brush, Droplets, Shield, ArrowLeft, ArrowRight,
  Loader2, Gift, Star, ShieldCheck, Check,
} from 'lucide-react';
import { PHONE, BUSINESS_NAME, GHL_WEBHOOK_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { packages, type DetailPackage } from '../data/packages';
import BookingStep from './BookingStep';

/* ------------------------------------------------------------------ */
/*  Step option data                                                  */
/* ------------------------------------------------------------------ */

const SERVICES = [
  { id: 'Full Detail', label: 'Full Detail', desc: 'Complete reset inside and out. Most popular service.', icon: Sparkles, popular: true },
  { id: 'Interior Detail', label: 'Interior Detail', desc: 'Deep clean of every surface inside.', icon: Brush },
  { id: 'Exterior Detail', label: 'Exterior Detail', desc: 'Hand wash, clay bar, iron decon, and wax protection.', icon: Droplets },
  { id: 'Ceramic / Paint Correction', label: 'Ceramic Coating / Paint Correction', desc: 'Remove swirls and scratches, or protect the paint for years.', icon: Shield },
] as const;

const VEHICLES = [
  { id: 'Sedan / Coupe', desc: 'Camry, Civic, Charger, Mustang, etc.', emoji: '🚗', large: false },
  { id: 'SUV / Crossover', desc: 'RAV4, Explorer, Tahoe, Pilot, etc.', emoji: '🚙', large: true },
  { id: 'Truck / Van', desc: 'F-150, Silverado, Sprinter, etc.', emoji: '🛻', large: true },
  { id: 'Luxury / Exotic', desc: 'Mercedes, BMW, Porsche, Tesla, Lambo, etc.', emoji: '🏎️', large: false },
] as const;

const CONDITIONS = [
  { id: 'Well maintained', desc: 'Mostly clean, just needs a proper refresh.', dot: 'bg-emerald-400' },
  { id: 'Some buildup', desc: 'Dirt, dust, or stains have accumulated. Needs real attention.', dot: 'bg-yellow-400' },
  { id: 'Overdue', desc: "Hasn't been detailed in a while. Time to reset it.", dot: 'bg-orange-400' },
  { id: 'Rough condition', desc: "Heavily soiled or neglected. We've seen worse, we can handle it.", dot: 'bg-rose-400' },
] as const;

const PROMO = 'Free Engine Bay Detail with every booking this month';

// The three detail tiers shown on the estimate step, mapped to your real packages.
const TIERS = ['signature', 'pristine', 'perfect'] as const;
const TIER_PACKAGES = TIERS
  .map(id => packages.find(p => p.id === id))
  .filter(Boolean) as DetailPackage[];

type WizardState = 'idle' | 'loading' | 'error';

interface Props {
  onClose: () => void;
}

export default function QuoteWizard({ onClose }: Props) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [condition, setCondition] = useState('');
  const [pkgId, setPkgId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [state, setState] = useState<WizardState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [booked, setBooked] = useState(false);

  const TOTAL = 5;
  const isLargeVehicle = VEHICLES.find(v => v.id === vehicle)?.large ?? false;

  function priceFor(p: DetailPackage) {
    return isLargeVehicle && p.pricing.suv ? p.pricing.suv : p.pricing.sedan;
  }

  // Recommend a tier from the service + condition answers
  const recommendedId = (() => {
    if (service.startsWith('Ceramic') || condition === 'Rough condition' || condition === 'Overdue') return 'perfect';
    if (service === 'Full Detail' || condition === 'Some buildup') return 'pristine';
    return 'signature';
  })();

  const selectedPkg = TIER_PACKAGES.find(p => p.id === pkgId);
  const estimate = selectedPkg ? priceFor(selectedPkg) : 0;

  function pick(setter: (v: string) => void, value: string) {
    setter(value);
    setTimeout(() => setStep(s => Math.min(s + 1, TOTAL)), 180);
  }

  function goToEstimate(serviceId: string) {
    setService(serviceId);
    // default-select the recommended tier when we land on the estimate step
    setTimeout(() => setStep(2), 180);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg('Please fill in your name, phone, and email.');
      return;
    }
    setErrorMsg('');
    setState('loading');

    const payload = JSON.stringify({
      firstName, phone, email, carModel,
      service, vehicleType: vehicle, condition,
      package: selectedPkg?.name ?? '',
      estimate,
      promo: PROMO,
      source: `${BUSINESS_NAME} — Website Quote Wizard`,
      submittedAt: new Date().toISOString(),
    });

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });
      if (!res.ok) throw new Error('Submission failed');
      setBooked(true);
    } catch {
      try {
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' }, body: payload,
        });
        setBooked(true);
      } catch {
        setState('error');
        setErrorMsg('Something went wrong. Please try again or call us.');
      }
    }
  }

  /* --------- After submit: thank-you + estimate + GHL calendar ------- */
  if (booked) {
    return (
      <BookingStep
        firstName={firstName}
        email={email}
        phone={phone}
        packageName={selectedPkg?.name}
        service={service}
        vehicle={vehicle}
        estimate={estimate}
        features={selectedPkg?.features ?? []}
      />
    );
  }

  /* ------------------------------ Wizard ---------------------------- */
  return (
    <div className="flex flex-col">
      {/* Promo + trust strip */}
      <div className="px-5 sm:px-6 pt-4 space-y-2.5">
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-accent/15 to-transparent border border-accent/30 rounded-xl">
          <Gift className="w-4 h-4 text-accent flex-shrink-0" />
          <p className="text-sm text-white font-medium">{PROMO}</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-charcoal-400 text-xs">
          <span className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />)}
          </span>
          <span className="font-semibold text-charcoal-200">{GOOGLE_RATING}</span>
          <span className="text-charcoal-600">·</span>
          <span>{GOOGLE_REVIEW_COUNT} Reviews</span>
          <span className="text-charcoal-600">·</span>
          <span>No Payment to Book</span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 sm:px-6 pt-5">
        <div className="flex items-center gap-1.5 mb-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < step ? 'bg-accent' : 'bg-charcoal-700'}`} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-charcoal-500 text-xs font-semibold tracking-widest uppercase">Step {step} of {TOTAL}</p>
          {step > 1 && state !== 'loading' && (
            <button
              onClick={() => setStep(s => Math.max(s - 1, 1))}
              className="flex items-center gap-1 text-charcoal-400 hover:text-accent text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          )}
        </div>
      </div>

      <div className="px-5 sm:px-6 py-5">
        {/* Step 1 — Service */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">What do you need?</h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              Not sure which to pick? Choose the closest one and we'll dial it in when we reach out.
            </p>
            <div className="space-y-2.5">
              {SERVICES.map(opt => {
                const Icon = opt.icon;
                const active = service === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => goToEstimate(opt.id)}
                    className={`w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${
                      active ? 'border-accent bg-accent/10' : 'border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600'
                    }`}
                  >
                    <span className={`flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 ${active ? 'bg-accent/20' : 'bg-charcoal-900'}`}>
                      <Icon className={`w-5 h-5 ${active ? 'text-accent' : 'text-charcoal-300'}`} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="text-white font-semibold text-sm">{opt.label}</span>
                        {opt.popular && <span className="text-[10px] font-bold uppercase tracking-wide text-accent bg-accent/15 px-1.5 py-0.5 rounded">Popular</span>}
                      </span>
                      <span className="block text-charcoal-400 text-xs mt-0.5">{opt.desc}</span>
                    </span>
                    <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? 'border-accent bg-accent' : 'border-charcoal-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2 — Vehicle */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">What's your vehicle?</h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              Pricing adjusts by size. This helps us give you an accurate number, not a ballpark.
            </p>
            <div className="space-y-2.5">
              {VEHICLES.map(opt => {
                const active = vehicle === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => pick(setVehicle, opt.id)}
                    className={`w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${
                      active ? 'border-accent bg-accent/10' : 'border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600'
                    }`}
                  >
                    <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-white font-semibold text-sm">{opt.id}</span>
                      <span className="block text-charcoal-400 text-xs mt-0.5">{opt.desc}</span>
                    </span>
                    <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? 'border-accent bg-accent' : 'border-charcoal-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3 — Condition */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">How's the condition?</h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              No judgment here. This just helps us quote you accurately and set the right expectations.
            </p>
            <div className="space-y-2.5">
              {CONDITIONS.map(opt => {
                const active = condition === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => pick(setCondition, opt.id)}
                    className={`w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${
                      active ? 'border-accent bg-accent/10' : 'border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full flex-shrink-0 ${opt.dot}`} />
                    <span className="flex-1 min-w-0">
                      <span className="block text-white font-semibold text-sm">{opt.id}</span>
                      <span className="block text-charcoal-400 text-xs mt-0.5">{opt.desc}</span>
                    </span>
                    <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${active ? 'border-accent bg-accent' : 'border-charcoal-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4 — Estimate / package tiers */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">Your instant estimate</h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              Based on your {vehicle.toLowerCase()} in {condition.toLowerCase()} condition. Pick the level that fits.
            </p>
            <div className="space-y-3">
              {TIER_PACKAGES.map(p => {
                const active = pkgId === p.id;
                const recommended = p.id === recommendedId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPkgId(p.id)}
                    className={`w-full text-left px-4 py-4 rounded-xl border transition-all relative ${
                      active ? 'border-accent bg-accent/10' : 'border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600'
                    }`}
                  >
                    {recommended && (
                      <span className="absolute -top-2 right-4 text-[10px] font-bold uppercase tracking-wide text-charcoal-950 bg-gold px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-white font-bold text-sm">{p.name}</p>
                        <p className="text-charcoal-400 text-xs mt-0.5">{p.tagline}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xl font-bold gradient-text leading-none">${priceFor(p)}</p>
                        {p.popular && <span className="text-[10px] text-accent font-semibold">Most popular</span>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => { if (!pkgId) setPkgId(recommendedId); setStep(5); }}
              className="w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2"
            >
              Continue with {selectedPkg?.name ?? TIER_PACKAGES.find(p => p.id === recommendedId)?.name}
              {(estimate || priceFor(TIER_PACKAGES.find(p => p.id === recommendedId)!)) ? ` — $${selectedPkg ? estimate : priceFor(TIER_PACKAGES.find(p => p.id === recommendedId)!)}` : ''}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-charcoal-500 text-xs text-center mt-3">
              Final price confirmed on inspection · No payment to book
            </p>
          </div>
        )}

        {/* Step 5 — Contact */}
        {step === 5 && (
          <form onSubmit={handleSubmit} className="animate-fade-in" noValidate>
            <h3 className="text-xl font-bold text-white text-center mb-1">One Last Step</h3>
            <p className="text-charcoal-400 text-sm text-center mb-4">
              Enter your name &amp; number to lock in your estimate — we'll text it to you with a link to book. No spam, ever.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedPkg && <span className="text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg">{selectedPkg.name} · ${estimate}</span>}
              {vehicle && <span className="text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg">{vehicle}</span>}
            </div>

            <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl mb-5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-300 text-xs">
                <span className="font-semibold">No payment required to book.</span> You pay only after your detail is finished and you've inspected the results.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">First Name <span className="text-accent">*</span></label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Your first name"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Phone <span className="text-accent">*</span></label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(786) 555-1234"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">Email <span className="text-accent">*</span></label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                  Car Make/Model <span className="text-charcoal-500 font-normal">(optional)</span>
                </label>
                <input type="text" value={carModel} onChange={e => setCarModel(e.target.value)} placeholder="e.g. 2022 White Tesla Model 3"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm" />
              </div>
            </div>

            {errorMsg && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mt-4">{errorMsg}</p>}

            <button type="submit" disabled={state === 'loading'}
              className="w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {state === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <><Check className="w-4 h-4" /> See My Times &amp; Book</>}
            </button>
            <p className="text-charcoal-500 text-xs text-center mt-3">We'll text your quote + booking link · No spam · Unsubscribe anytime</p>
          </form>
        )}
      </div>
    </div>
  );
}
