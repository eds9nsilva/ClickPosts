import React, {FunctionComponent, useContext} from "react";
import { FlatList, ActivityIndicator } from "react-native";
import {
  Container,
  ViewLoading,
} from './styles';
import { Context } from '../../context/context';
import { ListUsers } from "../../components/ListUsers";

export const Users: FunctionComponent = () => {
  const {users, loading} = useContext(Context);

  return (
    <Container>
      {
        loading ? (
          <ViewLoading>
            <ActivityIndicator size="large" color="#fee438" />
          </ViewLoading>
        ):(
          <FlatList
            data={users}
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ListUsers  user={item} />}
          />
        )
      }
    </Container>
  )
}
