import styled from "styled-components/macro";

export const Action = styled.a`
  font-weight: 500;
  font-size: 0.875rem;
`;

export const ContentLink = styled.a`
  display: block;
  padding: 1rem;
  border-bottom: 1px solid rgb(245, 245, 245);
  color: rgb(64, 64, 64);
  :hover {
    background: rgb(255, 255, 255);
    color: rgb(47, 58, 178);
  }

  > .secondary_link {
    color: #575757;
    font-size: 0.875rem;
    padding-top: 0.25rem;
    > .indicator_warning {
      padding: 0.25rem;
      text-align: center;
      line-height: 1;
      font-size: 0.875rem;
      border-radius: 0.375rem;
      display: inline-block;
      background: rgb(252, 211, 77);
      color: rgb(120, 53, 15);
      min-width: 0.5rem;
    }
  }
`;

export const BtmLink = styled.a`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.75rem;
  width: 100%;
  color: rgb(64, 64, 64);
`;
