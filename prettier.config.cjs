/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"], // Tailwind needs to be listed after Astro
  tabWidth: 2,
  printWidth: 100,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
