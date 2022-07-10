import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(46)}px;
  text-align: center;
  margin-top: 30%;
`;

export const Image = styled.Image`
  margin-top: 10%;
  width: 300px;
  height: 300px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10%;
  width: 60%;
  height: 8%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;
