import React from 'react';
import './styles.css';

const TextField = ({ id, classname, background }) => {
  let textFieldClass = `text-field ${background === 'green' ? 'green' : ''}`;

  if (classname === 'shared-textfield') {
    textFieldClass += ' shared-textfield';
  } else {
    textFieldClass += ' individual-textfield';
  }

  return <input type="text" id={id} className={textFieldClass} />;
};

export default TextField;
