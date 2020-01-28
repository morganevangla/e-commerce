import React, { Component, Fragment } from 'react'
import NavWine from '../home/NavWine'
import Slide from '../home/Slide'
import API from '../../utils/API'
import { Image } from "semantic-ui-react"
import './produit.css'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';



class Produit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isloaded: false,
            produits: [],
            comments: [],
            value: '',
            valueinputnumber: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.inputValueChange = this.inputValueChange.bind(this);
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.updateLink(id)
        API.getProduct(id).then((res) => {
            this.setState({ produits: res.data })

        }).catch(err => {
            console.log("error test", err)
        })
        API.getComments(id).then(res => {
            this.setState({ isloaded: true, comments: res.data })
        }).catch(err => console.log('erreur reat', err))
    }

    submitCartForm = async (event) => {
        event.preventDefault();
        var cart = {};
        const id = this.props.match.params.id
        var verifStorage = localStorage.getItem('cart_id');
        if (verifStorage) {
            cart = JSON.parse(localStorage.getItem("cart_id"));
            if (cart[id]) {
                cart[id] += parseInt(this.state.valueinputnumber);
            } else {
                cart[id] = parseInt(this.state.valueinputnumber);
            }

            localStorage.setItem("cart_id", JSON.stringify(cart));
        }
        else {
            cart[id] = parseInt(this.state.valueinputnumber);
            localStorage.setItem("cart_id", JSON.stringify(cart));
        }
        this.props.handleChangeCart()
    }

    // Event Commentaires

    initialState = { value: '' }

    state = this.initialState

    handleFormReset = () => {
        this.setState(() => this.initialState)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });

    }

    inputValueChange(event) {
        this.setState({ valueinputnumber: event.target.value });
    }

    handleSubmitComment(event) {
        event.preventDefault();

        const id = parseInt(this.props.match.params.id)

        const user = JSON.parse(localStorage.getItem('usertoken'));
        const info = [user.id, id, this.state.value]
        API.postComments(info).then(res => {
            API.getComments(id).then(res => {
                this.setState({ comments: res.data })
            }).catch(err => console.log('erreur reat', err))
        }).catch(err => console.log('erreur post comment', err))
        event.target.reset();
    }

    updateLink(id) {
        API.getProduct(id).then((res) => {
            this.setState({ produits: res.data }, () => { this.render() })

        }).catch(err => {
            console.log("error test", err)
        })
    }

    render() {
        const produitsInfo = this.state.produits;
        const Com = this.state.comments;


        return (
            <div>
                <NavWine />
                <div className="container">
                    <div className="row">
                        {produitsInfo.map(produit => {
                            return (
                                <div className="col-md-4 photo" style={{ padding: "10%", margin: "auto", marginBottom: "10px" }}>
                                    <Image src={produit.picture} />
                                </div>
                            );
                        })}
                        <div className="col-md-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        {produitsInfo.map(produit => {
                                            return (
                                                <h2 style={{ textAlign: "center", padding: "7%" }}>{produit.title}</h2>
                                            );
                                        })}
                                        {produitsInfo.map(produit => {
                                            return (
                                                <p style={{ textAlign: "center", padding: "7%" }}>{produit.description}</p>
                                            );
                                        })}
                                    </div>

                                    <div className="col-md-6 price">
                                        {produitsInfo.map(produit => {
                                            return (
                                                <h2 id="prix">{produit.price} €</h2>
                                            );
                                        })}
                                    </div>

                                    <div className="col-md-6" style={{ textAlign: "center" }}>
                                        <a className="voiravis" href="#avis">Voir les avis</a>

                                    </div>

                                    <div className="col-md-6">
                                        <form id="panier" onSubmit={this.submitCartForm}>
                                            <div className="row">
                                                <div className="col-md-3">

                                                    <input type="number" id="quantite" name="quantite" min="1" max="12" width="20px" value={this.state.valueinputnumber} onChange={this.inputValueChange} />

                                                </div>
                                                <div className="col-md-9 ajoutpanier">

                                                    <Button type="submit" size="small" variant="outlined" color="primary" id="btn-panier">AJOUTER AU PANIER</Button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-md-12" style={{ padding: "7%" }}>
                                        <h2>Description</h2>
                                        {produitsInfo.map(produit => {
                                            return (
                                                <p>{produit.desclong}</p>
                                            );
                                        })}
                                        {produitsInfo.map(produit => {
                                            return (
                                                <p style={{ textAlign: "center", padding: "7%" }}><u>Mis en bouteille en :</u>  {produit.annee}</p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
                        <div className="col-md-6">
                            <div>
                                {produitsInfo.map(produit => {
                                    return (
                                        <Fragment>
                                            <p>Notes : {produit.note}/5</p>  <Rating name="read-only" value={produit.note} precision={0.5} size="large" readOnly />
                                        </Fragment>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="col-md-6" style={{ textAlign: "center" }}>
                            <a className="voiravis" href="https://www.marmiton.org/" style={{ textAlign: "center" }}>Idées recettes</a>
                        </div>
                    </div>
                </div>

                <div className="container aviscontainer" id="avis">

                    <div className="row avistitre">
                        <div>
                            <h3>Avis</h3>
                        </div>
                    </div>
                    {Com.map(function (commentaire, index) {
                        const event = new Date(commentaire.dcomment.date);
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        return (
                            <Fragment>

                                {/* BOX COMMENTAIRES  */}
                                <div className="comments-container">
                                    <ul id="comments-list" className="comments-list">
                                        <li>
                                            <div className="comment-main-level">
                                                {/* <!-- Avatar --> */}
                                                <div className="comment-avatar">
                                                    <img src={`${commentaire.users.image}`} alt="photoprofile" />
                                                </div>
                                                {/* <!-- Commentaire --> */}
                                                <div className="comment-box">
                                                    <div className="comment-head">
                                                        <h6 className="comment-name">{commentaire.users.name}</h6>
                                                        <span>{event.toLocaleString('fr-FR', options)}</span>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>{commentaire.message}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmitComment.bind(this)} onReset={this.handleFormReset}>
                        <label>

                            <textarea placeholder="Votre commentaire ici…" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Envoyer" id="envoyer" />
                    </form>
                </div>
                <div className="container">
                    <Slide updateLink={this.updateLink.bind(this)} />
                </div>

            </div>

        )
    }
}
export default Produit