/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightsteelblue: "rgba(184, 197, 214, 0.2)",
        darkblue: "#3a0ca3",
        darkslategray: {
          "100": "#2d2d39",
          "200": "rgba(45, 45, 57, 0.51)",
        },
        deeppink: "#f72585",
        khaki: "#dad56d",
        beige: "#f7f6df",
        gainsboro: "#d9d9d9",
        skyblue: "#4cc9f0",
        gray: "rgba(255, 255, 255, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "russo-one": "'Russo One'",
      },
      borderRadius: {
        "14xl-3": "33.3px",
        "31xl": "50px",
        "81xl": "100px",
        xl: "20px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "45xl": "64px",
      "13xl": "32px",
      "17xl": "36px",
      "29xl": "48px",
      "77xl": "96px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
