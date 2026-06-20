import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLeadModal } from '../context/LeadModalContext';

const AFTER_SRC = '/images/optimized/promotions/engine-bay-after.webp';
const BEFORE_SRC = '/images/optimized/promotions/engine-bay-before.webp';

function prefetchImage(src: string) {
  const img = new Image();
  img.src = src;
}

export default function PromotionModal() {
  const [open, setOpen] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { openModal } = useLeadModal();
  const location = useLocation();

  // Prefetch images immediately on mount so they're cached before the modal opens
  useEffect(() => {
    if (location.pathname !== '/') return;
    const dismissed = sessionStorage.getItem('promo_dismissed');
    if (dismissed) return;

    let loaded = 0;
    const onLoad = () => {
      loaded += 1;
      if (loaded === 2) setImagesReady(true);
    };

    const after = new Image();
    after.onload = onLoad;
    after.onerror = onLoad; // don't block modal on error
    after.src = AFTER_SRC;

    const before = new Image();
    before.onload = onLoad;
    before.onerror = onLoad;
    before.src = BEFORE_SRC;

    // Show modal after 3s OR once both images are loaded, whichever is later
    // but cap the wait at 6s so a slow connection doesn't delay forever
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

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('promo_dismissed', '1');
  };

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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal-950/85" onClick={handleClose} />

      {/* Modal — slides up from bottom on mobile, centered on desktop */}
      <div className="relative bg-charcoal-900 border border-charcoal-700 sm:rounded-3xl rounded-t-3xl shadow-2xl w-full sm:max-w-lg overflow-hidden animate-fade-in-up">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-800 border border-charcoal-700 text-charcoal-400 hover:text-white hover:border-charcoal-500 transition-colors"
          aria-label="Close promotion"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Drag handle for mobile */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-charcoal-600" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-accent/15 via-primary-500/10 to-transparent border-b border-charcoal-700 px-5 pt-3 sm:pt-6 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/30 rounded-full mb-2">
            <Gift className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Limited Time Offer</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl font-bold text-white leading-tight mb-1">
            FREE Engine Bay Cleaning
          </h2>
          <p className="text-charcoal-300 text-sm">
            With any <span className="text-white font-semibold">Full Detail Package</span>
            <span className="text-charcoal-500 mx-2">·</span>
            Ends August 31st
          </p>
        </div>

        {/* Before / After Slider */}
        <div className="px-5 pt-4">
          <p className="text-charcoal-500 text-xs text-center mb-2 font-medium tracking-widest uppercase">
            Drag to Compare
          </p>
          <div
            ref={sliderRef}
            className="relative aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border border-charcoal-700 bg-charcoal-800"
            onMouseDown={(e) => { dragging.current = true; updateSlider(e.clientX); }}
            onMouseMove={(e) => { if (dragging.current) updateSlider(e.clientX); }}
            onMouseUp={() => { dragging.current = false; }}
            onMouseLeave={() => { dragging.current = false; }}
            onTouchStart={(e) => { e.preventDefault(); updateSlider(e.touches[0].clientX); }}
            onTouchMove={(e) => { e.preventDefault(); updateSlider(e.touches[0].clientX); }}
          >
            {!imagesReady && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
              </div>
            )}

            {/* After */}
            <img
              src={AFTER_SRC}
              alt="Engine bay after cleaning"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              width={1024}
              height={682}
              decoding="sync"
            />

            {/* Before */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={BEFORE_SRC}
                alt="Engine bay before cleaning"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                width={1024}
                height={664}
                decoding="sync"
              />
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ChevronLeft className="w-3.5 h-3.5 text-charcoal-900" />
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-900" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-charcoal-950/80 rounded text-xs font-semibold text-charcoal-300 border border-charcoal-700">
              Before
            </div>
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-accent/90 rounded text-xs font-bold text-charcoal-950">
              After
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-5 py-5">
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
