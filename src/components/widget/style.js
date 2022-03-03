import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  padding: 0 16px 16px 16px;
  margin: 8px 0 16px 0;

  > header {
    position: relative;
    font-size: 0.9em;
    font-weight: bold;
    padding: 8px 0;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    color: rgb(23, 23, 23);
  }
  > .widget_body {
    overflow-wrap: break-word;
    > .widget_link_list {
      a {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid rgb(245, 245, 245);
        color: rgb(64, 64, 64);
      }
    }
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    opacity: 0.25;
  }
`;
