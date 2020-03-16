import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import { Container, Logo, CartButton, QtdFloat } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <QtdFloat>{cartSize}</QtdFloat>
      </CartButton>
    </Container>
  );
}
