# Conditional Rendering

# Approach 1 :

let channelJSX;

- We Are Breaking JSX here Not Good Approach
- Also We cannot write if else in JSX below
- So Better lets Try Ternary operators

if (verified) {
channelJSX = <div className="channel">{channel}✅</div>;
} else {
channelJSX = <div className="channel">{channel}</div>;
}

# Appproach 2:

{/_ Conditional Rendering with Ternary _/}

- Inside JSX:

return(
{verified ? (

<div className="channel">{channel}✅</div>
) : (
<div className="channel">{channel}</div>
)}
)

# Appproach 2: Also can do if we dont want other case output

return(
{verified ? (

<div className="channel">{channel}✅</div>
) : null
})

# Appproach 3: Optimize more

return(

<div className="channel">{channel}  {verified?"✅":null }  </div>

})

# Appproach 3: Short Circuiting if false doesnt go ahead

return(

<div className="channel">{channel}  {verified && "✅" }  </div>

})

- In case of 0 and 1 numericals errors might occur as it will return 0

- used only in case of boolean outcome of verified
