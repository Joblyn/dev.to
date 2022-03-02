import React from "react";
import { Card } from "../../components/cards/cards";
import { Container, Inner } from "./style";
import { PrimaryLg, SecondaryLg } from "../../components/buttons/buttons";
import SideNav from "../../components/sidenav/sidenav";
import Other from "../../components/other/other";
import PopularTags from "../../components/popularTags/popularTags";

export default function SidebarLeft() {
  return (
    <Container>
      <Inner>
        <Card p4>
          <Card.Subtitle>
            <Card.Link href="https://dev.to/">Dev Community</Card.Link>
            {` is a community of 807,534 amazing developers`}
          </Card.Subtitle>
          <Card.Text mb4>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </Card.Text>
          <div>
            <PrimaryLg outline lg />
            <SecondaryLg />
          </div>
        </Card>
        <SideNav />
        <Other />
        <PopularTags />
        <Card p3>
          <p>
            <a href="https://shop.dev.to/collections/accesories/products/sticker-pack-1">
              <Card.Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--U808v6D3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://thepracticaldev.s3.amazonaws.com/i/wf42it8isemedqmcd7lf.jpg"
                width="640"
                height="640"
              />
            </a>
            <h3>
              <a href="https://shop.dev.to/collections/accesories/products/sticker-pack-1">
                Got DEV Stickers Yet?
              </a>
            </h3>
          </p>
        </Card>
        <Card p3 mt4>
          <p>
            {`DEV runs on 100% open source code known as `}
            <a href="https://github.com/forem/forem">Forem</a>
            {`.`}
          </p>
          <p>Contribute to the codebase or host your own!</p>
          <p>
            <strong>Check these out! 👇</strong>
          </p>
          <ul className="card-list">
            <li>
              <a href="https://github.com/forem/forem">Main Forem Repo</a>
            </li>
            <li>
              <a href="https://github.com/forem/selfhost">Self-Host Instructions</a>
            </li>
          </ul>
        </Card>
      </Inner>
    </Container>
  );
}
