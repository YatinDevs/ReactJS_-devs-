# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- Context folder
 - userContext.js
 
- Creating a Context :
 - 1 - import React
 - 2 - React.createContext() -> Inbuild Method
 - 3 - Export Context

- Created Context --> Gives Provider.
   - To use Context we Wrap our Component Inside Provider.

- Now We Create nested components and to fetch 
- To fetch inside any Component UserContext or any Context
- we use useContext hook
- and Pass created Context in it and access the Props through it.