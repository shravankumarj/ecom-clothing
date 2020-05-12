import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemCount } from '../../redux/cart/cart.selector'

import { ReactComponent as ShoppingIcon } from '../../../src/assests/shoppingbag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    console.log(itemCount)
    return (

        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div >
    )
}

const mapDispatchToPros = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => {
    console.log(state)
    return {

        itemCount: selectCartItemCount(state)

    }
}

export default connect(mapStateToProps, mapDispatchToPros)(CartIcon)