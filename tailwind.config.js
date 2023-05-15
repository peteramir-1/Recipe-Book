/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            top: "-100vh",
            opacity: 0,
          },
          "1%": {
            top: "1.5rem",
            opacity: 0,
          },
          "100%": {
            top: "1.5rem",
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            top: "1.5rem",
            opacity: 1,
          },
          "99%": {
            top: "1.5rem",
            opacity: 0,
          },
          "100%": {
            top: "-100vh",
            opacity: 0
          },
        },
        "swipe-up-out": {
          "0%": {
            top: "0rem",
          },
          "100%": {
            top: "-100vh",
          },
        },
        "swipe-up-in": {
          "0%": {
            top: "-100vh",
          },
          "100%": {
            top: "0rem",
          },
        },
      },
      animation: {
        fade_in: "fade-in 200ms linear forwards",
        fade_out: "fade-out 200ms linear forwards",
        swipe_up_in: "swipe-up-in 500ms ease-in-out forwards",
        swipe_up_out: "swipe-up-out 500ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
