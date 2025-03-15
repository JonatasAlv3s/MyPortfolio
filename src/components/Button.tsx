// components/ui/button.tsx
import { cn } from "src/utils/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
    return (
        <button className={cn("px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700", className)} {...props} />
    );
}
