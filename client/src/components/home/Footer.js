import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


class Footer extends Component {


    render() {
        return (

   <div className="row" style={{ marginTop: "5%", color: "white", backgroundColor: "black" }}>
                    <div className="col-md-3" style={{ borderRight: "white solid 2px", paddingBottom: "20px" }}>
                        <p style={{ textAlign: "center", fontSize: `30px`, color: "grey" }}><i className="fas fa-envelope-open-text" ></i></p>
                        <h5>Newsletter</h5>
                        <p>La Newsletter vous permet d'être au courant de chaque activité de notre site dès sa mise en ligne ! Un nouveau produit ? Une réduction ? Ne passez pas
                            à côté de toutes nos dernières offres.
                        </p>
                        <input type="email" placeholder="Entrez votre mail"/>
                        <Button variant="secondary">S'inscrire à la Newsletter</Button>
                    </div>
                    <div className="col-md-3" style={{ borderRight: "white solid 2px", paddingBottom: "20px" }}>
                        <p style={{ textAlign: "center", fontSize: `30px`, color: "grey" }}><i className="fas fa-utensils"></i></p>
                        <h5>Nos idées accompagnements</h5>
                        <p>Pinwar s'engage à vous offrir le meilleur. C'est pourquoi notre gamme de vin est étudié pour trouver l'accompagnement parfait.</p>
                        <p>Saint-Emilion ? Chateauneuf-du-Pape ? N'hésitez plus, nous avons la réponse.</p>
                    </div>
                    <div className="col-md-3" style={{ borderRight: "white solid 2px", paddingBottom: "20px" }}>
                        <p style={{ textAlign: "center", fontSize: `30px`, color: "grey" }}><i className="fas fa-question"></i></p>
                        <h5>FAQ</h5>
                        <p>Vous ne trouvez pas l'accès à vos factures ? Comment modifier mes informations personnelles ? Devriez-vous ouvrir une bouteille de rouge ou de blanc pour
                            accompagner votre steack ?
                            Nous répondons à toutes vos questions dans les plus brefs délais.
                        </p>
                        <Button variant="secondary">Afficher la FAQ</Button>
                    </div>
                    <div className="col-md-3" style={{ borderRight: "white solid 2px", paddingBottom: "20px" }}>
                        <p style={{ textAlign: "center", fontSize: `30px`, color: "grey" }}><i className="fas fa-phone-alt"></i></p>
                        <h5>SAV</h5>
                        <p>Même après la vente nous nous engageons à vous répondre à toutes vos questions. L'équipe de Pinwar reste disponible du lundi au vendredi hors jours fériés de 9h à 18h.</p>
                        <h5>04 56 00 00 00</h5>
                        <p style={{ fontSize:"12px" }}>Prix d'une communication locale</p>
                    </div>

                </div>

        )
    }
}
export default Footer