import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

export default function PromotionModal() {
  const [open, setOpen] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { openModal } = useLeadModal();
  const location = useLocation();

  // Show popup every time the user lands on the home page
  useEffect(() => {
    if (location.pathname !== '/') return;
    timerRef.current = setTimeout(() => setOpen(true), 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClose = () => setOpen(false);

  const handleClaim = () => {
    setOpen(false);
    openModal();
  };

  const updateSlider = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    setSliderPos(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-charcoal-900 border border-charcoal-700 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up max-h-[95vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-400 hover:text-white hover:border-charcoal-500 transition-colors"
          aria-label="Close promotion"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-accent/15 via-primary-500/10 to-transparent border-b border-charcoal-700 px-6 pt-6 pb-5 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/30 rounded-full mb-3">
            <Gift className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Limited Time Offer</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
            FREE Engine Bay Cleaning
          </h2>
          <p className="text-charcoal-300 text-sm">
            With any <span className="text-white font-semibold">Full Detail Package</span>
            <span className="text-charcoal-500 mx-2">·</span>
            Ends August 31st
          </p>
        </div>

        {/* Before / After Slider */}
        <div className="px-6 pt-5">
          <p className="text-charcoal-500 text-xs text-center mb-3 font-medium tracking-widest uppercase">
            Drag to Compare
          </p>
          <div
            ref={sliderRef}
            className="relative aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border border-charcoal-700"
            onMouseDown={(e) => { dragging.current = true; updateSlider(e.clientX); }}
            onMouseMove={(e) => { if (dragging.current) updateSlider(e.clientX); }}
            onMouseUp={() => { dragging.current = false; }}
            onMouseLeave={() => { dragging.current = false; }}
            onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
            onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
          >
            {/* After */}
            <img
              src="/images/promotions/image.png"
              alt="Engine bay after cleaning"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Before */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/images/beforeenginebay.png"
                alt="Engine bay before cleaning"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ChevronLeft className="w-3.5 h-3.5 text-charcoal-900" />
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-900" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-charcoal-950/80 backdrop-blur-sm rounded text-xs font-semibold text-charcoal-300 border border-charcoal-700">
              Before
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-accent/90 rounded text-xs font-bold text-charcoal-950">
              After
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-6">
          <button
            onClick={handleClaim}
            className="w-full btn-primary text-base py-4 font-bold"
          >
            Claim FREE Engine Bay Cleaning Now
          </button>
          <p className="text-charcoal-600 text-xs text-center mt-3">
            No code needed · Just mention the offer when booking
          </p>
        </div>
      </div>
    </div>
  );
}
