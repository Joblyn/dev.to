import React from "react";
import { Card } from "../cards/cards";
import meta from "../../data/meta";
import { ContentLink } from "../listings/style";

export default function Meta() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>#meta</Card.Subtitle>
      </Card.Header>
      <div>
        {meta.map((item, id) => (
          <ContentLink href={item.link} key={`meta_${id}`}>
            {item.text}
            <div className="secondary_link">{`${item.comment} comments`}
            </div>
          </ContentLink>
        ))}
      </div>
    </Card>
  );
}
