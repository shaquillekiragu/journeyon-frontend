/**
 * Formats an ISO date string into a more human-friendly British format.
 * @param isoString e.g. "2024-11-15T09:00:00Z"
 * @returns e.g. "15 November 2024 at 09:00"
 */
export default function formatDate(isoString: string): string {
  const date = new Date(isoString);

  // Options for toLocaleString
  const options: Intl.DateTimeFormatOptions = {
    day:   '2-digit',
    month: 'long',
    year:  'numeric',
    timeZoneName: undefined
  };

  // e.g. "15 November 2024, 09:00"
  const formatted = date.toLocaleString('en-GB', options);

  // Swap the comma for " at "
  return formatted.replace(', ', ' at ');
}
