import styled from "styled-components/macro";

export const Nav = styled.nav`
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  padding-left: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  ${({ p2 }) => p2 && `padding: 0.5rem !important`};
  font-size: 1rem;
  font-weight: 700;
  color: #242424;
  

  @media (min-width: 640px){
    line-height: 1.5;
`;
