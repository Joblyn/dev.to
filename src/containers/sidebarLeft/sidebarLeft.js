import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../../components/buttons/styles";
import { Card } from "../../components/cards/cards";
import { Container, Inner } from "./style";
import { PrimaryLg, SecondaryLg } from "../../components/buttons/buttons";

export default function SidebarLeft() {
  return (
    <Container>
      <Inner>
        <Card p4>
          <Card.Subtitle>
            [<Card.Link href="https://dev.to/">Dev Community</Card.Link>
            is a community of 807,534 amazing developers
          </Card.Subtitle>
          <Card.Text>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </Card.Text>
          <div>
            <PrimaryLg outline lg/>
            <SecondaryLg />
          </div>
        </Card>
        
      </Inner>
    </Container>
  );
}
