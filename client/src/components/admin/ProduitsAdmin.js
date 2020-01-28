import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from './NavbarAdmin.js'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'




export default class ProduitsAdmin extends Component {

    render() {
        return (
            <div>
                <NavbarAdmin />
                <div className="container" style={{ borderBottom: "solid 5px black", padding: "1em" }}>
                    <div className="row">
                        <h3 style={{ margin: "auto", textAlign: "center", marginBottom: "1em" }}>Ajouter un nouveau produit</h3>
                    </div>
                    <form>
                        <div className="row">

                            <div className="col-md-2">
                                <input type="image" value="photo" alt="vin" />
                            </div>
                            <div className="col-md-2">
                                <input type="text" placeholder="Nom du produit" />
                            </div>
                            <div className="col-md-2">
                                <select name="Categorie" value="">
                                    <option value="rouge">Vin rouge</option>
                                    <option value="blanc">Vin blanc</option>
                                    <option value="rose">Vin rosé</option>
                                    <option value="prestige">Prestige</option>
                                    <option value="promotion">Promotion</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <input type="text" placeholder="Petite description du produit" />
                            </div>
                            <div className="col-md-2">
                                <input type="number" placeholder="Prix" />
                            </div>
                            <div className="col-md-2">
                                <Link to="">Ajouter</Link>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="container" style={{ padding: "2em" }}>
                    <div class="row" style={{ paddingBottom: "2em" }}>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-2">
                            <h5>Vins</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Nom</h5>
                        </div>
                        <div className="col-md-1">
                            <h5>Catégorie</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Statut</h5>
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>

                    <form action="">
                        <div className="row" style={{ borderBottom: "solid 1px black" }}>
                            <div className="col-md-1">
                                <input type="checkbox" name="" value="" />
                            </div>
                            <div className="col-md-2">
                                <input type="image" src="https://i.ytimg.com/vi/X9eJYX9IkZo/maxresdefault.jpg" alt="logo" style={{ width: "5.5em" }} />
                            </div>
                            <div className="col-md-2">
                                <p>nom du produit</p>
                            </div>
                            <div className="col-md-1">
                                <p>rouge/blanc</p>
                            </div>
                            <div className="col-md-2">
                                <p>promo ou nouveauté</p>
                            </div>
                            <div className="col-md-4">
                                <div className="row" style={{ textAlign: "center", paddingLeft: "2em" }}>
                                    <form >
                                        <div className="col-md-6" style={{ float: "right" }}>
                                            <Link to="" style={{ marginLeft: "40px" }}>Supprimer</Link>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/modifproduitsadmin" style={{ marginLeft: "20px" }}>Modifier</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Button style={{ marginTop: "2em", marginRight: "2em" }}>Tout sélectionner</Button>
                        <Button style={{ marginTop: "2em" }}>Supprimer</Button>
                    </form>

                </div>
            </div>
        )
    }
}