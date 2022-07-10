import React from "react";
import { IUser } from "../../model/User";
import { useNavigation } from '@react-navigation/native';
import {
  UserContainer,
  Container,
  Content,
  ContentImage,
  ImageUser,
  NameUser,
  Icon,
  SelectContainer,
  Username
} from "./styles";
import UserIcons from '../../assets/userIcon.png';

interface ScreenNavigationProp {
  navigate: (screem: string, user: unknown) => void;
}

interface IParams {
  user: IUser;
}

export const ListUsers: React.FunctionComponent<IParams> = ({user}: IParams) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <Content>
        <ContentImage>
          <ImageUser source={UserIcons} />
        </ContentImage>
        <UserContainer>
          <NameUser>Name: {user.name}</NameUser>
          <Username>Username: @{user.username}</Username>
          <Username>Website: {user.website}</Username>
        </UserContainer>
        <SelectContainer  activeOpacity={.7}  onPress={()=>
          navigation.navigate('Post', {user})
        }>
          <Icon name="arrow-right"/>
        </SelectContainer>
      </Content>
    </Container>
  );
}
