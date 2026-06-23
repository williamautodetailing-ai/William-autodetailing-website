import { useEffect } from 'react';
import { X, Phone, ShieldCheck } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import { PHONE } from '../constants';
import GhlBooking from './GhlBooking';

export default function LeadFormModal() {
  const { isOpen, closeModal } = useLeadModal();

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book your appointment"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={closeModal}
      />

      <div className="relative w-full max-w-2xl bg-charcoal-900 border border-charcoal-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-in-up max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-charcoal-800 flex-shrink-0 bg-gradient-to-r from-charcoal-900 to-charcoal-800">
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-bold text-white truncate">
              Book Your <span className="gradient-text">Appointment</span>
            </h2>
            <p className="text-charcoal-400 text-xs sm:text-sm mt-0.5">
              Pick your service and lock in a time — instant confirmation
            </p>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-lg text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Booking widget */}
        <div className="overflow-y-auto flex-1 custom-scrollbar px-3 sm:px-5 py-4">
          <GhlBooking />
        </div>

        {/* Footer — reassurance + call fallback */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 sm:px-6 py-3.5 border-t border-charcoal-800 flex-shrink-0 bg-charcoal-950/40">
          <div className="flex items-center gap-2 text-charcoal-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
            <span>No hidden fees · Free reschedule anytime</span>
          </div>
          <a
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            className="flex items-center gap-2 text-sm text-charcoal-300 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Prefer to call? {PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
