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
import {Alert} from 'react-native';

interface IParams {
  user: IUser;
  post: IPost;
}

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

export const ViewPost: FunctionComponent = () => {
  const route = useRoute();
  const routeParams = route.params as IParams;
  const user = routeParams.user;
  const post = routeParams.post;
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const {posts, addPost, removePost} = React.useContext(Context);


  const handleEdit = () => {
    navigate("Edit", { post, user });
  };

  const handleRemove = () => {
    Alert.alert('Atenção!', 'Deseja realmente excluir esse Post?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Continuar',
        onPress: () => handleRemoveSuccess(),
      },
    ]);
  };

  const handleRemoveSuccess = () => {
    removePost(post);
    navigate('Home');
  };

  return (
    <Container>
      <Content>
        <AuthorTitle>Autor selecionado: {user.name}</AuthorTitle>
        <ContainerInputTitle>
          <InputTitle
            value={post.title}
            editable={false}
            multiline={true}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
          />
        </ContainerInputTitle>
        <ContainerInputText>
          <InputText
            value={post.body}
            editable={false}
            multiline={true}
            placeholderTextColor="rgba(0, 0, 0, 0.25)"
          />
        </ContainerInputText>
        <ButtonCreate onPress={handleEdit}>
          <ButtonText>Editar</ButtonText>
        </ButtonCreate>
        <ButtonCreate onPress={handleRemove}>
          <ButtonText>Apagar</ButtonText>
        </ButtonCreate>
      </Content>
    </Container>
  );
};
