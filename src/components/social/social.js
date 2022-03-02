import React from "react";
import Socials from "../../data/social";
import { Container, Link } from "./style";

export default function Social() {
  {
    return (
      <Container>
        {Socials.map((item, id) => (
          <Link
            href={item.link}
            target="_blank"
            key={`social_${item.text}_${id}`}
          >
            <item.icon />
          </Link>
        ))}
      </Container>
    );
  }
}
