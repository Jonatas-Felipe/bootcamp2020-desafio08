import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import logo from '../../assets/logo.png';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  background-color: #191920;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 50px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 150px;
`;

export const CartButton = styled.TouchableOpacity`
  flex-direction: row;
  position: relative;
`;

export const QtdFloat = styled.Text`
  background: #7159c1;
  color: #fff;
  text-align: center;
  width: 20px;
  border-radius: 10px;
  position: absolute;
  right: -10px;
  top: -5px;
`;
