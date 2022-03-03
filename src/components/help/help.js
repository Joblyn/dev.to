import React from "react";
import { Card } from "../cards/cards";
import helps from "../../data/help";
import { ContentLink } from "../listings/style";

export default function Help() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>#help</Card.Subtitle>
      </Card.Header>
      <div>
        {helps.map((item, id) => (
          <ContentLink href={item.link} key={`help_${id}`}>
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
