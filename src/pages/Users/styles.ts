import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  height: 12%;
`;

export const ViewLoading = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Brand = styled.Image`
  margin-top: 6%;
  width: 14%;
  height: 50%;
`;

export const ButtonNewPost = styled.TouchableOpacity`
  position: absolute;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  justify-content: center;
  align-items: center;
  z-index: 99;
  bottom: 0;
  flex-direction: row;
`;

export const TitleNewPost = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(22)}px;
  text-align: center;
`;
