import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionIndexPage from './components/AuctionIndexPage';
import WelcomePage from './components/WelcomePage';
import NewAuctionPage from './components/NewAuctionPage';
import AuctionShowPage from './components/AuctionShowPage';
import {User} from './requests';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import NavBar from './components/NavBar';
import AuthContext from './context/auth-context';
import AuthRoute from './components/AuthRoute';



function App() {

  const [user, setUser] = useState(null);

  useEffect(()=> {
    getCurrentUser();
  }, [])

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) {
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser(null) }

  return (
    <AuthContext.Provider value={{ user: user }}>
    <BrowserRouter>
    <NavBar currentUser={user} onSignOut={onSignOut} />
    <Switch>
      <Route exact path='/sign_in'
        render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}>
      </Route>
      <Route
          exact path='/sign_up'
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
        >
      </Route>
      <Route  exact path='/' component={WelcomePage}/>
      <Route exact path="/auctions" component={AuctionIndexPage} />
      <AuthRoute isAuthenticated={!!user} path='/auctions/new' component={NewAuctionPage}></AuthRoute>
      <Route path="/auctions/:id" component={AuctionShowPage} />
    </Switch>
    </BrowserRouter>
    </AuthContext.Provider >
  );
}

export default App;
