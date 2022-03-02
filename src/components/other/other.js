import React from "react";
import OtherLinks from "../../data/otherLinks";
import { Nav, Heading } from "./style";
import { Item, Link } from "../sidenav/style";

export default function Other({ ...restProps }) {
  return (
    <Nav {...restProps}>
      <Heading {...restProps}>Other</Heading>
      {OtherLinks.map((item, id) => {
        let link =
          id === 0
            ? "https://dev.to/"
            : "https://dev.to/" + item.text.toLowerCase();
        return (
          <Item>
            <Link href={link}>
              <span>
                <item.icon />
              </span>
              {item.text}
            </Link>
          </Item>
        );
      })}
    </Nav>
  );
}
