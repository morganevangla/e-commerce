import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from '../admin/NavbarAdmin.js'
import { Button } from 'react-bootstrap'


class FicheInscritsAdmin extends Component {


    render() {
        return (
            <div>
                <NavbarAdmin />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Nom</p>
                            <p>Prénom</p>
                            <p>Téléphone</p>
                            <p>Email</p>
                        </div>
                        <div className="col-md-6">
                            <p>Inscrit depuis : </p>
                            <p>Adresse (+code postal+ pays)</p>
                            <Button variant="secondary" href="" style={{ margin: "auto", textAlign: "center" }}>Voir les commandes en cours</Button>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
export default FicheInscritsAdmin