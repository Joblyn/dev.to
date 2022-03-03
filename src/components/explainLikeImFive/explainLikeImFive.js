import React from "react";
import { Card } from "../cards/cards";
import explainLikeImFive from "../../data/explainLikeImFive";
import { ContentLink } from "../listings/style";

export default function ExplainLikeImFive() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>#explainlikeimfive</Card.Subtitle>
      </Card.Header>
      <div>
        {explainLikeImFive.map((item, id) => (
          <ContentLink href={item.link} key={`elif_${id}`}>
            {item.text}
            <div className="secondary_link">{`${item.comment} comments`}</div>
          </ContentLink>
        ))}
      </div>
    </Card>
  );
}
