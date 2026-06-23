import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import QuoteWizard from './QuoteWizard';

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
      aria-label="Get your price"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={closeModal} />

      <div className="relative w-full max-w-lg bg-charcoal-900 border border-charcoal-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden animate-fade-in-up max-h-[94vh] flex flex-col">
        {/* Header — logo + title */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-charcoal-800 flex-shrink-0 bg-gradient-to-r from-charcoal-900 to-charcoal-800">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/images/optimized/williams-logo.webp"
              alt="William's Auto Detailing"
              className="h-10 w-auto object-contain flex-shrink-0"
              width={64}
              height={64}
            />
            <div className="min-w-0">
              <p className="text-accent text-[10px] font-bold tracking-widest uppercase">Free Estimate</p>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight truncate">
                Get Your Price <span className="gradient-text">Instantly</span>
              </h2>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-lg text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          <QuoteWizard />
        </div>
      </div>
    </div>
  );
}
