import styled from "styled-components/macro";

export const Container = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 56px;
  background: rgb(255, 255, 255);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const Inner = styled.div`
  max-width: 1280px;
  padding: 0 1rem;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  height: 56px;
`;

export const Brand = styled.a`
  max-width: 125px;
  font-size: 1.25rem;
  font-weight:700;
  display: inline-flex;
  flex-shrink: 0;
  align-self: center;
  align-items: center;
  vertical-align: middle;
  color:#090909;
  text-decoration: none;
  letter-spacing: -0.02em;
  line-height: 1;
  outline: 0;
  overflow-wrap: anywhere;
  
  @media (min-width: 1024px){
    max-width: 200px;
  }
  @media (min-width: 768px){
    max-width: 175px;
  }
  @media (min-width: 640px){
    max-width: 150px;
  }
  > img {
    max-width: 100%;
    width: auto;
    height: calc(56px - 0.25rem * 2);
    object-fit: contain;
    vertical-align: middle;
    display: inline-block;
    outline: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  margin-left: auto;
  height: 100%;
  align-items: center;
`;