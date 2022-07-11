import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  align-items: flex-end;

`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2%;
`;

export const UserContainer = styled.View`
  height: 110px;
  width: 60%;
  background-color: ${({theme}) => theme.colors.blue};
  text-align: center;
  padding: 2%;
  justify-content: center;
`;

export const SelectContainer = styled.TouchableOpacity`
  height: 110px;
  width: 20%;
  background-color: ${({theme}) => theme.colors.primary};
  text-align: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  margin: 5%;
`;

export const ContentImage = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.blue};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ImageUser = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border-color: ${({theme}) => theme.colors.primary};
  border-width: 2px;
`;

export const NameUser = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.blue};
`;
