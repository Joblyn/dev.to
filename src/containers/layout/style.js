import styled from "styled-components/macro";

export const Wrapper = styled.div`
  flex: 1 auto;
  visibility: visible;
  font-size: 18px;
`;

export const Inner = styled.div`
  font-size: 1rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 240px 2fr 1fr;
  padding: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: 240px 2fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 2fr 2fr 1fr;
  }
`;
