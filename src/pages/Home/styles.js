import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #191920;
`;

export const List = styled.FlatList``;
export const Product = styled.View`
  color: #FFF;
  background: #FFF;
  border-radius: 4px;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
`;
export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;
export const Name = styled.Text`
  color: #191920;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const AddToCartButton = styled(RectButton)`
  flex-direction: row;
  background-color: #7159c1;
  width: 250px;
  height: 50px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
`;

export const IconArea = styled.View`
  align-items: center;
`;
export const ProductAmount = styled.Text`
  color: #FFF;
`;
export const AddToCartText = styled.Text`
  color: #fff;
`;
