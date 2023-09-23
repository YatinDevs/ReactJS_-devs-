# Passing Props to a Component :

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

Passing props to a component

You can give Avatar some props in two steps.

# Step 1: Pass props to the child component

export default function Profile() {
return (
<Avatar
person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
size={100}
/>
);
}

Now you can read these props inside the Avatar component.

# Step 2: Read props inside the child component

You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

function Avatar({ person, size }) {
// person and size are available here
}

Add some logic to Avatar that uses the person and size props for rendering, and you’re done.

Now you can configure Avatar to render in many different ways with different props. Try tweaking the values!
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
return (
<img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
);
}

export default function Profile() {
return (

<div>
<Avatar
size={100}
person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
/>
<Avatar
size={80}
person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
/>
<Avatar
size={50}
person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
/>
</div>
);
}

# Recap

- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the function Avatar({ person, size }) destructuring syntax.
- You can specify a default value like size = 100, which is used for missing and undefined props.
- You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
- Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to set state.
