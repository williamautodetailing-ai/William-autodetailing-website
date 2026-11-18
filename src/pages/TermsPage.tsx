import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME, EMAIL, PHONE } from '../constants';
import SEO from '../components/SEO';

const LAST_UPDATED = 'November 17, 2026';
const LEGAL_NAME = 'WILLIAMS AUTO DETAILING LLC';

const sections: { title: string; paragraphs?: string[]; list?: string[] }[] = [
  {
    title: 'About These Terms',
    paragraphs: [
      `These Terms apply to your use of williamautodetailing.net and to text messages sent by ${LEGAL_NAME}, doing business as ${BUSINESS_NAME}. By using the website or opting in to text messages, you agree to these Terms.`,
    ],
  },
  {
    title: 'SMS Program Terms',
    paragraphs: [
      `${LEGAL_NAME} offers two text message programs. You opt into each one separately by checking its box on our website quote form. Neither is required to get a quote or book a service.`,
    ],
    list: [
      'Appointment and service messages: appointment confirmations, reminders, scheduling updates and replies to your questions.',
      'Promotional messages: occasional offers, discounts and service announcements.',
      'Message frequency varies.',
      'Message and data rates may apply.',
      'To stop receiving messages, reply STOP to any message. You will receive one message confirming you have been unsubscribed, and no further messages after that.',
      `For help, reply HELP to any message, call ${PHONE} or email ${EMAIL}.`,
      'Carriers are not liable for delayed or undelivered messages.',
      'You must be 18 or older and the account holder, or have the account holder’s permission, to opt in.',
    ],
  },
  {
    title: 'Your Privacy',
    paragraphs: [
      'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are not shared with any third parties. See our Privacy Policy for how we handle your information.',
    ],
  },
  {
    title: 'Quotes and Bookings',
    paragraphs: [
      'Prices shown on the website and quotes requested through it are estimates based on the information you provide. Final pricing is confirmed with you before your appointment. A travel fee may apply to locations more than 15 miles from Doral, FL.',
    ],
  },
  {
    title: 'Changes to These Terms',
    paragraphs: [
      'We may update these Terms from time to time. When we do, we will change the "Last updated" date at the top of this page.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 pt-24 md:pt-32 pb-20">
      <SEO
        title={`Terms & SMS Terms | ${BUSINESS_NAME}`}
        description={`Website terms and text message (SMS) program terms for ${BUSINESS_NAME}, including message frequency, opt-out and help instructions.`}
        canonical="/terms/"
      />
      <div className="container-custom max-w-4xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-5">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Terms &amp; SMS Terms
          </h1>
          <p className="text-charcoal-400 text-sm">
            Last updated: <span className="text-charcoal-300">{LAST_UPDATED}</span>
          </p>
        </div>

        <div className="border-t border-charcoal-800 mb-12" />

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={section.title}>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-5 flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="pl-10 space-y-4">
                {section.paragraphs?.map((p) => (
                  <p key={p} className="text-charcoal-400 leading-relaxed">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-charcoal-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.title === 'Your Privacy' && (
                  <Link to="/privacy-policy/" className="inline-block text-accent hover:text-accent-light transition-colors text-sm">
                    Read the Privacy Policy →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal-800">
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
