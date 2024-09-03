

import React, {useState} from 'react';
import Welcome from './Welcome';
import Page from './Composition';

function Greeting() {
    const [message, setMessage] = useState("Greeting");
    const element= (
    <div className="container">   
    <h1 className="mainheader">Hello World this is first message from react</h1>
    {/****This is the commented line****************************/}
    <p className="Description">This is the paragraph elemenet text</p>
    {/*this is the second commentf line*/}
    {/*This si the third commented line*/}
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>{message}</li>
    </ul>
        {/* const image = <img src="image.jpg" alt="Image"/>; */}
        const breakpoint = <br />;
        const inputfield = <input type="text" placeholder="enter your text field"/>;
        <Welcome/>
        <Page/>
    </div>

    )
    return element;
}


export default Greeting;