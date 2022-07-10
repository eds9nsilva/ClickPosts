import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Image, TextButton, Title } from "./styles";
import Hello from '../../assets/click.png';

interface ScreenNavigationProp {
  navigate: (screem: string) => void;
}

export const Welcome: React.FunctionComponent = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <Title>Welcome</Title>
      <Image  source={Hello} />
      <Button onPress={() => {
        navigation.navigate('Home');
      }}>
        <TextButton>Access ClickPosts</TextButton>
      </Button>
    </Container>
  );
}
