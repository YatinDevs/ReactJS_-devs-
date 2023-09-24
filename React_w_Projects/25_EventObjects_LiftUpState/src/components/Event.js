export default function Event() {
  return (
    <>
      <div>
        <h4>What is an event flow in JavaScript?</h4>
        <p>
          So, event flow in JavaScript is an order in which the element is
          received. That is when we target any element which is nested within
          various parent elements. So as we click on it, there can be two types
          of two ways of event flow that is top to bottom and bottom to top that
          is event capturing and event bubbling respectively. So whenever we
          click any element, so firstly the other parent elements are targeted
          starting from the top that is window object and it comes
          hierarchically to the various inner child elements and reaches the
          target and this flow is called the event capturing which is from top
          to bottom.
        </p>
      </div>
      <div>
        <h4>What is event bubbling in JavaScript?</h4>
        <p>
          {" "}
          So in JavaScript, there is a concept called event flow. So in event
          flow concept, it is an order in which the triggered element is
          received on the web page. So if the triggered element is nested in
          various other elements. So there are two ways of event flow, which are
          the top to bottom, that is event capturing and bottom to top, that is
          the event bubbling, which we are going to discuss. So in event
          bubbling, let's say you click on the targeted element. So here the
          event propagation first triggers the innermost target and the targeted
          element then successfully triggers the other parent elements. And in
          the same way, the nesting hierarchy continues until we reach the
          outermost DOM element, that is document object model element. So this
          is the event bubbling.
        </p>
      </div>
      <div>
        <h4>What is event capturing in JavaScript?</h4>
        <p>
          {" "}
          So, in JavaScript, there is a concept called event flow, in which the
          order in which the targeted object is received is looked into. There
          are two ways, it is top to bottom, which is event capturing and bottom
          to top, which is event bubbling. So in event capturing, the targeted
          element is received from top to bottom, that is from the window
          outermost DOM element. Then we target its children and this continues
          until there are various nested elements to reach the targeted element.
          And this concept is, this flow of event is called event capturing.
        </p>
      </div>
      <div>
        <h4> What is an event delegation in JavaScript?</h4>
        <p>
          In JavaScript, the event capturing and event bubbling helps like
          allows us to implement the most powerful event handling pattern, which
          is the event delegation. So in event delegation, it is a technique of
          handling an event, where for listening the event, we target directly
          the parent element instead of selecting each element one by one which
          are nested within each other. So the targeted parent then handles when
          we add the event listener to it, it handles all the event inside it
          and as we click on any of its targeted element, the targeted property
          is returned with the event bubbling.
        </p>
      </div>
    </>
  );
}
