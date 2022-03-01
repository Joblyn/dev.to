import React from "react";
import { CardContainer, StoryContainer, Subtitle, Text, Link } from "./style";

export const Card = ({ ...restProps, children }) => {
  return <CardContainer {...restProps}>{children}</CardContainer>;
}

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
  return (
    <Subtitle {...restProps}>{children}</Subtitle>
  )
}
Card.Link = function CardLink({ children, ...restProps }) {
  return ( 
    <Link {...restProps}>{children}</Link>
  )}
Card.Text = function CardText({ children, ...restProps }) {
    return ( 
      <Text {...restProps}>{children}</Text>
    )
  }


export const Story = ({children, ...restProps}) => {
  return <StoryContainer {...restProps}>{children}</StoryContainer>
}