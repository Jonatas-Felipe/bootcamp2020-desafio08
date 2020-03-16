import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  padding: 20px;
  flex: 1;
`;

export const CardCart = styled.View`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  justify-content: center;
  flex: 1;*
`;

export const Product = styled.View`
  margin-bottom: 10px;
`;

export const InfoProduct = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const DetailsProduct = styled.View`
  flex: 1;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const NameProduct = styled.Text``;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const InfoProductQtd = styled.View`
  background: #eee;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

export const QtdProduct = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

export const QtdButton = styled.TouchableOpacity``;

export const QtdNumber = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  border-radius: 4px;
  margin: 10px 5px;
  height: 30px;
  width: 60px;
  padding: 0 10px;
  border: 1px solid #ddd;
`;

export const PriceSubTotal = styled.Text`
  font-weight: bold;
  margin-right: 10px;
`;

export const Total = styled.View``;

export const TextTotal = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #999;
`;

export const PriceTotal = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const ButtonFinaly = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  padding: 15px;
  margin-top: 10px;
`;

export const TextFinaly = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const EmptyCart = styled.View`
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;
