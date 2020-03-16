import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  background: #191920;
  flex: 1;
`;

export const CardProduct = styled.View`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  justify-content: center;
  width: 250px;
  height: 400px;
  margin: 0px 10px;
`;

export const ImageProduct = styled.Image`
  width: 150px;
  height: 150px;
  margin: 20px auto;
`;

export const NameProduct = styled.Text`
  font-size: 16px;
  margin-top: 15px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
`;

export const ButtonAddCart = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
`;

export const AddIcon = styled.View`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
`;

export const QtdAddIcon = styled.Text`
  color: #fff;
`;

export const TextAddIcon = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  flex: 1;
  text-align: center;
`;
