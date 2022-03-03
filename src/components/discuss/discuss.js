import React from "react";
import { Card } from "../cards/cards";
import discuss from "../../data/discuss";
import { ContentLink } from "../listings/style";

export default function Discuss() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>#discuss</Card.Subtitle>
      </Card.Header>
      <div>
        {discuss.map((item, id) => (
          <ContentLink href={item.link} key={`discuss_${id}`}>
            {item.text}
            <div className="secondary_link">{`${item.comment} comments`}
            </div>
          </ContentLink>
        ))}
      </div>
    </Card>
  );
}
