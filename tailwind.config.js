/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      inset: {
        small: "var(--sm-space)",
        medium: "var(--md-space)",
        large: "var(--lg-space)",
      },
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primaryLight)",
        primaryDark: "var(--primaryDark)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondaryLight)",
      },
      padding: {
        xsmall: "var(--xs-space)",
        small: "var(--sm-space)",
        medium: "var(--md-space)",
        large: "var(--lg-space)",
        xlarge: "var(--xlg-space)",
      },
      margin: {
        xsmall: "var(--xs-space)",
        small: "var(--sm-space)",
        medium: "var(--md-space)",
        large: "var(--lg-space)",
      },
    },
  },
  plugins: [],
};
