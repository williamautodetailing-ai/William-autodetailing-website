// SMS consent wording for A2P 10DLC. Shared by every form that collects a phone number,
// so the text carriers review is identical everywhere. Change it here only.
export const SMS_SENDER = 'WILLIAMS AUTO DETAILING LLC';

const DISCLOSURE = 'Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.';

export const SMS_SERVICE_CONSENT = `I agree to receive appointment and service text messages from ${SMS_SENDER} at the number provided. ${DISCLOSURE}`;

export const SMS_MARKETING_CONSENT = `I agree to receive promotional text messages, such as offers and service announcements, from ${SMS_SENDER} at the number provided. ${DISCLOSURE}`;

/** Line saved with the lead as the record of what the person agreed to, and when. */
export const smsConsentRecord = (source: string, service: boolean, marketing: boolean) =>
  `SMS consent (${source}, ${new Date().toISOString()}): service ${service ? 'YES' : 'no'}, marketing ${marketing ? 'YES' : 'no'}`;
