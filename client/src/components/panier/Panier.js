import React, { Component } from 'react';
import "./Panier.css";
import API from '../../utils/API'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';


export default class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produits: [],
            nbr_product: [],
            cart: {},
            total: 0,
        };
        this.totalCart = this.totalCart.bind(this);
        this.buttonNbrCart = this.buttonNbrCart.bind(this);
    }
    componentDidMount() {
        var array_cart;
        var id_product = [];
        var nbr_product = [];
        var cart = JSON.parse(localStorage.getItem("cart_id"))
        this.setState({ cart: cart });
        array_cart = Object.entries(cart);
        array_cart.forEach(element => {
            id_product.push(element[0]);
            nbr_product.push(element[1]);
        });
        API.getCart(id_product).then((res) => {
            this.setState({ produits: res.data })
            this.setState({ nbr_product: nbr_product })
            this.totalCart()
        }).catch(err => {
            console.log("error cart", err)
        })
    }
    buttonNbrCart(nbr, id, index) {
        var nbr_product = this.state.nbr_product;
        var cart = JSON.parse(localStorage.getItem("cart_id"))
        if (nbr === 1) {
            if (cart[id] > 1) {
                nbr_product[index] -= 1
                this.setState({ nbr_product: nbr_product })
                this.totalCart()
                cart[id] -= 1;
                localStorage.setItem("cart_id", JSON.stringify(cart));
            }
        } else {
            nbr_product[index] += 1
            this.setState({ nbr_product: nbr_product })
            this.totalCart()
            cart[id] += 1;
            localStorage.setItem("cart_id", JSON.stringify(cart));
        }
    }
    totalCart() {
        var produits = this.state.produits;
        var total = 0;
        var nbr_product = this.state.nbr_product;
        produits.map((produit, index) => {
            return (
                total += produit.price * nbr_product[index]
            )
        })
        this.setState({ total: total })
    }
    removeCart(id_produit) {
        var cart = this.state.cart;
        delete cart[id_produit];
        var new_produits = this.state.produits.filter(obj => { return obj.id !== id_produit })
        this.setState({ produits: new_produits }, () => {
            localStorage.setItem("cart_id", JSON.stringify(cart));
            this.totalCart();
            this.props.handleChangeCart()
        })
    }
    displayCart() {
        const produits = this.state.produits;
        const nbr_product = this.state.nbr_product;
        var obj = this.state.cart;
        if (Object.entries(obj).length === 0) {
            return (
                <div className="container">
                    <div className="row" id="empty-cart">
                        <h3>Votre panier est vide.</h3>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <div className="container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Description</th>
                                    <th>Prix</th>
                                    <th>Quantité</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* boucle foreach : pour chaque élément dans mon tableau */}
                                {produits.map((produit, index) => {
                                    return (
                                        <tr>
                                            <td><img alt="pif" className="pif" src={produit.picture}></img></td>
                                            <td>{produit.description}</td>
                                            <td>{produit.price}€</td>
                                            <td><Icon className="fa fa-minus-circle" fontSize="small" onClick={(e) => this.buttonNbrCart(1, produit.id, index, e)} />{nbr_product[index]}<Icon className="fa fa-plus-circle" fontSize="small" onClick={(e) => this.buttonNbrCart(0, produit.id, index, e)} /></td>
                                            <td>
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon onClick={(e) => this.removeCart(produit.id, e)} />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" align="right">Livraison :</td>
                                    <td>0€</td>
                                </tr>
                                <tr>
                                    <td colspan="4" align="right">Total :</td>
                                    <td>{this.state.total}€</td>
                                </tr>
                                <tr>
                                    <td colspan="5" align="right">
                                        <Button variant="outlined" color="primary" id="finalisation" href="/FinalCommande">Finaliser la commande</Button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row" id="cart">
                    <h1>Votre panier</h1>
                </div>
                <div className="row" id="form">
                    {this.displayCart()}
                </div>
            </div>
        );
    }
};

