import React, { ReactNode, MouseEventHandler } from 'react';
import './Button.css'
interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
