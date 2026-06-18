import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME, EMAIL, PHONE } from '../constants';

const LAST_UPDATED = 'June 17, 2026';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide Directly',
        body: `When you request a quote, book a service, or contact us, we collect information such as your name, phone number, email address, service address, and vehicle details (make, model, year, and condition). This information is necessary to schedule and perform our detailing services.`,
      },
      {
        subtitle: 'Information Collected Automatically',
        body: `When you visit our website, we may automatically collect certain technical information, including your IP address, browser type, referring URL, pages visited, and the date and time of your visit. This data is collected through standard web analytics tools to help us understand how visitors use our site.`,
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: null,
        body: `We use the information we collect for the following purposes:`,
        list: [
          'To schedule, confirm, and perform your auto detailing appointment',
          'To communicate with you about your booking, including reminders and follow-ups',
          'To send you promotional offers and updates about our services (you may opt out at any time)',
          'To process payments and maintain accurate billing records',
          'To improve our website, services, and customer experience',
          'To respond to your inquiries and provide customer support',
          'To comply with applicable laws and protect our legal rights',
        ],
      },
    ],
  },
  {
    title: 'How We Share Your Information',
    content: [
      {
        subtitle: null,
        body: `We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:`,
        list: [
          'Service Providers: We use third-party tools such as our booking platform (Urable) to manage appointments. These providers are bound by confidentiality obligations and may only use your data to perform services on our behalf.',
          'Legal Requirements: We may disclose your information if required by law, court order, or governmental authority.',
          'Business Transfers: In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of that transaction.',
          'With Your Consent: We may share information for any other purpose with your explicit consent.',
        ],
      },
    ],
  },
  {
    title: 'Data Retention',
    content: [
      {
        subtitle: null,
        body: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Customer records are typically retained for up to three (3) years following your last service, after which they are securely deleted unless a longer retention period is required by law.`,
      },
    ],
  },
  {
    title: 'Data Security',
    content: [
      {
        subtitle: null,
        body: `We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.`,
      },
    ],
  },
  {
    title: 'Your Rights & Choices',
    content: [
      {
        subtitle: null,
        body: `You have the following rights regarding your personal information:`,
        list: [
          'Access: You may request a copy of the personal information we hold about you.',
          'Correction: You may ask us to correct inaccurate or incomplete information.',
          'Deletion: You may request that we delete your personal information, subject to certain legal exceptions.',
          'Opt-Out: You may opt out of marketing communications at any time by replying "STOP" to any text message, clicking "unsubscribe" in any email, or contacting us directly.',
        ],
      },
    ],
  },
  {
    title: 'Cookies & Tracking',
    content: [
      {
        subtitle: null,
        body: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of our website.`,
      },
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      {
        subtitle: null,
        body: `Our website may contain links to third-party websites, including our booking platform and social media profiles. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.`,
      },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        subtitle: null,
        body: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.`,
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      {
        subtitle: null,
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
      },
    ],
  },
  {
    title: 'Contact Us',
    content: [
      {
        subtitle: null,
        body: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:`,
        contact: true,
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 pt-24 md:pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-5">
            <Shield className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-charcoal-400 text-sm">
            Last updated: <span className="text-charcoal-300">{LAST_UPDATED}</span>
          </p>
          <p className="text-charcoal-400 mt-4 leading-relaxed max-w-2xl">
            {BUSINESS_NAME} ("we," "us," or "our") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or use our mobile auto detailing services.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-800 mb-12" />

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={section.title} className="scroll-mt-32" id={`section-${i}`}>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-5 flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {section.title}
              </h2>

              <div className="pl-10 space-y-4">
                {section.content.map((block, j) => (
                  <div key={j}>
                    {block.subtitle && (
                      <h3 className="text-white font-semibold mb-2">{block.subtitle}</h3>
                    )}
                    {block.body && (
                      <p className="text-charcoal-400 leading-relaxed">{block.body}</p>
                    )}
                    {'list' in block && block.list && (
                      <ul className="mt-3 space-y-2">
                        {block.list.map((item, k) => (
                          <li key={k} className="flex items-start gap-2.5 text-charcoal-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {'contact' in block && block.contact && (
                      <div className="mt-4 bg-charcoal-900 border border-charcoal-700 rounded-2xl p-5 space-y-3">
                        <div>
                          <p className="text-white font-semibold">{BUSINESS_NAME}</p>
                          <p className="text-charcoal-500 text-sm">Miami-Dade County, Florida</p>
                        </div>
                        <a
                          href={`mailto:${EMAIL}`}
                          className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm"
                        >
                          {EMAIL}
                        </a>
                        <a
                          href={`tel:${PHONE.replace(/\D/g, '')}`}
                          className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm"
                        >
                          {PHONE}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {i < sections.length - 1 && (
                <div className="border-t border-charcoal-800/60 mt-10" />
              )}
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-charcoal-800">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-charcoal-400 hover:text-accent transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
