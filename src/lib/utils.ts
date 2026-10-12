import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}


export function formatDate(dateStr: string): string {
  if (dateStr.toLowerCase() === 'present') return 'Present';
  try {
    const [year, month] = dateStr.split('-');
    if (!month) return year;
    const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/**
 * Simulates a delay for async mock handlers
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
