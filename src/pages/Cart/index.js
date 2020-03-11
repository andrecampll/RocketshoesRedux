import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  ProductTable,
  TotalContainer,
  TotalAmount,
  Order,
  OrderText,
  TotalText,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDetails,
  ProductInfo,
  ProductAmount,
  ProductController,
  RemoveButton,
  ProductControlButton,
  SubTotal,
  Divider,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({ cart }) {
  return (
    <Container>
      <ProductTable>
        <Product>
          <ProductDetails>
            <ProductImage source={{ uri:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg" }}></ProductImage>
            <ProductInfo>
              <ProductName>tenis legaaaaaaaaaaaaaaaaaaaaaaaal</ProductName>
              <ProductPrice>R$ 111,98</ProductPrice>
            </ProductInfo>
          </ProductDetails>
          <RemoveButton>
            <Icon name="delete-forever" size={24} color="#7159C1" />
          </RemoveButton>
        </Product>

        <ProductController>
          <Divider>
            <ProductControlButton>
            <Icon
              name="remove-circle-outline"
              size={20}
              color="#7159c1"
            />
            </ProductControlButton>
            <ProductAmount>3</ProductAmount>
            <ProductControlButton>
            <Icon
              name="add-circle-outline"
              size={20}
              color="#7159c1"
            />
            </ProductControlButton>
          </Divider>

          <SubTotal>R$100,00</SubTotal>
        </ProductController>
        
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$1231,00</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </ProductTable>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart)
