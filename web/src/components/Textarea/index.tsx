import React, { TextareaHTMLAttributes } from 'react';
import Div from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <Div>
      <label htmlFor={name} >{label}</label>
      <textarea id={name} {...rest}/>
    </Div>
  );
};

export default Textarea;