import React from "react";
import { Card } from "../cards/cards";
import listings from "../../data/listings";
import { Action, ContentLink, BtmLink } from "./style";

export default function Listings() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>Listings</Card.Subtitle>
        <div>
          <Action href="https://dev.to/listings">See all</Action>
        </div>
      </Card.Header>
      <div>
        {listings.map((item, id) => (
          <ContentLink href={item.link} key={`list_item_${id}`}>
            <div>{item.main}</div>
            <div className="secondary_link">{item.sub}</div>
          </ContentLink>
        ))}
        <BtmLink>Create a listing</BtmLink>
      </div>
    </Card>
  );
}
