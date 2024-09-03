import React from 'react';
import ReactDOM from 'react-dom';

// Step 1: Define the MyComponent class
class MyComponent extends React.Component {
    constructor(props) {
      super(props); // Call the constructor of React.Component
    }
  
    // Step 2: Implement the render method
    render() {
      return (
        <div>
          <h1>My First React Component!</h1> {/* The exact text */}
        </div>
      );
    }
  }
  
  // Step 3: Render the component to the DOM
  // ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

  export default MyComponent;