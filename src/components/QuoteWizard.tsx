import { useState, useEffect } from 'react';
import {
  Sparkles, Brush, Droplets, Shield, ArrowLeft, ArrowRight,
  Loader2, Gift, Star, ShieldCheck, Check, Phone, CheckCircle, MessageSquare,
} from 'lucide-react';
import { PHONE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../constants';
import { packages, type DetailPackage } from '../data/packages';
import { addons } from '../data/addons';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

/* ------------------------------------------------------------------ */
/*  Step option data                                                  */
/* ------------------------------------------------------------------ */

const SERVICES = [
  { id: 'Full Detail', label: 'Full Detail', desc: 'Complete reset inside and out. Most popular service.', icon: Sparkles, popular: true },
  { id: 'Interior Detail', label: 'Interior Detail', desc: 'Deep clean of every surface inside.', icon: Brush },
  { id: 'Exterior Detail', label: 'Exterior Detail', desc: 'Hand wash, clay bar, iron decon, and wax protection.', icon: Droplets },
  { id: 'Ceramic / Paint Correction', label: 'Ceramic Coating / Paint Correction', desc: 'Remove swirls and scratches, or protect the paint for years.', icon: Shield },
] as const;

type VehicleSize = 'sedan' | 'suv' | 'custom';
const VEHICLES: { id: string; desc: string; emoji: string; size: VehicleSize }[] = [
  { id: 'Sedan / Coupe', desc: 'Camry, Civic, Charger, Mustang, etc.', emoji: '🚗', size: 'sedan' },
  { id: 'SUV / Truck', desc: 'RAV4, Tahoe, F-150, Silverado, etc.', emoji: '🚙', size: 'suv' },
  { id: 'Luxury / Exotic', desc: 'Ferrari, Lamborghini, etc.', emoji: '🏎️', size: 'custom' },
];

const CONDITIONS = [
  { id: 'Well maintained', desc: 'Mostly clean, just needs a proper refresh.', dot: 'bg-emerald-400' },
  { id: 'Some buildup', desc: 'Dirt, dust, or stains have accumulated. Needs real attention.', dot: 'bg-yellow-400' },
  { id: 'Overdue', desc: "Hasn't been detailed in a while. Time to reset it.", dot: 'bg-orange-400' },
  { id: 'Rough condition', desc: "Heavily soiled or neglected. We've seen worse, we can handle it.", dot: 'bg-rose-400' },
] as const;

const TIMELINES: { id: string; desc: string; urgent?: boolean }[] = [
  { id: 'ASAP — this week', desc: "I'm ready to get it done now.", urgent: true },
  { id: 'Within 2 weeks', desc: 'Soon — just sorting out scheduling.' },
  { id: 'This month', desc: 'Sometime in the next few weeks.' },
  { id: 'Just getting a quote', desc: 'Exploring options for now.' },
];

const PROMO = 'Free Engine Bay Detail with every booking this month';

const pkgById = (id: string) => packages.find(p => p.id === id);
const DETAIL_TIERS = ['signature', 'pristine', 'perfect'].map(pkgById).filter(Boolean) as DetailPackage[];
const CERAMIC_TIERS = ['ceramic-t1', 'ceramic-t2'].map(pkgById).filter(Boolean) as DetailPackage[];

type WizardState = 'idle' | 'loading' | 'error';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [condition, setCondition] = useState('');
  const [pkgId, setPkgId] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [state, setState] = useState<WizardState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const TOTAL = 7;
  const isUrgent = timeline === 'ASAP — this week';

  const isCeramic = service.startsWith('Ceramic');
  const vehicleSize = VEHICLES.find(v => v.id === vehicle)?.size;
  const isLuxury = vehicleSize === 'custom';
  const tierPackages = isCeramic ? CERAMIC_TIERS : DETAIL_TIERS;

  function priceFor(p: DetailPackage): number | null {
    if (vehicleSize === 'suv') return p.pricing.suv ?? p.pricing.sedan;
    if (vehicleSize === 'sedan') return p.pricing.sedan;
    return null; // luxury / exotic → custom quote
  }

  const recommendedId = (() => {
    if (isCeramic) return 'ceramic-t1';
    if (condition === 'Rough condition' || condition === 'Overdue') return 'perfect';
    if (service === 'Full Detail' || condition === 'Some buildup') return 'pristine';
    return 'signature';
  })();

  const selectedPkg = tierPackages.find(p => p.id === pkgId);
  const estimate = selectedPkg ? priceFor(selectedPkg) : null;

  useEffect(() => {
    if (step === 4 && !pkgId) setPkgId(recommendedId);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  function pick(setter: (v: string) => void, value: string) {
    setter(value);
    setTimeout(() => setStep(s => Math.min(s + 1, TOTAL)), 180);
  }

  function chooseService(serviceId: string) {
    setService(serviceId);
    setPkgId('');
    setTimeout(() => setStep(2), 180);
  }

  function toggleAddon(name: string) {
    setSelectedAddons(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg('Please fill in your name, phone, and email.');
      return;
    }
    setErrorMsg('');
    setState('loading');

    const notes = [
      timeline ? `${isUrgent ? '⏰ URGENT — ' : ''}Timeline: ${timeline}` : '',
      `Service: ${service}`,
      `Condition: ${condition}`,
      `Vehicle: ${vehicle}`,
      selectedPkg ? `Package: ${selectedPkg.name}${estimate != null ? ` ($${estimate})` : ' (custom quote)'}` : '',
      selectedAddons.length ? `Add-ons: ${selectedAddons.join(', ')}` : '',
      carModel ? `Car: ${carModel}` : '',
    ].filter(Boolean).join(' · ');

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({
          name: firstName,
          phone,
          email,
          vehicle: carModel || vehicle,
          vehicleType: vehicleSize === 'suv' ? 'suv' : 'sedan',
          packageInterest: selectedPkg?.name || service,
          notes,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err) {
      setState('error');
      setErrorMsg((err as Error).message || 'Something went wrong. Please try again or call us.');
    }
  }

  /* ------------------------- After submit --------------------------- */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thanks, {firstName.split(' ')[0]}! 🎉</h3>
        <p className="text-charcoal-400 mb-6 max-w-xs leading-relaxed">
          Your request is in. We'll review your details and <span className="text-white font-medium">reach out shortly</span> to
          confirm your quote and schedule your detail.
        </p>

        {(selectedPkg || vehicle) && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {selectedPkg && (
              <span className="text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg">
                {selectedPkg.name}{estimate != null ? ` · $${estimate}` : ''}
              </span>
            )}
            {vehicle && <span className="text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg">{vehicle}</span>}
            {selectedAddons.length > 0 && (
              <span className="text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg">
                +{selectedAddons.length} add-on{selectedAddons.length > 1 ? 's' : ''}
              </span>
            )}
          </div>
        )}

        {/* Urgent? Book now */}
        <div className="w-full max-w-xs px-5 py-5 bg-accent/10 border border-accent/30 rounded-xl">
          <p className="text-white font-semibold mb-1">
            {isUrgent ? 'Need it this week?' : 'Already know you want to book?'}
          </p>
          <p className="text-charcoal-400 text-sm mb-4">
            Skip the wait — call or text us now and we'll lock in your spot.
          </p>
          <div className="flex gap-2">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="btn-primary flex-1 py-2.5 text-sm flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href={`sms:${PHONE.replace(/\D/g, '')}`}
              className="btn-secondary flex-1 py-2.5 text-sm flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> Text
            </a>
          </div>
          <p className="text-charcoal-500 text-xs mt-3">{PHONE}</p>
        </div>
      </div>
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
                    onClick={() => chooseService(opt.id)}
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

        {/* Step 4 — Package / estimate */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">
              {isCeramic ? 'Choose your protection' : 'Your instant estimate'}
            </h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              {isLuxury
                ? "Exotic & luxury pricing is custom — pick the level you're after and we'll confirm it."
                : isCeramic
                  ? 'Pick a coating tier. Final ceramic pricing is confirmed after we assess your paint.'
                  : `Based on your ${vehicle.toLowerCase()} in ${condition.toLowerCase()} condition. Pick the level that fits.`}
            </p>
            <div className="space-y-3">
              {tierPackages.map(p => {
                const active = pkgId === p.id;
                const recommended = p.id === recommendedId;
                const price = priceFor(p);
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
                        {price != null
                          ? <p className="text-xl font-bold gradient-text leading-none">${price}{isCeramic ? '+' : ''}</p>
                          : <p className="text-sm font-bold text-gold leading-tight">Custom<br/>Quote</p>}
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
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 5 — Add-ons */}
        {step === 5 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">Any add-ons?</h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              Optional extras we can include. Tap any that apply — or skip and continue.
            </p>
            <div className="space-y-2.5">
              {addons.map(a => {
                const active = selectedAddons.includes(a.name);
                return (
                  <button
                    key={a.id}
                    onClick={() => toggleAddon(a.name)}
                    className={`w-full flex items-center gap-3.5 text-left px-4 py-3 rounded-xl border transition-all ${
                      active ? 'border-accent bg-accent/10' : 'border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600'
                    }`}
                  >
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="text-white font-semibold text-sm">{a.name}</span>
                        {a.duration && <span className="text-[10px] text-charcoal-500">{a.duration}</span>}
                      </span>
                      <span className="block text-charcoal-400 text-xs mt-0.5 line-clamp-2">{a.description}</span>
                    </span>
                    <span className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${active ? 'border-accent bg-accent' : 'border-charcoal-600'}`}>
                      {active && <Check className="w-4 h-4 text-charcoal-950" />}
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setStep(6)}
              className="w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2"
            >
              {selectedAddons.length ? `Continue with ${selectedAddons.length} add-on${selectedAddons.length > 1 ? 's' : ''}` : 'Skip — Continue'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 6 — Timeline */}
        {step === 6 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center mb-1">How soon do you need it?</h3>
            <p className="text-charcoal-400 text-sm text-center mb-5">
              This helps us prioritize and find you the right slot.
            </p>
            <div className="space-y-2.5">
              {TIMELINES.map(opt => {
                const active = timeline === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => pick(setTimeline, opt.id)}
                    className={`w-full flex items-center gap-3.5 text-left px-4 py-3.5 rounded-xl border transition-all ${
                      active ? 'border-accent bg-accent/10' : 'border-charcoal-700 bg-charcoal-800 hover:border-charcoal-600'
                    }`}
                  >
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="text-white font-semibold text-sm">{opt.id}</span>
                        {opt.urgent && <span className="text-[10px] font-bold uppercase tracking-wide text-accent bg-accent/15 px-1.5 py-0.5 rounded">Fastest</span>}
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

        {/* Step 7 — Contact */}
        {step === 7 && (
          <form onSubmit={handleSubmit} className="animate-fade-in" noValidate>
            <h3 className="text-xl font-bold text-white text-center mb-1">Last step — your details</h3>
            <p className="text-charcoal-400 text-sm text-center mb-4">
              Drop your info and we'll reach out to confirm your quote and schedule. No spam, ever.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedPkg && (
                <span className="text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-lg">
                  {selectedPkg.name}{estimate != null ? ` · $${estimate}` : ''}
                </span>
              )}
              {vehicle && <span className="text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg">{vehicle}</span>}
              {selectedAddons.length > 0 && (
                <span className="text-xs font-medium text-charcoal-200 bg-charcoal-800 border border-charcoal-700 px-2.5 py-1 rounded-lg">+{selectedAddons.length} add-on{selectedAddons.length > 1 ? 's' : ''}</span>
              )}
            </div>

            <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl mb-5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-300 text-xs">
                <span className="font-semibold">No payment required.</span> We'll confirm everything before your appointment.
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
              {state === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Get My Quote <ArrowRight className="w-4 h-4" /></>}
            </button>
            <p className="text-charcoal-500 text-xs text-center mt-3">We'll reach out to confirm · No spam, ever</p>
          </form>
        )}
      </div>
    </div>
  );
}
