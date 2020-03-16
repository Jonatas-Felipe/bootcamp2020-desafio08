import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/action';

import {
  Container,
  CardProduct,
  ImageProduct,
  NameProduct,
  Price,
  ButtonAddCart,
  AddIcon,
  QtdAddIcon,
  TextAddIcon,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProduct();
  }, []);

  function handlePress(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardProduct>
            <ImageProduct source={{ uri: item.image }} />
            <NameProduct>{item.title}</NameProduct>
            <Price>{item.priceFormatted}</Price>
            <ButtonAddCart onPress={() => handlePress(item.id)}>
              <AddIcon>
                <Icon name="add-shopping-cart" size={24} color="#fff" />
                <QtdAddIcon>{amount[item.id] || 0}</QtdAddIcon>
              </AddIcon>
              <TextAddIcon>Adicionar</TextAddIcon>
            </ButtonAddCart>
          </CardProduct>
        )}
      />
    </Container>
  );
}
