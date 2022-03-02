import React from "react";
import { Heading } from "../other/style";
import popularTags from "../../data/popularTags";
import { Link } from "../sidenav/style";
import { Container, Inner } from "./style";

export default function PopularTags() {
  return (
    <Container>
      <Heading p2>Popular Tags</Heading>
      <Inner>
        {popularTags.map((item) => (
          <div>
            <Link href={`https://dev.to/t/${item.toLowerCase()}`}>#{item}</Link>
          </div>
        ))}
      </Inner>
    </Container>
  );
}
