import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from './NavbarAdmin.js'
import { Image } from "semantic-ui-react"




export default class ModifProduitsAdmin extends Component {

    render() {
        return (
            <div>
                <NavbarAdmin />
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-4 photo" style={{ padding: "10%", margin: "auto", marginBottom: "10px", border: "solid black" }}>
                                <Image src="" />
                                <p>PHOTO de base</p>
                            </div>

                            <div className="col-md-8">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Nom du produit de base" style={{ textAlign: "center", padding: "7%" }} />
                                            <input type="text" placeholder="petite description de base" style={{ textAlign: "center", padding: "7%" }} />
                                        </div>
                                        <div className="col-md-6" style={{ color: "#A61717" }}>
                                            <input type="number" id="prix" placeholder="prix de base" />
                                            <input type="number" id="reduction" placeholder="ajout reduction %" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>quantité</h5>
                                            <p>13</p>
                                            <select>
                                                <option>Stock disponible</option>
                                                <option>Rupture de stock</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6" style={{ padding: "7%" }}>
                                            <input type="text" placeholder="Longue description de base" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <input type="submit" value="Valider les modifications" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}