import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from '../admin/NavbarAdmin.js'
import { Button } from 'react-bootstrap'


class InscritsAdmin extends Component {


    render() {
        return (
            <div>
                <NavbarAdmin />

                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h5>Nom</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Prénom</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Téléphone</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>Email</h5>
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <p></p>
                        </div>
                        <div className="col-md-2">
                            <p></p>
                        </div>
                        <div className="col-md-2">
                            <p></p>
                        </div>
                        <div className="col-md-2">
                        <p></p>
                        </div>
                        <div className="col-md-2">
                        <Button variant="secondary" href="/ficheinscritsadmin">Voir plus</Button>
                        </div>
                        <div className="col-md-2">
                        <Button variant="secondary">Supprimer</Button>
                        </div>

                    </div>
                </div>

            </div>


        )
    }
}
export default InscritsAdmin