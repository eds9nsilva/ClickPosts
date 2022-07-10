import React from "react";
import { useNavigation } from "@react-navigation/native";
import User from '../../assets/userIcon.png';
import { IUser } from "../../model/User";
import { IPost } from "../../model/posts";
import {
  HeaderPost,
  TitlePost,
  Post,
  Container,
  TextName,
  Avatar,
  ButtonPost,
  Username,
  ContentText,
  TextPost,
  ContentIcon,
  ContentHeader,
  IconsDelete,
  IconsEdit,
} from "./styles";
import { Alert } from "react-native";
import { Context } from "../../context/context";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

interface Props {
  post: IPost;
  user: IUser;
}

export const PostList: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { removePost } = React.useContext(Context);

  const handleUserDetails = (user: IUser) => {
    navigate("UserDetails", { user });
  };

  const handleEditPost = (post: IPost, user: IUser) => {
    navigate("Edit", { post, user });
  };

  const handleRemove = () => {
    Alert.alert('Warning!', 'Do you really want to delete this post?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => removePost(props.post),
      },
    ]);
  };


  return (
    <Container>
      <HeaderPost>
      <ContentHeader
        onPress={() => {
          handleUserDetails(props.user);
        }}
      >
      <Avatar source={User} />
        <ContentText>
          <TextName>{props.user.name}</TextName>
          <Username>@{props.user.username}</Username>
        </ContentText>
      </ContentHeader>
      <ContentIcon>
        <IconsDelete name="trash-2" size={28}
          onPress={handleRemove}
        />
        <IconsEdit name="edit" size={28}
          onPress={() => handleEditPost(props.post, props.user)}
        />
      </ContentIcon>
      </HeaderPost>
      <Post>
        <TitlePost>{props.post.title}</TitlePost>
        <TextPost>{props.post.body}</TextPost>
      </Post>
    </Container>
  );
};
