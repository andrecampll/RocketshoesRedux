import React, { Component } from 'react';
import api from '../../services/api';

import { Container,
 List,
 Product,
 Image,
 Name,
 Price,
 AddToCartButton,
 AddToCartText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = {
      id: response.data.id,
      image: response.data.image,
      price: response.data.price,
      title: response.data.title
    };

    this.setState({
      products: [...products, data],
    })
  }
  
  render() {
    const {products} = this.state;

    return (
      <Container>
        <List 
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <Product>
              <Image source={{ uri: item.image }}/>
              <Name>{item.title}</Name>
              <Price>{item.price}</Price>
  
              <AddToCartButton>
                <AddToCartText>ADICIONAR A0 CARRINHO</AddToCartText>
              </AddToCartButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
