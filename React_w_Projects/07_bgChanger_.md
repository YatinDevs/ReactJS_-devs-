# [1] Create App with Vite:

- Creating React app with help of Vite :
- npm create vite@latest
- cd 07_bgChanger
- npm install
- npm run dev --> start project app

- Clean React Apps and Post Heading :
- Only Keep Necessary files in both Vite and Create-react-app.

# [2] CSS tailwind Config :

- [1] install tailwind css with vite
  https://tailwindcss.com/docs/guides/vite

- [2]npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

- [3]Configure your template paths

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

- searches into index.html and src files our css tailwind config

- [4]Add the Tailwind directives to your CSS
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
