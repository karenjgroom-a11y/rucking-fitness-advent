// Uses Netlify server time, converted to the UK calendar date (GMT/BST).
function getCalendarDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now);
  const p = Object.fromEntries(parts.map(x => [x.type, x.value]));
  const year = Number(p.year), month = Number(p.month), day = Number(p.day);
  const preview = year < 2026 || (year === 2026 && month < 12);
  const unlocked = preview ? 1 : year === 2026 && month === 12 ? Math.min(day, 24) : 24;
  return { year: 2026, day: unlocked, preview };
}
exports.handler = async () => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store, max-age=0' },
  body: JSON.stringify(getCalendarDate())
});
exports.getCalendarDate = getCalendarDate;
