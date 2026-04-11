import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates a unique 6-digit order number using only digits 1-9.
 */
export function generateOrderNumber(): string {
  let result = "";
  const digits = "123456789";
  for (let i = 0; i < 6; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return result;
}
