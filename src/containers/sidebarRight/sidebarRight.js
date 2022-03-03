import React from "react";
import { Card } from "../../components/cards/cards";
import Challenge from "../../components/challenge/challengs";
import Discuss from "../../components/discuss/discuss";
import ExplainLikeImFive from "../../components/explainLikeImFive/explainLikeImFive";
import Help from "../../components/help/help";
import Listings from "../../components/listings/listings";
import Meta from "../../components/meta/meta";
import Queried from "../../components/queried/queried";
import Trending from "../../components/trending/trending";
import WaterCooler from "../../components/waterCooler/style";
import { Container, Inner } from "./style";

export default function SidebarRight() {
  return (
    <Container>
      <Inner>
        <Card p4>
          <p>
            <a href="https://dev.to/codenewbieteam/codeland-2022-is-coming-in-june-submit-your-talk-today-4h4">
              <Card.Image
                height="994"
                width="2168"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Su8MR3_z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://community.codenewbie.org/remoteimages/uploads/articles/nylmwmidrc3ugik4pgqr.png"
              />
            </a>
          </p>
          <h4>
            <a href="https://dev.to/#codeland-2022-taking-place-virtually-on-june-16-amp-17"></a>
            CodeLand 2022: Taking place virtually on June 16 & 17
          </h4>
          <p>
            <strong>
              <a href="https://dev.to/codenewbieteam/codeland-2022-is-coming-in-june-submit-your-talk-today-4h4">
                → Learn More & Submit a talk
              </a>
            </strong>
          </p>
        </Card>
        <Listings />
        <Help />
        <Discuss />
        <ExplainLikeImFive />
        <Challenge />
        <Meta />
        <WaterCooler />
        <Trending />
        <Queried />
      </Inner>
    </Container>
  );
}
