import styled from "styled-components/macro";

export const ButtonPrimary = styled.a`
  position: relative;
  border-radius: 0.375rem;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
  overflow-wrap: normal;
  ${({ outline }) =>
    outline
      ? `
      background: transparent;
      color: rgb(59, 73, 273);
      border: 1px solid rgb(59, 73, 273);
      padding: calc(0.5rem - 1px) calc(1rem - 1px);
      outline: 0;
      display: inline-flex;
  `
      : `
      display: inline-block;
      padding: calc(0.5rem - 0px) calc(1rem - 0px);
        border: 0px solid;
        background-color: rgb(59, 73, 223): 
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        color: #f9f9f9;
        border-color: transparent;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        `}

  ${({ lg }) =>
    lg &&
    `
    justify-content: center;
    width: 100%;
    margin-botton: 0.25rem;
    `}

    ${({ md }) =>
    md &&
    `
    white-space: nowrap;
    margin-right: 0.5rem;
      `}

  :hover {
    ${({ outline }) =>
      outline
        ? `
        background: rgb(59, 73, 273);
        color: #ffffff;
        border: 1px solid rgb(47,58, 178);
        text-decoration: underline;
        z-index: 1;
      `
        : `
          color: #f9f9f9;
          background: rgb(47,58, 178);
          border: transparent;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        `}
  }
`;

export const ButtonSecondary = styled.a`
  cursor: pointer;
  font: inherit;
  border-radius: 0.375rem;
  position: relative;
  color: rgb(64, 64, 64);
  display: flex;
  padding: 0.5rem 1rem;
  overflow-wrap: normal;
  background-color: transparent;

  ${({ sm }) =>
    sm &&
    `
  white-space: nowrap;
  margin-right: 0.5rem;
  margin-left: auto;
  text-decoration: none;
  
  `}

  ${({ md }) =>
    md &&
    ` 
    color: rgb(59, 73, 223);
    border-width: none;
    display: inline-block;
    padding: calc(0.5rem - 0px) calc(1rem - 0px);
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    text-align: center;
    transition: all cubic bezier(0.17, 0.67, 0.5,0.71) 100ms;
    border:0px solid transparent;
    box-shadow: none;
  `}

  ${({ lg }) =>
    lg &&
    `
      justify-content: center;
    `}

  :hover {
    background-color: rgba(59, 73, 223, 0.1);
    color: rgb(47, 58, 178);

    ${({ md }) =>
      md &&
      `
    background-color: rgba(0, 0, 0, 0.035);
    color: rgb(47, 58, 178);
    z-index: 1;
    `}
  }
`;
