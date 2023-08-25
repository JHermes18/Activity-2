import React from 'react';
import './styles.css';

const Button = ({ background, text }) => {
  const buttonStyle = {
    backgroundColor: background,
    borderRadius: '10px',
    padding: '10px 20px',
    color: 'white',
    cursor: 'pointer',
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;