'use client';

import { FormEvent, useState } from 'react';

const whatsappNumber = '918319185631';

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const interest = String(data.get('interest') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const text = `Hello Surrendra, I am ${name || 'interested in Neelbad Road'}${phone ? ` (${phone})` : ''}.\nInterest: ${interest || 'Neelbad Road'}${message ? `\n\n${message}` : ''}`;
    setSubmitted(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return <form className="enquiry-form" onSubmit={submit}>
    <label>Your name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
    <label>Phone number<input name="phone" required type="tel" inputMode="tel" placeholder="Your phone number" autoComplete="tel" /></label>
    <label>What are you considering?<select name="interest" defaultValue="Neelbad residential plot"><option>Neelbad residential plot</option><option>A particular plot position</option><option>Site visit</option><option>Documentation query</option></select></label>
    <label className="form-wide">Your message<textarea name="message" rows={3} placeholder="Tell us what you are looking for" /></label>
    <button className="button button-gold" type="submit">{submitted ? 'Open WhatsApp again →' : 'Send enquiry on WhatsApp →'}</button>
    <p className="form-note">Your enquiry opens in WhatsApp. Availability and documentation are confirmed directly with the team.</p>
  </form>;
}
