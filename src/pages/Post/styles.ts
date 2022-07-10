import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray500};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blue};
  width: 100%;
  height: 12%;
`;

export const Content = styled.View`
  align-items: flex-start;
  margin-left: 4%;
`;

export const AuthorTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: bold;
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(17)}px;
  text-align: center;
`;

export const InputTitle = styled.TextInput`
  background-color: transparent;
  margin: 8px 2%;
  color: #000;
  font-size: 20px;
  width: 320px;

`;

export const ContainerInputText = styled.View`
  margin-top: 12px;
  margin: 8px 2%;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 30px;

  height: 40%;
  width: 340px;
`;

export const InputText = styled.TextInput`
   background-color: transparent;
    margin: 10px;
    color: #000;
    font-size: 20px;
`;

export const ButtonCreate = styled.TouchableOpacity`
  margin-right: 7px;
  padding: 5px 12px;
  background-color: rgba(51, 176, 246, 1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
`;

export const ContainerInputTitle = styled.View`
  margin: 8px 2%;
  background-color: #fff;
  border-radius: 8px;
`;
