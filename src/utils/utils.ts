// src/lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Função auxiliar para combinar classes CSS com Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
