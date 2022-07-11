import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.blue};
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 10%;
`;

export const AuthorTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(22)}px;
  text-align: center;
`;

export const InputTitle = styled.TextInput`
  background-color: transparent;
  margin: 8px 2%;
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(22)}px;
  width: 320px;
`;

export const ContainerInputText = styled.View`
  margin-top: 12px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 30px;
  height: 40%;
  width: 340px;
`;

export const InputText = styled.TextInput`
  background-color: transparent;
  margin: 10px;
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(22)}px;
`;

export const ButtonCreate = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 4%;
`;

export const ContainerInputTitle = styled.View`
  margin: 8px 2%;
  background-color: #fff;
  border-radius: 8px;
`;
