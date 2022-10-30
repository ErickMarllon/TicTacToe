import styled from "styled-components";
import { keyframes } from "styled-components";

export const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 2rem;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;

  &.gameOver {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
export const Cell = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 5px;
  font-size: 3rem;
  font-weight: bold;
  color: #00000066;
  cursor: pointer;

  &.O {
    background-color: #2196f3;
    cursor: not-allowed;
  }
  &.X {
    background-color: #f44336;
    cursor: not-allowed;
  }
  &:not(.X):not(.O):hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.4);
  }
`;

export const Footer = styled.footer`
  display: grid;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00000066;
  cursor: pointer;
`;

export const Button = styled.button`
  text-align: center;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0, 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
`;

const gradient = keyframes`
{
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }}
`;

export const Winner = styled.span`
  &.O {
    color: #2196f3;
  }
  &.X {
    color: #f44336;
  }
  &.Empate {
    animation: ${gradient} 3s ease-in-out infinite;
    background: #f44336;
    background: linear-gradient(to right, #f44336, #2196f3);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
