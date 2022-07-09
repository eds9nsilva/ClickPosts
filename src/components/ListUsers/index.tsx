import React, {useContext} from "react";
import { IUser } from "../../model/User";
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
import {Context} from '../../context/context';

interface IParams {
  user: IUser;
}

export const ListUsers: React.FunctionComponent<IParams> = ({user}: IParams) => {
  const {removePost} = useContext(Context);
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
        <SelectContainer>
          <Icon name="arrow-right"/>
        </SelectContainer>
      </Content>
    </Container>
  );
}
