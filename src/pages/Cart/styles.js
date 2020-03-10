import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #191920;
`;

export const ProductTable = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  width: 300px;
`;

export const Product = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: 70px;
  width: 70px;
  background: #f0f0f0;
  border-radius: 4px;
`;

export const ProductName = styled.Text`
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
`;

export const ProductInfo = styled.View`
  max-width: 140px;
  margin-left: 10px;
`;

export const RemoveButton = styled.TouchableOpacity`
  
`;

export const ProductControlButton = styled.TouchableOpacity``;


export const ProductController = styled.View`
  width: 270px;
  height: 40px;
  background-color: #ddd;
  border-radius: 4px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 5px;
`;

export const ProductAmount = styled.TextInput`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  height: 30px;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TotalContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const TotalAmount = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 20px;
`;

export const Order = styled(RectButton)`
  background-color: #7159c1;
  width: 280px;
  height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const OrderText = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
`;

export const TotalText = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
`;
