import styled from "styled-components";

export const Button = styled.button`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  background: #2c354d;
  border: 0.2rem solid #000000;
  box-shadow: inset -0.25rem -0.25rem 0px var(--furf-background-dark),
  inset 0.25rem 0.25rem 0px var(--furf-background);

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  
  cursor: pointer;
  
  &:hover {
    border-color: var(--furf-orange);
    color: var(--furf-gold);
  }
`;