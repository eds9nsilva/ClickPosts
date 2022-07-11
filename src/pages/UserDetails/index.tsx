import { useRoute } from "@react-navigation/native";
import React, {FunctionComponent} from "react";
import { IUser } from "../../model/User";
import UserIcon from '../../assets/userIcon.png';
import {
  Avatar,
  Container,
  ContentAvatar,
  ViewTitle,
  Title,
  ContentDetails,
  ViewDetail,
  TextDetail,
  ViewSubTitle,
  ContentDetailsSub,
} from './styles';
import { ScrollView } from "react-native";

interface IParams {
  user: IUser;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const UserDetails: FunctionComponent = () => {
  const route = useRoute();
  const routeParams = route.params as IParams;
  const user = routeParams.user;

  return (
    <Container>
      <ScrollView>
        <ContentAvatar>
          <Avatar source={UserIcon} />
        </ContentAvatar>
        <ContentDetails>
          <ViewTitle>
            <Title>Name</Title>
          </ViewTitle>
          <ViewDetail>
            <TextDetail>{user.name}</TextDetail>
          </ViewDetail>
        </ContentDetails>
        <ContentDetails>
          <ViewTitle>
            <Title>Username</Title>
          </ViewTitle>
          <ViewDetail>
            <TextDetail>{user.username}</TextDetail>
          </ViewDetail>
        </ContentDetails>
        <ContentDetails>
          <ViewTitle>
            <Title>Phone</Title>
          </ViewTitle>
          <ViewDetail>
            <TextDetail>{user.phone}</TextDetail>
          </ViewDetail>
        </ContentDetails>
        <ContentDetails>
          <ViewTitle>
            <Title>Email</Title>
          </ViewTitle>
          <ViewDetail>
            <TextDetail>{user.email}</TextDetail>
          </ViewDetail>
        </ContentDetails>
        <ContentDetails>
          <ViewTitle>
            <Title>WebSite</Title>
          </ViewTitle>
          <ViewDetail>
            <TextDetail>{user.website}</TextDetail>
          </ViewDetail>
        </ContentDetails>
        <ContentDetailsSub>
          <ViewSubTitle>
            <Title>Address</Title>
          </ViewSubTitle>
          <ContentDetails>
            <ViewTitle>
              <Title>City</Title>
            </ViewTitle>
            <ViewDetail>
              <TextDetail>{user.address.city}</TextDetail>
            </ViewDetail>
          </ContentDetails>
          <ContentDetails>
            <ViewTitle>
              <Title>Street</Title>
            </ViewTitle>
            <ViewDetail>
              <TextDetail>{user.address.street}</TextDetail>
            </ViewDetail>
          </ContentDetails>
        </ContentDetailsSub>
        <ContentDetailsSub>
          <ViewSubTitle>
            <Title>Company</Title>
          </ViewSubTitle>
          <ContentDetails>
            <ViewTitle>
              <Title>Name</Title>
            </ViewTitle>
            <ViewDetail>
              <TextDetail>{user.company.name}</TextDetail>
            </ViewDetail>
          </ContentDetails>
          <ContentDetails>
            <ViewTitle>
              <Title>BS</Title>
            </ViewTitle>
            <ViewDetail>
              <TextDetail>{user.company.bs}</TextDetail>
            </ViewDetail>
          </ContentDetails>
        </ContentDetailsSub>
      </ScrollView>
    </Container>
  )
}
