import React from "react";
import { Button, Container, Image, TextButton, Title } from "./styles";
import Hello from '../../assets/click.png';

export const Welcome: React.FunctionComponent = () => {

  return (
    <Container>
      <Title>Welcome</Title>
      <Image  source={Hello} />
      <Button>
        <TextButton>Access ClickPosts</TextButton>
      </Button>
    </Container>
  );
}
