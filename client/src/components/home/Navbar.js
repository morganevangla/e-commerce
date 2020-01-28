import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "bootswatch/dist/journal/bootstrap.min.css"
import { Image } from "semantic-ui-react";
import Wine from "../../images/wine.png"
import Cart from '../home/Cart'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lenght_cart: 0
        };
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    
    // componentDidMount() {
    //     var cart = JSON.parse(localStorage.getItem("cart_id"))
    //     this.setState({ cart: cart });
    //     var array_cart = Object.entries(cart);
    //     this.setState({lenght_cart: array_cart.length})
    // }

    displayConnect() {
        const sessionlog = JSON.parse(localStorage.getItem('usertoken'));
        if (sessionlog) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            Mon compte
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={this.logOut.bind(this)} className="nav-link">
                            Déconnexion
                        </Link>
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Connexion
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            S'inscrire
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    displayAdmin() {
        
        const sessionlog = JSON.parse(localStorage.getItem('usertoken'));
        if (sessionlog) {
            var sessionglogadmin = sessionlog.admin;
        } else {
            return;
        }
        if (sessionglogadmin) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/indexadmin" className="nav-link">
                            SuperAdmin!
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        const StyledBadge = withStyles(theme => ({
            badge: {
              right: -3,
              top: 13,
              border: `2px solid ${theme.palette.background.paper}`,
              padding: '0 4px',
            },
          }))(Badge);

        var lenght_cart = this.props.nbr_cart
        if(lenght_cart === 0){
            lenght_cart = null
        }
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="logo">
                        <Link to="/" className="nav-link col-md-2">
                            <Image
                                src={Wine}
                                alt="logo"
                                style={{ width: `100%` }}
                            />
                        </Link>
                    </li>
                </ul>
                {this.displayAdmin()}
                {this.displayConnect()}
                <ul>
                    <li className="nav-item" style={{ textAlign: "right" }}>
                        <Cart /><Link data-toggle="modal" data-target="#cartModal" to="/panier" className="nav-link paniernav" style={{ fontSize: `30px`, color: "red" }}>
                        <IconButton aria-label="cart" color="secondary">
                            <StyledBadge badgeContent={lenght_cart} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                        </IconButton>
                        </Link> 
                    </li>
                </ul>
                
            </nav>
        )
        
    }
}


export default withRouter(Navbar)