import React from "react";
import "./EventBubbling.css"; // Make sure to import your CSS file

const EventBubbling = () => {
  const handleDivClick = (event) => {
    // console.dir(event.target);
    const targetElement = event.target;
    const parents = [];

    // Traverse up the DOM hierarchy to collect parent names
    let currentNode = targetElement;
    while (currentNode) {
      console.dir(event.target);

      if (currentNode.classList.contains("box")) {
        parents.push(currentNode.textContent.trim());
      }
      currentNode = currentNode.parentElement;
    }

    // Reverse the array to get the correct order
    parents.reverse();

    // Join the parent names with a ">" separator
    const parentNames = parents.join(" > ");

    console.log(`Clicked on: ${parentNames}`);
  };

  return (
    <main>
      <div className="grandparent box" onClick={handleDivClick}>
        Grand Parent
        <div className="parent box" onClick={handleDivClick}>
          Parent
          <div className="child box" onClick={handleDivClick}>
            Child
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventBubbling;
