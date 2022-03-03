import styled from "styled-components/macro";

export const Container = styled.main`
  scroll-margin-top: 56px;
  min-width: 0;
`;

export const Header = styled.header`
  font-size: 1.125rem;
  padding-left: 0.75rem;
  paddding-right: 0.75rem;
  paddding: 0.5rem;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

export const Nav = styled.nav`
  margin-left: calc(0.75rem * -1);
  margin-right: calc(0.75rem * -1);
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 640px) {
    display: flex;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 0.25rem 0;
  margin: calc(-1 * 0.25rem) 0;
  @media (min-width: 640px) {
    display: flex;
    overflow-x: unset;
  }
`;

export const NavItem = styled.a`
  color: #575757;
  background: none;

  @media (min-width: 640px) {
    display: inline-flex;
    padding: 0.5rem 0.75rem;
    white-space: unset;
  }
  ${({ current }) =>
    current &&
    `
    color: #090909;
    font-weight: 700;
  `}

  :hover {
    color: rgb(59, 73, 223);
    background-color: rgb(255, 255, 255);
    border-radius:0.375rem;
  }
`;
