import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`${props.className} active:scale-100 hover:bg-black`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
