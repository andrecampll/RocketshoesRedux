import React from 'react';
import logo from '../../assets/logo.png';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Logo, BasketContainer, HeaderContent, Quantity} from './styles';

function Header({ cartSize }) {
  return (
    <HeaderContent>
      <Logo source={logo}/>
      <BasketContainer>
        <Icon name="shopping-basket" color="#FFF" size={24}/>
      </BasketContainer>
    </HeaderContent>
  );
}

export default connect(state =>({
  cartSize: state.cart.length,
}))(Header);