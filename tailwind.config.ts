/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class", // Ativa o modo dark com classes
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './styles/**/*.{css}' // Incluindo estilos globais
    ],
    theme: {
        extend: {
            colors: {
                'mint-700': 'var(--color-mint-700)',
                'mint-800': 'var(--color-mint-800)',
                'mint-900': 'var(--color-mint-900)',
            },
        },
    },
    plugins: [],
};

export default config;
