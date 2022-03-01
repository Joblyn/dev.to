import { style } from "@mui/system";
import styled from "styled-components/macro";

export const CardContainer = styled.div`
  background: rgb(250, 250, 250);
  color: rgb(64, 64, 64);
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;
  overflow-wrap: anywhere;

  ${({ p4 }) =>
    p4 &&
    `
    padding: 1rem;
  `}
`;

export const StoryContainer = styled.div`
  padding: 1.25rem;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 0 1px rgb(23, 23, 23, 0.1);
  margin: 0 0 0.5rem;
  position: relative;
  border-radius: Max(0px, Min(0.375rem;, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;

  ${({ featured }) =>
    featured &&
    `

  `}
`;

// Subtitle, Text
export const Subtitle = styled.h2`
  line-height: 1.25;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #242424;
`;
export const Text = styled.p`
  margin-bottom: 1rem;
  color: #575757;
  margin: 0;
`;
export const Link = styled.a`
  position: relative;
  display: inline-block;
  border-radius: 0.375rem;
  font: inherit;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  color: rgb(59, 73, 223);
  background-color: transparent;

  :hover {
    color: rgb(47, 48, 178);
    ${"" /* background-color: rgba(59, 73, 223, 0.1); */}
    z-index:1;
    text-decoration: underline;
  }
`;
