import React from "react";
import { Container, Inner } from "./style";
import SideNavLinks from "../../data/sidenavlinks";

export default function SideNav() {
  return (
    <Nav>
      <Inner>
        {SideNavLinks.map((item, id) => {
          let link =
            id === 0
              ? "https://dev.to/"
              : "https://dev.to/" + item.text.toLowerCase;
          return (
            <Item>
              <Link href={link}>
                <span>
                  <item.Icon />
                </span>
                {item.text}
              </Link>
            </Item>
          );
        })}
      </Inner>
    </Nav>
  );
}
