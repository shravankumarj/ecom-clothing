import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.styles.scss';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
      </Link>
            <Link className='option' to='/shop'>
                CONTACT
      </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// const mapStatetoProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartItems(state)
// })
export default connect(mapStatetoProps)(Header)