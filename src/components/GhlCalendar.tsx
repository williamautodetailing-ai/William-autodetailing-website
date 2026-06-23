import { useEffect, useMemo, useState } from 'react';
import { Loader2, ChevronLeft, ChevronRight, CheckCircle, Phone, Calendar } from 'lucide-react';
import { PHONE } from '../constants';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

interface Props {
  firstName?: string;
  email?: string;
  phone?: string;
  service?: string;
  packageName?: string;
  vehicle?: string;
  carModel?: string;
  estimate?: number;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const pad = (n: number) => String(n).padStart(2, '0');
const keyOf = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

export default function GhlCalendar(props: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tz, setTz] = useState('America/New_York');
  const [slotsByDate, setSlotsByDate] = useState<Record<string, string[]>>({});
  const [view, setView] = useState(() => new Date());
  const [selDate, setSelDate] = useState('');
  const [selTime, setSelTime] = useState('');
  const [booking, setBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${SUPABASE_URL}/functions/v1/ghl-slots`, {
          headers: { Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        });
        const d = await r.json();
        if (!r.ok) throw new Error(d.error || 'Could not load available times');
        const sbd: Record<string, string[]> = d.slotsByDate || {};
        setSlotsByDate(sbd);
        if (d.timezone) setTz(d.timezone);
        const firstDay = Object.keys(sbd).sort()[0];
        if (firstDay) setView(new Date(`${firstDay}T00:00:00`));
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const fmtTime = (iso: string) =>
    new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: tz });

  const year = view.getFullYear();
  const month = view.getMonth();

  const cells = useMemo(() => {
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const out: ({ day: number; key: string; available: boolean } | null)[] = [];
    for (let i = 0; i < firstWeekday; i++) out.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const key = keyOf(year, month, d);
      out.push({ day: d, key, available: (slotsByDate[key]?.length ?? 0) > 0 });
    }
    return out;
  }, [year, month, slotsByDate]);

  // Limit navigation to months that fall inside the fetched window
  const sortedDays = Object.keys(slotsByDate).sort();
  const minMonth = sortedDays.length ? new Date(`${sortedDays[0]}T00:00:00`) : view;
  const maxMonth = sortedDays.length ? new Date(`${sortedDays[sortedDays.length - 1]}T00:00:00`) : view;
  const canPrev = year > minMonth.getFullYear() || (year === minMonth.getFullYear() && month > minMonth.getMonth());
  const canNext = year < maxMonth.getFullYear() || (year === maxMonth.getFullYear() && month < maxMonth.getMonth());

  async function confirmBooking() {
    if (!selTime) return;
    setBooking(true);
    setError('');
    try {
      const r = await fetch(`${SUPABASE_URL}/functions/v1/ghl-book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({
          firstName: props.firstName,
          email: props.email,
          phone: props.phone,
          startTime: selTime,
          service: props.service,
          package: props.packageName,
          estimate: props.estimate,
          vehicle: props.vehicle,
          carModel: props.carModel,
        }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'Booking failed');
      setBooked(true);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBooking(false);
    }
  }

  /* ---------------------------- States ---------------------------- */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-charcoal-400">
        <Loader2 className="w-6 h-6 animate-spin text-accent" />
        <span className="text-sm">Loading available times…</span>
      </div>
    );
  }

  if (booked) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You're booked!</h3>
        <p className="text-charcoal-400 mb-5 max-w-xs leading-relaxed">
          {selDate && selTime && (
            <>Your spot is locked in for <span className="text-white font-medium">
              {new Date(`${selDate}T00:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {fmtTime(selTime)}
            </span>. We'll text a confirmation shortly.</>
          )}
        </p>
        <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm text-charcoal-300 hover:text-accent transition-colors">
          <Phone className="w-4 h-4" /> Questions? {PHONE}
        </a>
      </div>
    );
  }

  if (error && Object.keys(slotsByDate).length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <p className="text-charcoal-300 mb-2">We couldn't load the calendar right now.</p>
        <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 text-accent font-semibold">
          <Phone className="w-4 h-4" /> Call to book: {PHONE}
        </a>
      </div>
    );
  }

  const times = selDate ? slotsByDate[selDate] ?? [] : [];

  return (
    <div className="p-4">
      {/* Month header */}
      <div className="flex items-center gap-1.5 mb-3 text-charcoal-400 text-[10px] font-bold tracking-widest uppercase">
        <Calendar className="w-3.5 h-3.5 text-accent" /> Pick a date
      </div>
      <div className="flex items-center justify-between mb-3">
        <button
          disabled={!canPrev}
          onClick={() => setView(new Date(year, month - 1, 1))}
          className="p-1.5 rounded-lg border border-charcoal-700 text-charcoal-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <p className="text-white font-semibold text-sm">{MONTHS[month]} {year}</p>
        <button
          disabled={!canNext}
          onClick={() => setView(new Date(year, month + 1, 1))}
          className="p-1.5 rounded-lg border border-charcoal-700 text-charcoal-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent hover:text-accent transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Weekday row */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map(w => (
          <div key={w} className="text-center text-[10px] font-medium text-charcoal-500 py-1">{w}</div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((c, i) => {
          if (!c) return <div key={i} />;
          const isSel = c.key === selDate;
          return (
            <button
              key={i}
              disabled={!c.available}
              onClick={() => { setSelDate(c.key); setSelTime(''); }}
              className={`aspect-square rounded-lg text-sm font-medium transition-all border ${
                isSel
                  ? 'bg-accent text-charcoal-950 border-accent'
                  : c.available
                    ? 'bg-charcoal-800 text-white border-charcoal-700 hover:border-accent'
                    : 'bg-transparent text-charcoal-700 border-transparent cursor-not-allowed'
              }`}
            >
              {c.day}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      {selDate && (
        <div className="mt-5 animate-fade-in">
          <div className="flex items-center gap-1.5 mb-2.5 text-charcoal-400 text-[10px] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Pick a time — {new Date(`${selDate}T00:00:00`).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {times.map(iso => {
              const isSel = iso === selTime;
              return (
                <button
                  key={iso}
                  onClick={() => setSelTime(iso)}
                  className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                    isSel
                      ? 'bg-accent text-charcoal-950 border-accent'
                      : 'bg-charcoal-800 text-white border-charcoal-700 hover:border-accent'
                  }`}
                >
                  {fmtTime(iso)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mt-4">{error}</p>
      )}

      {/* Confirm */}
      <button
        onClick={confirmBooking}
        disabled={!selTime || booking}
        className="w-full btn-primary py-3.5 mt-5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {booking
          ? <><Loader2 className="w-4 h-4 animate-spin" /> Booking…</>
          : selTime
            ? <>Confirm {new Date(`${selDate}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {fmtTime(selTime)}</>
            : 'Select a time to book'}
      </button>
    </div>
  );
}
