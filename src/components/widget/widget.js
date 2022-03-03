import React from "react";
import { Container } from "./style";

export default function Widget({ header, data, ...restProps }) {
  return (
    <Container {...restProps}>
      <header>{header}</header>
      <div className="widget_body">
        <div className="widget_link_list">
          {data.map((item, id) => (
            <a href={item.link} key={`trending_${id}`}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
