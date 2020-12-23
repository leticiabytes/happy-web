import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  url: string;
  color: string;
  size: string;
}

const ButtonNavigation: React.FC<ButtonProps> = (props) => {
  return (
    <Button to={props.url} color={props.color} size={props.size}>
      {props.children}
    </Button>
  );
};

export default ButtonNavigation;
