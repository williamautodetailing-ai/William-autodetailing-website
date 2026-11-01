// Maintenance Club plans — shared by the Maintenance Club page and the booking form.
// Prices are per maintenance visit.

export interface MaintenancePlan {
  id: string;
  name: string;
  frequency: string;
  sedan: number;
  suv: number;
  tagline: string;
  popular?: boolean;
}

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'weekly',
    name: 'Weekly',
    frequency: 'Every week',
    sedan: 75,
    suv: 95,
    tagline: 'For daily drivers and show cars that always need to look perfect.',
  },
  {
    id: 'biweekly',
    name: 'Bi-Weekly',
    frequency: 'Every 2 weeks',
    sedan: 100,
    suv: 125,
    tagline: 'The sweet spot — your car never has time to get dirty.',
    popular: true,
  },
  {
    id: 'monthly',
    name: 'Monthly',
    frequency: 'Once a month',
    sedan: 125,
    suv: 145,
    tagline: 'Keep that freshly detailed look with a monthly reset.',
  },
];

/** The name passed to openModal() when someone joins a plan */
export const maintenancePlanBookingName = (plan: MaintenancePlan) => `Maintenance Club — ${plan.name}`;
