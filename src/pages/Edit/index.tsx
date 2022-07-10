import {useRoute} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {IUser} from '../../model/User';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../context/context';

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
import {IPost} from '../../model/posts';

interface IParams {
  user: IUser;
  post: IPost;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const Edit: FunctionComponent = () => {
  const route = useRoute();
  const routeParams = route.params as IParams;
  const user = routeParams.user;
  const post = routeParams.post;
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const {editPost} = React.useContext(Context);

  const handleEdit = () => {
    if (title !== '' || text !== '') {
      const DATA = {
        userId: user.id,
        id: post.id,
        title: title,
        body: text,
      };

      if (title === '') {
        DATA.title = post.title;
      } else if (text === '') {
        DATA.body = post.body;
      }

      editPost(DATA);
      navigate('Home');
    } else {
      alert('Há campos vazios!');
    }
  };
  return (
    <Container>
      <Content>
        <AuthorTitle>Autor selecionado: {user.name}</AuthorTitle>
        <ContainerInputTitle>
          <InputTitle
            value={title}
            placeholder={post.title}
            onChangeText={text => setTitle(text)}
            autoCorrect={true}
            multiline={false}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            maxLength={100}
          />
        </ContainerInputTitle>
        <ContainerInputText>
          <InputText
            value={text}
            placeholder={post.body}
            onChangeText={text => setText(text)}
            autoCorrect={true}
            multline={true}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
            maxLength={500}
          />
        </ContainerInputText>
        <ButtonCreate onPress={handleEdit}>
          <ButtonText>Editar postagem</ButtonText>
        </ButtonCreate>
      </Content>
    </Container>
  );
};
