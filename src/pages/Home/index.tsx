import React, {FunctionComponent, useContext} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Brand,
  Container,
  Header,
  ViewLoading,
  ButtonNewPost,
  TitleNewPost,
} from './styles';
import brand from '../../assets/click.png';
import {Context} from '../../context/context';
import {PostList} from '../../components/ListPosts';
import {IPost} from '../../model/posts';

interface ScreenNavigationProp {
  navigate: (screem: string) => void;
}

export const Home: FunctionComponent = () => {
  const {posts, users, loading} = useContext(Context);
  const navigation = useNavigation<ScreenNavigationProp>();

  const findAuthorPost = (post: IPost) => {
    const authorIndex = users.findIndex(x => {
      return x.id === post.userId;
    });
    return authorIndex;
  };

  return (
    <Container>
      <Header>
        <Brand source={brand} />
      </Header>
      {loading ? (
        <ViewLoading>
          <ActivityIndicator size="large" color="#fee438" />
        </ViewLoading>
      ) : (
        <FlatList
          data={posts.slice().reverse()}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          renderItem={({item}) => (
            <PostList post={item} user={users[findAuthorPost(item)]} />
          )}
        />
      )}
      <ButtonNewPost
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('Users');
        }}>
        <TitleNewPost>create new post</TitleNewPost>
      </ButtonNewPost>
    </Container>
  );
};
