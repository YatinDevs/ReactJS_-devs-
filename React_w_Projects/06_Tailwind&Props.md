# Vite :

https://vitejs.dev/guide/

# CSS tailWind :

https://tailwindcss.com/

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

- [5] Start your build process

  - npm run dev

---

- Pexels for Images:
- https://www.pexels.com/photo/holding

- DevUI.io
- We can get components readymade.

# Summary :

- Configured Tailwind.
- Used Tailwind Components.
- Handled Props.

-
