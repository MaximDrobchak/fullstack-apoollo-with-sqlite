import React from "react";
import { CardPost, TitlePost, DescriptionPost, AuthorName } from './styles';

const Post = ({ title, text, author: { firstName, lastName }}) => (
      <CardPost>
        <TitlePost>{title}</TitlePost>
        <DescriptionPost>{text}</DescriptionPost>
        <AuthorName>Author: {firstName} {lastName}</AuthorName>
      </CardPost>
);

export default Post;
