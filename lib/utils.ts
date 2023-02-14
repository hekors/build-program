import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// method to utilize clsx across codebase
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// method to generate array for years from 2023
// to the CURRENT_YEAR
function generateYearsFromStart() {
  let years: number[] = [2023];
  let currentYear: number = new Date().getFullYear();

  while (currentYear !== 2023) {
    years.push(currentYear);
    --currentYear;
  }
  return years.sort();
}

export { cn, generateYearsFromStart };
