# Importing and Exporting Components

The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.

# You can move a component in three steps:

- Make a new JS file to put the components in.
- Export your function component from that file (using either default or named exports).
- Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

# Default vs named exports

- There are two primary ways to export values with JavaScript: default exports and named exports. So far, our examples have only used default exports. But you can use one or both of them in the same file.

# Note :A file can have no more than one default export, but it can have as many named exports as you like.

- People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values

- A file can only have one default export, but it can have numerous named exports!

# Note : To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file. Do what works best for you!

# Recap

On this page you learned:

- What a root component file is
- How to import and export a component
- When and how to use default and named imports and exports
- How to export multiple components from the same file

# Challenge :

- Split the components further
<!-- Profile.js -->

export function Profile() {
return (
<img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
);
}

<!-- Gallery.js -->

import Profile from './Profile.js';
export default function Gallery() {
return (

<section>
<h1>Amazing scientists</h1>
<Profile />
<Profile />
<Profile />
</section>
);
}

<!-- App.js -->

import Gallery from './Gallery.js';

export default function App() {
return (

<div>
<Gallery />
</div>
);
}
