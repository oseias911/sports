/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#EEEEEE",
      backgroundSidebar: "#F1F1F1",
      boderSidebar: "#D3D3D3",
      backgroundNavbar: "#001E28",
      navbarHover: "#0F2D37",
      color: "#001E28",
      color_2: "#E2E5E7",
      hover: "#E2E5E7",
    },
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    maxWidth: {
      maxWidthSidebar: "200px",
      maxWidthContent: "1000px",
      max: "500px",
    },
  },
  plugins: [],
};
