import React, { useState } from "react";
import { AuthFeedCard, Story } from "../../components/cards/cards";
import { Container, Header, Nav, NavItem, Ul } from "./style";
import Posts from "../../data/posts";

export default function ArticlesFeed() {
  const [current, setCurrent] = useState("relevant");
  const posts = Posts;

  const generateStory = (Post, id) => { 
    return (
    <Story key={`story_${Post.profile.name}_${id}`}>
      {Post.img_src && (
        <>
          <Story.HiddenLink href={Post.link}>{Post.title}</Story.HiddenLink>
          <Story.CoverImage
            href={Post.link}
            title={Post.title}
            bgurl={Post.img_src}
          >
            <span className="hidden">{Post.title}</span>
          </Story.CoverImage>
        </>
      ) }
      <Story.Body>
        <Story.Top>
          <Story.Meta>
            <Story.AuthorPic>
              <Story.Avatar
                href={Post.profile.link}
                alt={Post.profile.name + "profile"}
                src={Post.profile.img}
              />
            </Story.AuthorPic>
            <div>
              <div>
                <a href={Post.profile.link} className="fs-md">
                  {Post.profile.name}
                </a>
              </div>
              <a href={Post.profile.link} className="fs-xs">
                <time
                  dateTime="2022-03-01T11:57:38Z"
                  title="Tuesday, March 1, 2022, 12:57:38 PM"
                >
                  Mar 1
                </time>
                <span data-seconds="1646135858"></span>
              </a>
            </div>
          </Story.Meta>
        </Story.Top>
        <Story.Indention>
          <Story.Title href={Post.link} title={Post.title} />
          <Story.Tags hash={Post.hash} />
          <Story.Bottom
            link={Post.link}
            reacts={Post.reactions}
            comms={Post.comments}
            read={Post.read_time}
          />
        </Story.Indention>
      </Story.Body>
    </Story>
  )};
  return (
    <Container>
      <Header>
        <Nav>
          <Ul>
            <li onClick={() => setCurrent("relevant")}>
              <NavItem href="/" current={current === "relevant" ? true : false}>
                Relevant
              </NavItem>
            </li>
            <li onClick={() => setCurrent("latest")}>
              <NavItem href="/" current={current === "latest" ? true : false}>
                Latest
              </NavItem>
            </li>
            <li onClick={() => setCurrent("top")}>
              <NavItem href="/" current={current === "top" ? true : false}>
                Top
              </NavItem>
            </li>
          </Ul>
        </Nav>
      </Header>
      {posts.splice(0, 4).map((post, id) => generateStory(post, id))}
      <AuthFeedCard />
      {posts.map((post, id) => generateStory(post, id))}
    </Container>
  );
}
