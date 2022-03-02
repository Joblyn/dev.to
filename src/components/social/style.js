import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: flex-start;
`;

export const Link = styled.a`
    margin-left: 0.25rem;
    margin-right: 0.25rem; 
    padding: 0.5rem;
    display: inline-block;
    overflow-wrap: normal;
    background-color: transparent;
    color: rgb(64,64,64);
    position: relative;
    display: inline-block;
    border-radius: 0.375rem;
    font: inherit;
    cursor: pointer;
    outline: 0;
    text-decoration: none;

    :hover {
      background: rgba(59, 73, 223, 0.1);
    color: rgb(47, 58, 178);

    > * {
      fill: currentColor;
    }
    > svg {
      vertical-align: bottom;
    }
`;
