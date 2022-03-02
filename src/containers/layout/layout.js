import React from "react";
import SidebarLeft from "../sidebarLeft/sidebarLeft";
import { Wrapper, Inner } from "./style";

export default function Layout() {
  return (
    <Wrapper id="page-content">
      <div>
        <Inner>
          <SidebarLeft />
          {/* <ArticlesFeed />
            <SidebarRight /> */}
        </Inner>
      </div>
    </Wrapper>
  );
}
