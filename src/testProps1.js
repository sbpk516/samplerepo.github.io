import React, { useState } from 'react';

export default class Props1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Render Props Example</h1>
        <SampleRenderProps />
        <ToggleButton />
      </div>
    );
  }
}

// Child component using render props
class RenderPropsComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>I am a Child Component</h2>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

// Parent component passing render props to the child
class SampleRenderProps extends React.Component {
  render() {
    return (
    //   <RenderPropsComponent
    //     render={() => (
    //       <div>
    //         <h3>I am coming from render props</h3>
    //       </div>
    //     )}
    //   />
    <RenderPropsComponent name="Balaji Sachidanandam1" />
    );
  }
}


function ToggleButton() {
  // Declare a state variable called "isOn" with the initial value of "false"
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
       <p>Test message</ p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

// export default ToggleButton;