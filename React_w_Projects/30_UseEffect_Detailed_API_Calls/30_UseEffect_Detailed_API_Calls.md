- UseEffect Hook In Detail
- API Calls

# React Docs

- Synchronizing with Effects:

- first time rendering --> mounting
- remove something --> unmounting

# useEffect

- The useEffect Hook allows you to perform side effects in your components.
- useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
- useEffect accepts two arguments. The second argument is optional.
  useEffect(<function>, <dependency>)
- This is not what we want. There are several ways to control when side effects run.
- We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

  /\*
  // first time rendering --> mounting
  // remove something --> unmounting
  useEffect(() => {
  const idInterval = setInterval(() => {
  console.log("videoPlaying..", id);
  }, 5000);

  return () => {
  clearInterval(idInterval);
  };
  }, [id]);
  \*/

//https://www.mockaroo.com/apis/78681
// created API
