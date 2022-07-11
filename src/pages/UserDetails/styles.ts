import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const ContentAvatar = styled.View`
  align-items: center;
  margin-top: 6%;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 48px;
  border-color: ${({theme}) => theme.colors.primary};
  border-width: 4px;
`;

export const ContentDetails = styled.View`
  flex-direction: row;
  margin: 5%;
`;

export const ViewTitle = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin: 5%;
`;

export const ViewDetail = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const TextDetail = styled.Text`
  color: ${({theme}) => theme.colors.blue};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  margin: 5%;
`;

export const ViewSubTitle = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 100px;
  align-items: center;
`
export const ContentDetailsSub = styled.View`
  flex-direction: column;
  margin: 5%;
`;
