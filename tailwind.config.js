/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            keyframes: {
                slideInFade: {
                    'to': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                fadeInUp: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                slideInRight: {
                    'from': {
                        transform: 'translateX(100%)',
                        opacity: '0'
                    },
                    'to': {
                        transform: 'translateX(0)',
                        opacity: '1'
                    }
                },
                fadeIn: {
                    'from': {
                        opacity: '0'
                    },
                    'to': {
                        opacity: '1'
                    }
                },
                bounceIn: {
                    '0%': {
                        transform: 'scale(0.3) translateX(100%)',
                        opacity: '0'
                    },
                    '50%': {
                        transform: 'scale(1.05) translateX(-5%)'
                    },
                    '70%': {
                        transform: 'scale(0.9) translateX(2%)'
                    },
                    '100%': {
                        transform: 'scale(1) translateX(0)',
                        opacity: '1'
                    }
                }
            },
            animation: {
                'slide-in-fade': 'slideInFade 0.4s ease forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                'fade-in': 'fadeIn 0.3s ease-out',
                'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'fade-in-delay-1': 'fadeIn 0.4s ease-out 0.1s both',
                'fade-in-delay-2': 'fadeIn 0.4s ease-out 0.2s both',
                'fade-in-delay-3': 'fadeIn 0.4s ease-out 0.3s both',
                'fade-in-delay-4': 'fadeIn 0.4s ease-out 0.4s both',
                'fade-in-delay-5': 'fadeIn 0.4s ease-out 0.5s both'
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
