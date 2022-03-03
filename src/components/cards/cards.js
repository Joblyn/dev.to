import React from "react";
import {
  CardContainer,
  StoryContainer,
  Subtitle,
  Text,
  Link,
  Image,
  HiddenLink,
  CoverImage,
  Body,
  Avatar,
  Top,
  Meta,
  AuthorPic,
  Title,
  Bottom,
  Details,
  Save,
  BtnGhost,
  Bookmark,
  AuthFeed,
  AuthFeedContainer,
  Actions,
  AuthFeedContent,
  Header,
  Tags,
  Tag,
  Indention,
} from "./style";
import { ReactComponent as Reacts } from "../../assets/icons/card_icons/reacts.svg";
import { ReactComponent as Comments } from "../../assets/icons/card_icons/comments.svg";
import { PrimaryLg, SecondaryMd } from "../buttons/buttons";

export const Card = ({ children, ...restProps }) => {
  return <CardContainer {...restProps}>{children}</CardContainer>;
};
Card.Header = function CardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Card.Link = function CardLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Image = function CardImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} loading="lazy" alt="" />;
};

export const Story = ({ children, ...restProps }) => {
  return <StoryContainer {...restProps}>{children}</StoryContainer>;
};
Story.Indention = function StoryIndention({ children, ...restProps }) {
  return <Indention {...restProps}>{children}</Indention>;
};
Story.HiddenLink = function StoryHiddenLink({ children, ...restProps }) {
  return <HiddenLink {...restProps}>{children}</HiddenLink>;
};
Story.CoverImage = function StoryCoverImage({ children, ...restProps }) {
  return <CoverImage {...restProps}>{children}</CoverImage>;
};
Story.Body = function StoryBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
Story.Top = function StoryTop({ children }) {
  return <Top>{children}</Top>;
};
Story.Meta = function StoryMeta({ children }) {
  return <Meta>{children}</Meta>;
};
Story.AuthorPic = function StoryAuthorPic({ children }) {
  return <AuthorPic>{children}</AuthorPic>;
};
Story.Avatar = function StoryAvatar({ src, alt, href, ...restProps }) {
  return (
    <Avatar href={href} {...restProps}>
      <img src={src} alt={alt} loading="lazy" />
    </Avatar>
  );
};
Story.Title = function StoryTitle({ href, title, ...restProps }) {
  return (
    <Title {...restProps}>
      <a href={href}>{title}</a>
    </Title>
  );
};
Story.Tags = function StoryTags({ hash }) {
  return (
    <Tags>
      {hash.map((item, id) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return (
          <Tag
            r={r}
            g={g}
            b={b}
            href={`https://dev.to/t/${item.toLowerCase()}`}
            key={`hash_tag_${item}_${id}`}
          >
            <span className="prefix">#</span>
            {item}
          </Tag>
        );
      })}
    </Tags>
  );
};
Story.Bottom = function StoryBottom({ link, reacts, comms, read }) {
  return (
    <Bottom>
      <Details>
        <BtnGhost href={link}>
          <Reacts />
          {` ${reacts}`}
          <span>reactions</span>
        </BtnGhost>
        <BtnGhost href={link + "#comments"}>
          <Comments />
          {comms > 0 ? (
            <>
              {comms}
              <span>{` comments`}</span>
            </>
          ) : (
            <span>Add Comment</span>
          )}
        </BtnGhost>
      </Details>
      <Save>
        <small>{`${read} min read`}</small>
        <Bookmark>Save</Bookmark>
      </Save>
    </Bottom>
  );
};

export const AuthFeedCard = () => {
  return (
    <AuthFeed>
      <AuthFeedContainer>
        <figure>
          <img
            src="../assets/images/sec_log.png"
            alt="Secondary DEV Community logo"
            loading="lazy"
          />
        </figure>
        <AuthFeedContent>
          <h2>
            <Card.Link href="https://dev.to/">Dev Community</Card.Link>
            {` is a community of 807,534 amazing developers`}
          </h2>
          <p>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </AuthFeedContent>
      </AuthFeedContainer>
      <Actions>
        <PrimaryLg md />
        <SecondaryMd />
      </Actions>
    </AuthFeed>
  );
};
