import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonColor {
  color: string;
  size: string;
}

export const Button = styled(Link)<ButtonColor>`
${props =>
    props.color &&
    css`
      width: ${props.size};
      height: ${props.size};
    `}
  border-radius: 30px;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `}
  

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;
  :hover {
    background-color: #96FEFF;
  }
`