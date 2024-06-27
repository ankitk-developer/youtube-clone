/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: 'var(--color-p1)',
        b1: 'var(--color-b1)',
        b2: 'var(--color-b2)',
        b3: 'var(--color-b3)',
        t1: 'var(--color-t1)',
        t2: 'var(--color-t2)',
        t3: 'var(--color-t3)',
        bo1: 'var(--color-bo1)',
        success1: 'var(--success-1)',
        warning1: 'var(--warning-1)',
        danger1: 'var(--danger-1)',
        login1: 'var(--login-t1)',
      },
      fontSize: {
        '8': '8px', // '8' is the custom class name and '8px' is the font size value
      },
      linearGradientColors: {
        'custom-gradient': [
          '90deg',
          '#ffae46 0%',
          '#ff9754 18.23%',
          '#ff5a7d 77.08%',
          '#ff428d 100%',
        ],
      },
    }
  },
  plugins: [],
  safelist: [
    { pattern: /(bg|text)-(warning|success|danger)(1|2)/ }
  ]
}
