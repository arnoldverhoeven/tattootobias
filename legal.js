/* Tattoo Tobias — legal identity & booking rules. ONE place to fill in; used by index.html (footer), privacy.html and terms.html.
   Leave a field empty ('') and the matching line is simply not shown. */
window.LEGAL = {
  brand:        'Tattoo Tobias',
  legalName:    'Tobias Debruyn',                     // eenmanszaak, naam zoals in de KBO
  address:      'Godtsstraat 19, 2140 Borgerhout (Antwerpen), België',
  kbo:          '0865.142.010',
  vat:          '',                                   // e.g. 'BE 0123.456.789' — leave '' if not VAT-registered (vrijgesteld)
  email:        'hello@tattootobias.com',
  phone:        '',                                   // e.g. '+32 4xx xx xx xx'
  instagram:    'https://www.instagram.com/tattootobias',
  /* booking rules — must match what Tobias actually does */
  deposit:      '€50',                                // deposit asked after confirmation
  holdDays:     7,                                    // a request holds its slot this many days (same as Studio admin → Availability → Rules)
  cancelHours:  48,                                   // free reschedule/cancel up to this many hours before the appointment
  touchupMonths: 3,                                   // free touch-up within this many months, when aftercare was followed
  minAge:       18,
  payment:      'cash, Payconiq or bank card',        // how clients can pay on the day
  retainRequestsMonths: 6,                            // declined/expired requests are deleted after this many months
  retainClientsYears:   3,                            // appointment history (for touch-ups/questions) kept this many years
  updated:      '8 October 2026',                     // date of the last change to these texts (EN)
  updatedNl:    '8 oktober 2026'
};
