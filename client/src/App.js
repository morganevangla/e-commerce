import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/home/Navbar'
import Categorie from './components/wine/Categorie'
import Produit from './components/wine/Produit'
import Home from './components/home/Home'
import Footer from './components/home/Footer'
import Login from './components/connexion/Login'
import Register from './components/connexion/Register'
import Panier from './components/panier/Panier'
import Profile from './components/user/Profile'
import "bootswatch/dist/journal/bootstrap.min.css"
import ModifProfile from './components/user/modifProfile';
import NavbarAdmin from './components/admin/NavbarAdmin';
import ProduitsAdmin from './components/admin/ProduitsAdmin';
import IndexAdmin from './components/admin/IndexAdmin';
import ModifProduitsAdmin from './components/admin/ModifProduitsAdmin';
import InscritsAdmin from './components/admin/InscritsAdmin';
import LivraisonAdmin from './components/admin/LivraisonAdmin';
import SavAdmin from './components/admin/SavAdmin';
import FicheInscritsAdmin from './components/admin/FicheProfilAdmin';
import FinalCommande from './components/panier/FinalCommande'
import SavMessageAdmin from './components/admin/SavMessageAdmin';
import "./App.css"

// import Cart from './components/home/Cart'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        lenght_cart:0
    };
    this.handleChangeCart = this.handleChangeCart.bind(this)
}

componentDidMount(){
  this.handleChangeCart()
}  

handleChangeCart() {
    var cart = JSON.parse(localStorage.getItem("cart_id"))
    this.setState({ cart: cart });
    var array_cart = Object.entries(cart);
    this.setState({lenght_cart: array_cart.length})
  }

  render() {
    return (
      <Router>
        <div className="App">
        <header>
          <Navbar nbr_cart = {this.state.lenght_cart}/>
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/categorie/:id" render={(props) => <Categorie {...props} handleChangeCart={this.handleChangeCart} />} />
              <Route exact path="/produit/:id" render={(props) => <Produit {...props} handleChangeCart={this.handleChangeCart} />} />
              <Route exact path="/panier" render={(props) => <Panier {...props} handleChangeCart={this.handleChangeCart} />} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/modif" component={ModifProfile} />
              <Route exact path="/navbaradmin" component={NavbarAdmin} />
              <Route exact path="/produitsadmin" component={ProduitsAdmin} />
              <Route exact path="/indexadmin" component={IndexAdmin} />
              <Route exact path="/modifproduitsadmin" component={ModifProduitsAdmin} />
              <Route exact path="/inscritsadmin" component={InscritsAdmin} />
              <Route exact path="/livraisonadmin" component={LivraisonAdmin} />
              <Route exact path="/savadmin" component={SavAdmin} />
              <Route exact path="/savmessageadmin" component={SavMessageAdmin} />
              <Route exact path="/ficheinscritsadmin" component={FicheInscritsAdmin} />
              <Route exact path="/finalcommande" component={FinalCommande} />
            </Switch>




          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    )
  }
}
export default App;
