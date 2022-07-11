import {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactElement,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPost } from '../model/posts';
import { IUser } from '../model/User';
import api from '../services/api';
import { Alert } from 'react-native';

export interface IContext {
  posts: IPost[],
  users: IUser[],
  addPost(data: IPost): void;
  editPost(data: IPost): void;
  removePost(data: IPost): void;
  loading: boolean;
}

const postData = '@Data:posts';
const userData = '@Data:users';

interface IProps {
  children: ReactElement;
}

export const Context = createContext<IContext>(
  {} as IContext,
);

export const ContextProvider: FunctionComponent<IProps> = ({children}) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=> {
    async function loadPosts() {
      setLoading(true);
      const posts = await AsyncStorage.getItem(postData);
      if ( posts ) {
        setPosts(JSON.parse(posts));
      } else {
        try {
          const responsePosts = await api.get<IPost[]>('posts');
          await AsyncStorage.setItem(postData, JSON.stringify(responsePosts.data));
          setPosts(responsePosts.data);
        } catch (error) {
          throw new Error(error as string)
        }
      }
    }
    async function loadUsers() {
      const users = await AsyncStorage.getItem(userData);
      if ( users ) {
        setUsers(JSON.parse(users));
      } else {
        try {
          const responseUsers = await api.get<IUser[]>('users');
          await AsyncStorage.setItem(userData, JSON.stringify(responseUsers.data));
          setUsers(responseUsers.data);
        } catch (error) {
          throw new Error(error as string)
        }
      }
    }
    loadPosts();
    loadUsers();
    setLoading(false);
  }, []);

  const addPost = async (post: IPost) => {
    await api.post('posts', post).then(async (response) => {
      if(response.status === 201) {
        try {
          const newListPost = [...posts, post];
          setPosts(newListPost);
          await AsyncStorage.setItem(postData, JSON.stringify(newListPost));
          Alert.alert("Success", "Post made");
        } catch (error) {
          throw new Error(error as string);
        }
      } else {
        Alert.alert("Error", `Status error: ${response.status}`);
      }
    })
  }
  const editPost = async (post: IPost) => {
    await api.put(`posts/${post.id}`, post).then(async (response) => {
      if(response.status === 200) {
        try {
          const newListPosts = posts.map(posts => {
            if(posts.id === post.id) {
              return post;
            }
            return posts;
          });
          await AsyncStorage.setItem(postData, JSON.stringify(newListPosts));
          setPosts(newListPosts);
          alert("Post changed!");
        } catch (error) {
          throw new Error(error as string);
        }
      } else {
        Alert.alert("Error", `Status error: ${response.status}`);
      }
    })
  }
  const removePost = async (post: IPost) => {
    await api.delete(`posts/${post.id}`).then(async (response) => {
      if(response.status === 200) {
        try {
          const newListPost = posts.filter((item) => item.id !== post.id);
          await AsyncStorage.setItem(postData, JSON.stringify(newListPost));
          Alert.alert('Success', 'Post successfully deleted');
          setPosts(newListPost);
        } catch (error) {
          throw new Error(error as string);
        }
      } else {
        Alert.alert("Error", `Status error: ${response.status}`);
      }
    })
  }

  return (
    <Context.Provider
      value={{posts: posts, users, addPost, editPost, removePost, loading}}
    >
      {children}
    </Context.Provider>
  );
}
