
import React, { Fragment } from "react";
import NavWine from '../home/NavWine'
import './profile.css'
import { Link } from "react-router-dom"
import API from "../../utils/API";
import Button from '@material-ui/core/Button';



export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
        };
    }

    componentDidMount() {
        const email = JSON.parse(localStorage.getItem('usertoken'));
        API.getProfile(email).then((res) => {
            this.setState({ user: res.data })
        }).catch(err => {
            console.log("Profile ", err)
        })
    }

    render() {
        const info = this.state.user;
        return (
            <div>
                <NavWine />
                <div className="container">
                    <div className="row">
                        <div id="bienvenue">
                            {info.map(function (user, i) {
                                return (
                                    <Fragment key={i}>
                                        <h3 >Bienvenue {user.prenom}</h3>
                                    </Fragment>
                                );
                            })
                            }
                        </div>
                    </div>

                    <div className="row">
                        <ul className="navProfile">
                            <li><Link to="/profile" className="detailsnav">MES INFORMATIONS PERSONNELLES</Link></li>
                            <li><Link to="/profile" className="detailsnav">HISTORIQUE D'ACHATS</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="container infoPerso">
                    <div className="row">
                        <h5 className="titre">MES INFORMATIONS PERSONNELLES</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6 infofofo">
                            {info.map(user => {
                                return (
                                    <p><i>{user.nom} {user.prenom}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                const event = new Date(user.anniversaire.date);
                                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                return (

                                    <p>{event.toLocaleString('fr-FR', options)}</p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i class="fas fa-phone-alt"></i> <i>0{user.tel}</i></p>
                                );
                            })
                            }
                            {info.map(user => {

                                return (
                                    <p><u><i>{user.email.toString()}</i></u></p>
                                );
                            })
                            }
                        </div>
                        <div className="col-md-6">
                            <p>Adresse de livraison</p>
                            <p><u>Adresse de facturation</u></p>
                            {info.map(user => {
                                return (
                                    <p><i>{user.nom} {user.prenom}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i>{user.adresse}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i>{user.postal} {user.ville}</i></p>
                                );
                            })
                            }
                            {info.map(user => {
                                return (
                                    <p><i>{user.pays}</i></p>
                                );
                            })
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 modifinfoperso">
                            <Link to="/profile/modif" style={{ color: "#73150D" }}>Modifier mes informations pesonnelles</Link>
                        </div>

                    </div>
                </div>

                <div className="container histAchats">
                    <div className="row">
                        <h5 className="titre">HISTORIQUE D'ACHATS</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Suivi de commande</p>
                        </div>
                        <div className="col-md-6">
                            <p>Factures</p>
                        </div>
                    </div>
                    <div className="row">
                        <form className="btn-contact">
                            <Button type="submit" variant="outlined" color="primary" className="contactmail">CONTACTEZ NOUS PAR MAIL</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

