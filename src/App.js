import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { createStructuredSelector } from 'reselect'
import { Switch, Route, redirect, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage.componet'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAngSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectCollectionsForPreview, selectCollection } from './redux/shop/shop.selectors'

class App extends React.Component {

  unsubscribeFromAuth = null
  componentDidMount() {
    const { selectCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }

      setCurrentUser(userAuth);
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ? (<Redirect to='/' />) : <SignInAngSignUpPage />
            } />
        </Switch>
      </div >
    )
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
