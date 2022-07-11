import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  margin: 8px 8px 8px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;
  padding: 11px;
`;

export const ContentHeader = styled.TouchableOpacity`
  flex-direction: row;
`;

export const HeaderPost = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: ${({theme}) => theme.colors.primary};
  border-width: 2px;
`;

export const ContentText = styled.View`
  flex-direction: column;
`;

export const TextName = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin-left: 2%;
`;

export const Username = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  margin-left: 2%;
`;

export const TitlePost = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(18)}px;
  margin-left: 2%;
  justify-content: center;
  margin-bottom: 2%;
  font-weight: bold;
`;

export const TextPost = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(16)}px;
  margin-left: 2%;
  justify-content: center;
  margin-bottom: 2%;
  text-align: left;
`;

export const Post = styled.View``;

export const ButtonPost = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: 2%;
`;

export const IconsDelete = styled(Feather)`
  color: ${({theme}) => theme.colors.blue};
`;

export const IconsEdit = styled(Feather)`
  color: ${({theme}) => theme.colors.blue};
  margin-left: 18px;
`;
