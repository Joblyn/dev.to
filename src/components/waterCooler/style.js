import React from "react";
import { Card } from "../cards/cards";
import waterCooler from "../../data/watercooler";
import { ContentLink } from "../listings/style";

export default function WaterCooler() {
  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>#watercooler</Card.Subtitle>
      </Card.Header>
      <div>
        {waterCooler.map((item, id) => (
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
