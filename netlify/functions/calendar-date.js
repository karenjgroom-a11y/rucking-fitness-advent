// Authoritative Europe/London calendar date. Do not cache this response.
exports.handler = async () => {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date()).filter(p => p.type !== 'literal').map(p => [p.type, Number(p.value)]));
  const { year, month, day } = parts;
  const preview = year < 2026 || (year === 2026 && month < 12);
  const available = preview ? 1 : year === 2026 && month === 12 ? Math.min(day, 24) : year > 2026 ? 24 : 0;
  return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store, max-age=0' },
    body: JSON.stringify({ year: 2026, day: available, preview }) };
};
