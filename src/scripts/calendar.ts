/**
 * "Aggiungi al calendario": genera un file .ics (RFC 5545) scaricabile, del tutto lato client —
 * nessun server, nessun servizio esterno (coerente con la regola 7: niente backend). Usato dai
 * biglietti evento (data statici) e dal riepilogo di prenotazione (data inseriti dall'utente).
 *
 * Approssimazione da demo: l'ora è trattata come ora locale del visitatore, non convertita da
 * Europe/Rome. Accettabile per un file .ics dimostrativo; da rivedere se il sito diventa reale.
 */
const pad = (n: number) => String(n).padStart(2, '0');

const toStamp = (d: Date) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
const toDateOnly = (d: Date) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;
const escapeIcs = (text: string) => text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');

export interface IcsEvent {
  title: string;
  /** Data ISO AAAA-MM-GG. */
  date: string;
  /** Ora HH:MM; senza orario l'evento è trattato come giornata intera. */
  time?: string;
  durationMinutes?: number;
  description?: string;
  location?: string;
}

/** Costruisce l'href `data:text/calendar` pronto per un <a download>. */
export function buildIcsHref(ev: IcsEvent): string {
  const uid = `${ev.date}-${ev.title.replace(/\s+/g, '-').toLowerCase()}-${Math.random().toString(36).slice(2, 8)}@fairuz-demo`;
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Fairuz Demo//IT', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT', `UID:${uid}`, `DTSTAMP:${toStamp(new Date())}`];

  if (ev.time) {
    const start = new Date(`${ev.date}T${ev.time}:00`);
    const end = new Date(start.getTime() + (ev.durationMinutes ?? 120) * 60000);
    lines.push(`DTSTART:${toStamp(start)}`, `DTEND:${toStamp(end)}`);
  } else {
    const day = new Date(`${ev.date}T00:00:00`);
    const next = new Date(day.getTime() + 86400000);
    lines.push(`DTSTART;VALUE=DATE:${toDateOnly(day)}`, `DTEND;VALUE=DATE:${toDateOnly(next)}`);
  }

  lines.push(`SUMMARY:${escapeIcs(ev.title)}`);
  if (ev.description) lines.push(`DESCRIPTION:${escapeIcs(ev.description)}`);
  if (ev.location) lines.push(`LOCATION:${escapeIcs(ev.location)}`);
  lines.push('END:VEVENT', 'END:VCALENDAR');

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`;
}

/** Applica buildIcsHref() a ogni <a data-ics> statico nella pagina (es. i biglietti evento). */
export function wireIcsLinks(root: ParentNode = document) {
  for (const a of root.querySelectorAll<HTMLAnchorElement>('a[data-ics]')) {
    const { icsTitle, icsDate, icsTime, icsDesc, icsLoc, icsDuration } = a.dataset;
    if (!icsTitle || !icsDate) continue;
    a.href = buildIcsHref({
      title: icsTitle,
      date: icsDate,
      time: icsTime || undefined,
      description: icsDesc,
      location: icsLoc,
      durationMinutes: icsDuration ? Number(icsDuration) : undefined,
    });
    a.download = `${icsTitle.replace(/\s+/g, '-').toLowerCase()}.ics`;
  }
}
