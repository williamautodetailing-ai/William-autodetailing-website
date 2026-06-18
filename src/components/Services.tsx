import { useState } from 'react';
import { Check, Minus, Clock, Star, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages, detailComparisonRows } from '../data/packages';
import { useLeadModal } from '../context/LeadModalContext';

const mainPackages = packages.filter(p => !p.isCeramic);
const ceramicPackages = packages.filter(p => p.isCeramic && p.id !== 'windshield');

type GroupedRows<T> = { name: string; rows: T[] }[];
function groupRows<T extends { group?: string }>(rows: T[]): GroupedRows<T> {
  const groups: GroupedRows<T> = [];
  rows.forEach((row) => {
    const name = row.group ?? '';
    const existing = groups.find((g) => g.name === name);
    if (existing) existing.rows.push(row);
    else groups.push({ name, rows: [row] });
  });
  return groups;
}

const groups = groupRows(detailComparisonRows);

export default function Services() {
  const { openModal } = useLeadModal();
  const [mobilePkgIdx, setMobilePkgIdx] = useState(1);

  return (
    <section id="services" className="section-padding bg-charcoal-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_70%)]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Detailing <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
            Professional results delivered to your door. Every package covers interior and exterior.
          </p>
        </div>

        {/* ── MOBILE: one-package-at-a-time card view ── */}
        <div className="sm:hidden mb-8">
          {/* Tab selector */}
          <div className="flex bg-charcoal-800/60 rounded-xl p-1 border border-charcoal-700 gap-1 mb-4">
            {mainPackages.map((pkg, i) => (
              <button
                key={pkg.id}
                onClick={() => setMobilePkgIdx(i)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all leading-tight text-center ${
                  mobilePkgIdx === i
                    ? 'bg-charcoal-900 text-white border border-charcoal-600 shadow'
                    : 'text-charcoal-400 hover:text-charcoal-200'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          {mainPackages.map((pkg, pkgIdx) => {
            const isPopular = !!pkg.popular;
            if (pkgIdx !== mobilePkgIdx) return null;
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border p-5 ${
                  isPopular
                    ? 'border-accent/50 bg-accent/[0.04]'
                    : 'border-charcoal-700 bg-charcoal-800/40'
                }`}
              >
                {isPopular && (
                  <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-charcoal-800 border border-accent/50 rounded-full">
                    <Star className="w-3 h-3 text-accent fill-accent" />
                    <span className="text-accent text-xs font-bold tracking-wider">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-xl text-white mb-1">{pkg.name}</h3>
                <p className="text-charcoal-300 text-sm mb-4">{pkg.tagline}</p>

                {pkg.duration && (
                  <div className="flex items-center gap-1.5 text-charcoal-300 text-sm mb-4">
                    <Clock className="w-4 h-4 text-accent" />
                    {pkg.duration}
                  </div>
                )}

                <div className="space-y-3 mb-5">
                  {groups.map((group) => (
                    <div key={group.name}>
                      <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-1.5 mt-2">{group.name}</p>
                      <div className="space-y-1.5">
                        {group.rows.map((row) => {
                          const cols = [row.signature, row.pristine, row.perfect];
                          const included = cols[pkgIdx];
                          return (
                            <div key={row.label} className="flex items-center gap-2">
                              {included ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <Minus className="w-3.5 h-3.5 text-charcoal-700 flex-shrink-0" />
                              )}
                              <span className={`text-sm ${included ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
                                {row.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal(pkg.name)}
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                    isPopular
                      ? 'bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20'
                      : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                  }`}
                >
                  Book {pkg.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: comparison table ── */}
        <div className="hidden sm:block overflow-x-auto -mx-4 sm:mx-0 custom-scrollbar mb-8">
          <div className="min-w-[620px] px-4 sm:px-0">
            {/* Column headers */}
            <div className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))] pt-6">
              <div />
              {mainPackages.map((pkg) => {
                const isPopular = !!pkg.popular;
                return (
                  <div
                    key={pkg.id}
                    className={`relative flex flex-col items-center text-center px-3 pt-8 pb-5 rounded-t-2xl ${
                      isPopular
                        ? 'bg-gradient-to-b from-accent/8 to-charcoal-800 border-x-2 border-t-2 border-accent/50'
                        : 'bg-charcoal-800/60 border-x border-t border-charcoal-700'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-charcoal-800 border border-accent/50 text-accent text-xs font-bold rounded-full whitespace-nowrap">
                        <Star className="w-3 h-3 fill-accent" />
                        MOST POPULAR
                      </div>
                    )}
                    <p className="font-display font-bold text-base md:text-lg text-white mb-1">{pkg.name}</p>
                    <p className="text-charcoal-400 text-xs mb-3 leading-snug">{pkg.tagline}</p>
                    {pkg.duration && (
                      <div className="flex items-center gap-1 text-charcoal-400 text-xs mb-3">
                        <Clock className="w-3 h-3 text-accent" />
                        {pkg.duration}
                      </div>
                    )}
                    <button
                      onClick={() => openModal(pkg.name)}
                      className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                        isPopular
                          ? 'bg-accent text-charcoal-950 hover:bg-accent-light shadow-md shadow-accent/20'
                          : 'bg-charcoal-700 text-white hover:bg-charcoal-600'
                      }`}
                    >
                      Book
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Feature rows */}
            {groups.map((group, gi) => (
              <div key={group.name}>
                <div className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]">
                  <div className="py-2.5 px-3 bg-charcoal-800 border-y border-l border-charcoal-700">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">{group.name}</span>
                  </div>
                  {mainPackages.map((pkg) => {
                    const isPopular = !!pkg.popular;
                    return (
                      <div
                        key={pkg.id}
                        className={`py-2.5 border-y ${
                          isPopular
                            ? 'bg-charcoal-800/80 border-x-2 border-accent/50'
                            : 'bg-charcoal-800/40 border-x border-charcoal-700'
                        }`}
                      />
                    );
                  })}
                </div>

                {group.rows.map((row, ri) => {
                  const isLastInGroup = ri === group.rows.length - 1;
                  const isLastGroup = gi === groups.length - 1;
                  const isVeryLast = isLastInGroup && isLastGroup;
                  const cols = [row.signature, row.pristine, row.perfect];
                  return (
                    <div key={row.label} className="grid grid-cols-[minmax(170px,1fr)_repeat(3,minmax(0,1fr))]">
                      <div
                        className={`flex items-center px-3 py-3 bg-charcoal-950/60 border-l border-b border-charcoal-700/60 ${
                          isVeryLast ? 'rounded-bl-xl' : ''
                        }`}
                      >
                        <span className="text-sm text-charcoal-300">{row.label}</span>
                      </div>
                      {cols.map((included, ci) => {
                        const isPopular = !!mainPackages[ci]?.popular;
                        const isLastCol = ci === cols.length - 1;
                        return (
                          <div
                            key={ci}
                            className={`flex items-center justify-center py-3 border-b ${
                              isPopular
                                ? 'bg-accent/[0.03] border-x-2 border-accent/50'
                                : 'bg-charcoal-900/40 border-x border-charcoal-700/60'
                            } ${isVeryLast && isLastCol ? 'rounded-br-xl' : ''}`}
                          >
                            {included ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Minus className="w-4 h-4 text-charcoal-700" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Ceramic coatings teaser */}
        <div className="bg-charcoal-800/40 border border-charcoal-700/60 rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-semibold mb-3">
                CERAMIC COATINGS
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Long-Term Paint Protection</h3>
              <p className="text-charcoal-300 text-sm max-w-lg">
                Our ceramic coating packages include full prep — detail, clay bar, iron removal, and polish — before applying a 2–5 year professional-grade coating.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {ceramicPackages.map(pkg => (
                  <span key={pkg.id} className="px-3 py-1 bg-charcoal-700 border border-charcoal-600 rounded-full text-xs text-charcoal-300">
                    {pkg.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <button onClick={() => openModal('Tier 1 Ceramic Coating')} className="btn-primary text-sm px-5 py-2.5">
                Get a Quote
              </button>
              <Link to="/ceramic-coating" className="btn-secondary text-sm px-5 py-2.5 text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Which package guidance */}
        <div className="bg-charcoal-800/40 border border-charcoal-700/60 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-5">
            <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">Not sure which package is right for you?</p>
              <p className="text-charcoal-300 text-sm">Pick the option that matches your situation — we'll confirm everything when we reach out.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {mainPackages.filter(p => p.guidance).map((pkg) => (
              <div key={pkg.id} className="bg-charcoal-700/50 rounded-xl p-4">
                <p className="font-semibold text-white text-sm mb-1">{pkg.name}</p>
                <p className="text-charcoal-300 text-xs leading-relaxed">{pkg.guidance}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-charcoal-500 text-sm mt-6">
          Every package covers interior and exterior — pricing confirmed when you book.{' '}
          <button onClick={() => openModal()} className="text-accent hover:underline">
            Request a quote →
          </button>
        </p>
      </div>
    </section>
  );
}
