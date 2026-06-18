import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Phone, Loader2 } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import { packages } from '../data/packages';
import { addons } from '../data/addons';
import { PHONE } from '../constants';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

type VehicleType = 'sedan' | 'suv';
type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function LeadFormModal() {
  const { isOpen, defaultPackage, closeModal } = useLeadModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [vehicleType, setVehicleType] = useState<VehicleType>('sedan');
  const [packageInterest, setPackageInterest] = useState('');
  const [notes, setNotes] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPackageInterest(defaultPackage);
      setFormState('idle');
      setErrorMsg('');
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      setName('');
      setPhone('');
      setEmail('');
      setVehicle('');
      setVehicleType('sedan');
      setPackageInterest('');
      setNotes('');
      setFormState('idle');
      setErrorMsg('');
    }
  }, [isOpen, defaultPackage]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal();
    }
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !vehicle.trim() || !packageInterest) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setFormState('loading');

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ name, phone, email, vehicle, vehicleType, packageInterest, notes }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }

      setFormState('success');
    } catch (err) {
      setFormState('error');
      setErrorMsg((err as Error).message || 'Something went wrong. Please try again.');
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-in-up max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-800 flex-shrink-0">
          <div>
            <h2 className="text-xl font-bold text-white">Request a Quote</h2>
            <p className="text-charcoal-400 text-sm mt-0.5">We'll confirm within a few hours</p>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-lg text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">We Got Your Request!</h3>
              <p className="text-charcoal-400 mb-6 max-w-xs leading-relaxed">
                Thanks! We'll review your request and reach out shortly to confirm your appointment.
              </p>
              <div className="flex items-center gap-3 px-5 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl mb-6">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-left">
                  <p className="text-charcoal-400 text-xs">Need to reach us now?</p>
                  <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-white font-semibold hover:text-accent transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="btn-secondary px-8 py-2.5"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5" noValidate>
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="(305) 555-0100"
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm"
                  required
                />
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                  Vehicle <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  value={vehicle}
                  onChange={e => setVehicle(e.target.value)}
                  placeholder="2022 Toyota Camry"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm"
                  required
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-2">
                  Vehicle Type <span className="text-accent">*</span>
                </label>
                <div className="flex gap-2">
                  {([['sedan', 'Coupe / Sedan'], ['suv', 'SUV / Truck / Crossover']] as const).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setVehicleType(val)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                        vehicleType === val
                          ? 'bg-accent text-charcoal-950 border-accent'
                          : 'bg-charcoal-800 text-charcoal-400 border-charcoal-700 hover:text-white hover:border-charcoal-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Interest */}
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                  Package Interest <span className="text-accent">*</span>
                </label>
                <select
                  value={packageInterest}
                  onChange={e => setPackageInterest(e.target.value)}
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent transition-colors text-sm appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Select a service...</option>
                  <optgroup label="Detailing Packages">
                    {packages.filter(p => !p.isCeramic).map(pkg => (
                      <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Ceramic Coatings">
                    {packages.filter(p => p.isCeramic).map(pkg => (
                      <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Add-On Services">
                    {addons.map(addon => (
                      <option key={addon.id} value={addon.name}>{addon.name}</option>
                    ))}
                  </optgroup>
                  <option value="Not sure yet">Not sure yet — I need a recommendation</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-charcoal-300 mb-1.5">
                  Notes <span className="text-charcoal-500 font-normal">(optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Paint condition, specific concerns, preferred date/time..."
                  rows={3}
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-2.5 text-white placeholder-charcoal-500 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Request'
                )}
              </button>

              <p className="text-charcoal-500 text-xs text-center">
                No hidden fees · We'll contact you to confirm details
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
