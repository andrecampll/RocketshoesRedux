import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container,
 List,
 Product,
 ProductImage,
 Name,
 Price,
 AddToCartButton,
 AddToCartText,
 IconArea,
 ProductAmount
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ProductImage source={ { uri: item.image } }/>
        <Name>{item.title}</Name>
        <Price>{item.price}</Price>
  
        <AddToCartButton onPress={() => this.handleAddProduct(item)}>
          <IconArea>
            <Icon name="shopping-basket" color="#FFF" size={24}/>
          </IconArea>
          <AddToCartText>ADICIONAR AO CARRINHO</AddToCartText>
        </AddToCartButton>
      </Product>
     
    );
  }
  
  render() {
    const {products} = this.state;
      return (
        <>
          <Container>
          <List 
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          />
          </Container>
        </>
      )
  }
}

export default connect()(Home);
