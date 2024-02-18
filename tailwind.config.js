/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-600": "#274C5B",
        lime: "#7EB693",
        yellow: "#F4CF00",
        "secondary-50": "#D4D4D4",
        white: "#F9F8F8",
        "green-50": "#EFF6F1",
        "secondary-500": "#525C60",
        "white-50": "#E0E0E0",
        wheat: "#D5D5D5",
        white1: "#ffff"
      },
      fontFamily: {
        tail: "Yellowtail",
        Roboto: "Roboto",
      },
      fontWeight: {
        "weight-100": "100",
        "weight-200": "200",
        "weight-300": "300",
        "weight-400": "400",
        "weight-500": "500",
        "weight-600": "600",
        "weight-700": "700",
      },
    },
  },
  plugins: [],
};
