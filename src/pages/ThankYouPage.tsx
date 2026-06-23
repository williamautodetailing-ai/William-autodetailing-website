import { useSearchParams } from 'react-router-dom';
import BookingStep from '../components/BookingStep';
import { packages } from '../data/packages';
import useDocumentMeta from '../hooks/useDocumentMeta';

/**
 * Landing page for the personalized booking link GHL texts the lead, e.g.
 *   /thank-you?fname=W&package=Pristine%20Detail&estimate=300&vehicle=Sedan%20%2F%20Coupe
 * Renders the same "Lock In Your Spot" screen as the on-site wizard, prefilled.
 */
export default function ThankYouPage() {
  const [params] = useSearchParams();

  useDocumentMeta({
    title: "Book Your Appointment | William's Auto Detailing",
    description: 'Lock in your detailing appointment.',
    canonical: '/thank-you',
  });

  const firstName = params.get('fname') || params.get('first_name') || '';
  const email = params.get('email') || '';
  const phone = params.get('phone') || '';
  const packageName = params.get('package') || '';
  const service = params.get('service') || '';
  const vehicle = params.get('vehicle') || '';
  const estimateRaw = params.get('estimate');
  const estimate = estimateRaw ? Number(estimateRaw) : undefined;

  // Best-effort lookup of the "what's included" list by package name
  const matched = packages.find(
    p => p.name.toLowerCase() === packageName.toLowerCase() || p.id === packageName.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-charcoal-950 pt-28 md:pt-36 pb-16">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-charcoal-900 border border-charcoal-700 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
          <BookingStep
            firstName={firstName}
            email={email}
            phone={phone}
            packageName={matched?.name || packageName}
            service={service}
            vehicle={vehicle}
            estimate={Number.isFinite(estimate) ? estimate : undefined}
            features={matched?.features ?? []}
          />
        </div>
      </div>
    </main>
  );
}
