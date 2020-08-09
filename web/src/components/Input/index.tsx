import React, { InputHTMLAttributes } from 'react';
import Div from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, children, ...rest }) => {
  return (
    <Div>
      <label htmlFor={name} >{label}</label>
      <input type="text" id={name} {...rest}/>
    </Div>
  );
};

export default Input;