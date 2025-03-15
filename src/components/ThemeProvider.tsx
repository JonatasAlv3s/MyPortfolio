"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function MyThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>; // Evita erro de hidratação
    }

    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
