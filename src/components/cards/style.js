import styled from "styled-components/macro";

export const CardContainer = styled.div`
  background: rgb(250, 250, 250);
  color: rgb(64, 64, 64);
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;
  overflow-wrap: anywhere;

  ${({ p4 }) => p4 && `padding: 1rem`};
  ${({ p3 }) => p3 && `padding: 0.75rem`};
  ${({ mt4 }) => mt4 && `margin-top: 1rem`};
`;

export const StoryContainer = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0 0 0 1px rgb(23, 23, 23, 0.1);
  margin: 0 0 0.5rem;
  position: relative;
  border-radius: 0.375rem;
  ${'' /* padding: 0.75rem; */}
  font-size: 1.25rem;

  ${({ featured }) =>
    featured &&
    `
  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
  `}
  @media (min-width: 768px) {
    ${'' /* padding: 1.25rem; */}
  }
  @media (min-width: 640px) {
    ${'' /* padding: 1rem; */}
    font-size: 1.5rem;
  }
`;
export const HiddenLink = styled.a`
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const CoverImage = styled.a`
  display: block;
  width: 100%;
  height: auto;
  padding-bottom: 42%;
  background-size: cover;
  background-position: center center;
  background-color: #dddddd;
  background-image: ${({ bgurl }) => `url(${bgurl})`};

  @media (min-width: 640px) {
    border-radius: 0.375rem 0.375rem 0 0;
  }
  > .hidden {
    display: none;
  }
`;
export const Body = styled.div`
  padding: 1.25rem;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
export const Meta = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.25;
  font-size: 0.875rem;
`;
export const AuthorPic = styled.div`
  position: relative;
  margin-right: 0.5rem;
`;
export const Avatar = styled.a`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 100%;
  position: relative;
  background-color: rgb(82, 82, 82);
  overflow: hidden;
  vertical-align: middle;
  flex-shrink: 0;
  ::after {
    content: "";
    border: 1px solid;
    opacity: 0.15;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    pointer-events: none;
  }
  > img {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: bottom;
  }
`;
export const Indention = styled.div`
  @media (min-width: 768px) {
    padding-left: calc(2rem + 0.5rem);
  }
`;
export const Title = styled.h2`
  color: rgb(23, 23, 23);
  line-height: 1.25;
  font-size: 1.875rem;
  overflow-wrap: anywhere;
  word-break: break-word;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    margin-bottom: 0.25rem;
  }

  > a {
    color: inherit;

    :hover {
      color: rgb(47, 58, 178);
    }
  }
`;
export const Tags = styled.div`
  margin-bottom: 0.5rem;
  margin-left: calc(0.25rem * -1);
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  color: #3d3d3d;
`;

export const Tag = styled.a`
  background-color: transparent;
  color: rgb(64, 64, 64);
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  flex-wrap: nowrap;
  cursor: pointer;
  transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
  padding: clamp(0.25rem, 0.25em, 0.5em) 0.5em;

  &:hover {
    ${({ r, g, b }) => `
      box-shadow: inset 0 0 0 1px rgba(${r},${g},${b}, 0.10)},inset 0 0 0 1px rgba(${r}, ${g}, ${b}, 0.10),inset 0 0 0 1px rgba(${r}, ${g}, ${b}, 0.10);
    `}
    :hover {
      ${({ r, g, b }) => `
      background-color: rgba(${r}, ${g}, ${b}, 0.10);
      color: rgb(23,23,23);
      `}
  };
  > span.prefix {
    color: ${({ r, g, b }) => `rgb(${r}, ${g}, ${b})`};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25;
`;

export const Details = styled.div`
  display: flex;
  margin-left: calc(0.5rem * -1);
`;
export const Save = styled.div`
  display: flex;
  align-items: center;

  > small {
    font-size: 0.75rem;
    margin-right: 0.5rem;
    color: rgb(82, 82, 82);
  }
`;
export const Bookmark = styled.button`
  width: max-content;
  font-weight: normal;
  position: relative;
  display: inline-block;
  padding: calc(0.25rem - 0px) calc(0.75rem - 0px);
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
  border: 0px solid;
  overflow-wrap: normal;
  background-color: #d6d6d7;
  border-color: transparent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  color: #3d3d3d;

  :hover {
    background-color: #bdbdbd;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #090909;
    z-index: 1;
  }
`;
export const BtnGhost = styled.a`
  padding-left: calc(0.5rem - 0px);
  background-color: transparent;
  color: #3d3d3d;
  box-shadow: none;
  font-weight: normal;
  border-width: 0px;
  position: relative;
  display: inline-block;
  padding: calc(0.25rem - 0px) calc(0.75rem - 0px);
  border-radius: 0.375rem;
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
  border-color: transparent;
  :hover {
    color: #090909;
    background-color: rgba(0, 0, 0, 0.035);
    border-color: transparent;
    box-shadow: none;
    z-index: 1;
  }
  > svg {
    margin-right: 0.25rem;
    fill: currentColor;
    vertical-align: bottom;
  }
  > span {
    @media (min-width: 640px) {
      display: inline;
    }
  }
  * {
    pointer-events: none;
  }
`;

export const Header = styled.header`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgb(245, 245, 245);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
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

  ${({ mb4 }) => mb4 && `margin-bottom: 1rem`};
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
    z-index: 1;
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.375rem;
  display: inline-block;
  vertical-align: middle;
  margin: 10px auto;
`;

export const AuthFeed = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  margin: 1.5rem;
  background-color: transparent;
  color: rgb(23, 23, 23);
  border-radius: 0.375rem;

  @media (min-width: 640px) {
    padding: 2rem;
    margin: 0 0 0.75rem 0;
  }
`;

export const AuthFeedContainer = styled.div`
  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > figure {
    width: 3rem;
    height: 3rem;
    margin-bottom: var(--su-2);
    @media (min-width: 640px) {
      height: 80px;
      width: 80px;
      margin-right: 2rem;
      > img {
        border-radius: 0.375rem;
        transform: rotate(-10deg);
        height: auto;
        width: 100%;
      }
    }
  }
`;
export const AuthFeedContent = styled.div`
  h2 {
    color: rgb(23, 23, 23);
    font-size: 1.5rem;
    line-height: 1.25;
    @media (min-width: 640px) {
      font-size: 1.875rem;
    }
  }
  p {
    color: rgb(64, 64, 64);
  }
`;
export const Actions = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    width: max-content;
    justify-self: center;
  }
`;
