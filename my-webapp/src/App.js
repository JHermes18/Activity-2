import React from 'react';
import Button from './Button';
import TextField from './TextField';
import H2 from './H2';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <H2 text="Activity 2 Part 2" />

      <TextField id="textfield1" classname="shared-textfield" background="white" />
      <TextField id="textfield2" classname="shared-textfield" background="white" />
      <TextField id="textfield3" background="green" />
      <TextField id="textfield4" background="green" />

      <div className="image-container">
        <img src="cite_logo.png" alt="CITE Logo" className="circular-image" />
        <img src="cite_logo.png" alt="CITE Logo" className="circular-image" />
        <img src="image3.png" alt="Image 3" className="square-rounded-image" />
        <img src="image4.png" alt="Image 4" className="square-rounded-image" />
      </div>

      <div className="button-container">
        <Button background="red" text="Cancel" />
        <Button background="blue" text="Submit" />
      </div>
    </div>
  );
};

export default App;