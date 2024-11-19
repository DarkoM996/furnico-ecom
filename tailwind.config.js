/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary_lighterShade: {
  				'50': '#FCF3E3',
  				'100': '#F2E9DA',
  				'150': '#E5DDCE',
  				'200': '#D9D1C4',
  				'300': '#CCC5B8',
  				'400': '#BFB9AD',
  				'500': '#B2ACA1'
  			},
  			primary_darkerShade: {
  				'600': '#595348',
  				'700': '#4A453C',
  				'750': '#3D3932',
  				'800': '#2F2C26',
  				'850': '#1F1D19',
  				'900': '#12110F'
  			}
  		},
  		fontFamily: {
  			serif: ["Cormorant Garamound", "serif"]
  		},
  		screens: {
  			'3xl': '1920px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
