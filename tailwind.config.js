/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050912",
        panel: "#0A1224",
        panel2: "#0D1730",
        line: "#1B2947",
        blue: {
          950: "#040B1E",
          900: "#0B1B3D",
          800: "#122A5C",
          700: "#1B3D82",
          600: "#2354B8",
          500: "#3B6FE0",
        },
        cyan: {
          400: "#3FE6F0",
          300: "#7CF1F7",
        },
        mist: "#AEB9D4",
        frost: "#F4F7FD",
        ok: "#33D693",
        warn: "#F5B843",
        bad: "#F0596A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(63,230,240,0.15), 0 20px 60px -20px rgba(35,84,184,0.55)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -25px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,9,18,0) 0%, rgba(5,9,18,1) 100%)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(59,111,224,0.25) 0%, rgba(5,9,18,0) 70%)",
      },
      animation: {
        scan: "scan 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
