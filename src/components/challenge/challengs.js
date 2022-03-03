import React from "react";
import { Card } from "../cards/cards";
import challenges from "../../data/challenge";
import { ContentLink } from "../listings/style";

export default function Challenge() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>#challenge</Card.Subtitle>
      </Card.Header>
      <div>
        {challenges.map((item, id) => (
          <ContentLink href={item.link} key={`challenge_${id}`}>
            {item.text}
            <div className="secondary_link">
              <span className="indicator_warning">{item.tag}</span>
            </div>
          </ContentLink>
        ))}
      </div>
    </Card>
  );
}
