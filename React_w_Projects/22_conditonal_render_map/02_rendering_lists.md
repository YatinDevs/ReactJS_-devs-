# Rendering Lists

- You will often want to display multiple similar components from a collection of data.
- You can use the JavaScript array methods to manipulate an array of data. On this page, you’ll use filter() and map() with React to filter and transform your array of data into an array of components.

# To generate Random Ids:

- crypto.randomUUID

# Where to get your key

- Different sources of data provide different sources of keys:

- Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.

- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

#Rules of keys

- Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
- Keys must not change or that defeats their purpose! Don’t generate them while rendering.

# Recap

On this page you learned:

- How to move data out of components and into data structures like arrays and objects.
- How to generate sets of similar components with JavaScript’s map().
- How to create arrays of filtered items with JavaScript’s filter().
- Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.
