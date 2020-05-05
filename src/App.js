import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Homepage from './pages/homepage.componet'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAngSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  unsubscribeFromAuth = null
  componentDidMount() {
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

      this.props.setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAngSignUpPage} />
        </switch>
      </div>
    )
  }

}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
