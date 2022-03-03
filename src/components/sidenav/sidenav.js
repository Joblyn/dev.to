import React from "react";
import { Nav, Inner, Item, Link } from "./style";
import SideNavLinks from "../../data/sidenavlinks";

export default function SideNav() {
  return (
    <Nav>
      <Inner>
        {SideNavLinks.map((item, id) => {
          let link =
            id === 0
              ? "https://dev.to/"
              : "https://dev.to/" + item.text.toLowerCase();
          return (
            <Item key={`nav_item_${item.text}`}>
              <Link href={link}>
                <span>
                  <item.icon />
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
