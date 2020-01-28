import React, { Component } from 'react';
import "./FinalCommande.css";
import { ButtonGroup } from 'react-bootstrap'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import HorizontalLabelPositionBelowStepper from './Slidestepper';
import Button from '@material-ui/core/Button';
import MainScreen from './screens/MainScreen';


export default class FinalCommande extends Component {

    constructor(props) {
        super(props);
        this.state = {
            produits: [],
            nbr_product: [],
            cart: {},
            total: 0,
        };
        this.totalCart = this.totalCart.bind(this);
        
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

    infoCommande(){
        const produits = this.state.produits;
        const nbr_product = this.state.nbr_product;
        return(
            <div className="payement container">
            <div className="row">
                <div className="recap-delivery bg-light col-md-8">
                    <h2>Revue des commandes</h2>
                    <table className="table col-md-4">
                        <tbody>
                            {produits.map((produit, index) => {
                                return (
                                    <tr>
                                        <td>{produit.title}</td>
                                        <td>{nbr_product[index]}</td>
                                        <td><img alt="pif" className="pif" src={produit.picture}></img></td>
                                        <td>{produit.price}€</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                {this.state.total}€
                            </tr>
                        </tbody>
                    </table>
                    <label>Code promo :</label>
                        <div className="promo-code">
                            <input type="text" name="promo" />
                            <Button variant="outlined" color="primary" className="validation" href="/">Valider</Button>
                        </div>
                        <p>Total :</p>
                        <div className="order-now row col-md-12">
                            <p>En cliquant sur "Suivant", je confirme avoir lu et accepté les termes et conditions.</p>
                        </div>
                </div>
            </div>
        </div>
        )
    }

    adresseCommande(){
        return(
            <div className="delivery container">
            <div className="row">
                <div className="infos bg-light col-md-8">
                    <h2>Informations sur la livraison</h2>
                    <div className="delivery-buttons">
                        <ButtonGroup toggle className="buttons">
                            <ToggleButton type="radio" name="radio" defaultChecked value="1">
                                A domicile
                        </ToggleButton>
                            <ToggleButton type="radio" name="radio" defaultChecked value="2">
                                En point relais
                        </ToggleButton>
                        </ButtonGroup>
                    </div>
                    <div className="adress container">
                        <tr>
                            <td>Mr Fromage</td>
                        </tr>
                        <tr>
                            <td>Rue du fromage qui tâche</td>
                        </tr>
                        <tr>
                            <td>Roquefort City</td>
                        </tr>
                    </div>
                    <div className="add-adress row">
                        <Link class="add" type="button" role="button">
                            <p>Ajout nouvelles adresses</p>
                        </Link>
                        <Link class="selection" type="button" role="button">
                            <p>Sélection autres adresses</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    paiementCommande(){
        return(
            <MainScreen/>
        
        )
    }

    render() {
        return (
            <React.Fragment>
               <HorizontalLabelPositionBelowStepper 
               infoCommande = {this.infoCommande.bind(this)}
               adresseCommande = {this.adresseCommande.bind(this)}
               paiementCommande = {this.paiementCommande.bind(this)}
               />
            </React.Fragment>
        );
    }
}
