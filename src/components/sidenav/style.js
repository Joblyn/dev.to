import styled from "styled-components/macro";
export const Nav = styled.nav`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Inner = styled.ul``;
export const Item = styled.li``;
export const Link = styled.a`
  display: flex;
  padding: 0.5rem 1rem;
  overflow-wrap: normal;
  background-color: transparent;
  position: relative;
  border-radius: 0.375rem;
  font: inherit;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  color: rgb(64,64,64);

  :hover {
    background: rgba(59, 73, 223, 0.1);
    color: rgb(47, 58, 178);
    text-decoration: underline;
    z-index: 1;
  }

  > span {
    margin-right: 0.5rem;
    margin-left: calc(0.5rem * -1);
    display: inline-flex;
    flex-shrink: 0;
    > svg {
      height: 24px;
      width: 24px;
      vertical-align: middle;
      display: inline-block;
    }
  }
`;
