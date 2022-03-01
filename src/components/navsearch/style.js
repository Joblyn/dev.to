import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 420px;
  flex: 1 auto;
  margin: 0 0.25rem;
  display: none;
  @media (min-width: 768px) {
    margin: 0 1rem;
    display: block;
  }
`;

export const Form = styled.form``;
export const Inner = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;

  > div {
    display: flex;
    flex-flow: column;
    font-size: 1rem;
    position: relative;
    flex: 1 1 0% !important;
  }
`;

export const SearchInput = styled.input`
  outline: 0;
  line-height: 1.25rem;
  padding: calc(0.5em - 1px) 0.5em;
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  resize: vertical;
  --border-width: 1px;
  background-color: #ffffff;
  border: var(--border-width) solid rgb(212, 212, 212);
  color: rgb(23, 23, 23);
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0.375rem;
  transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
`;
export const Button = styled.button`
  position: absolute;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  left: auto;
  top: 1px;
  right: 1px;
  bottom: 1px;
  padding: 0.5rem;
  background: transparent;
  color: rgb(38,38,38);

  :hover {
    background: rgba(59, 73, 223, 0.1);
    color: rgb(45, 58, 178);
    -webkit-appearance: button;
  }
  > svg {
    vertical-align: bottom;
    > * {
      fill: currentColor;
    } 
  }
  > * {
    pointer-events: none;
  }
`;
