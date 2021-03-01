import React from "react";
import ReactLoading from "react-loading";
import { Container, Overlay } from './styles';

const Loading = () => (
  <Container>
    <Overlay />
    <ReactLoading type="spinningBubbles" color="#aaa" />
  </Container>
);

export default Loading;
