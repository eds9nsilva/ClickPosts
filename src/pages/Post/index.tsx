import {useRoute} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {IUser} from '../../model/User';
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../context/context";

import {
  AuthorTitle,
  Container,
  Content,
  Header,
  InputTitle,
  ButtonText,
  InputText,
  ButtonCreate,
  ContainerInputText,
  ContainerInputTitle,
} from './styles';

interface IParams {
  user: IUser;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const Post: FunctionComponent = () => {
  const route = useRoute();
  const routeParams = route.params as IParams;
  const user = routeParams.user;
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { posts, addPost } = React.useContext(Context);

  const handleCreatePost = () => {
    if (text === '' || title === '') {
      alert('Fill in all fields');
      return;
    }

    let [lastPost] = posts.slice(-1);

    let NewPost = {
      userId: user.id,
      id: lastPost.id + 1,
      title: title,
      body: text,
    };

    addPost(NewPost);
    navigate('Home');
  };

  return (
    <Container>
      <Content>
        <AuthorTitle>{user.name}</AuthorTitle>
        <ContainerInputTitle>
          <InputTitle
            placeholder="Type the title"
            value={title}
            onChangeText={text => setTitle(text)}
            autoCorrect={true}
            multiline={false}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            maxLength={100}
          />
        </ContainerInputTitle>
        <ContainerInputText>
          <InputText
            placeholder="Type the post"
            value={text}
            onChangeText={text => setText(text)}
            autoCorrect={true}
            multline={true}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            maxLength={500}
          />
        </ContainerInputText>
        <ButtonCreate onPress = {handleCreatePost}>
          <ButtonText>Create new post</ButtonText>
        </ButtonCreate>
      </Content>
    </Container>
  );
};
