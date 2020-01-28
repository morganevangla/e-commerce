import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from '../admin/NavbarAdmin.js'
import { Button } from 'react-bootstrap'


class SavAdmin extends Component {


    render() {
        return (
            <div>
                <NavbarAdmin />

                <div className="container" style={{ backgroundColor: "#CECECE", padding: "10px" }}>
                    <div className="row">
                        <div className="col-md-1">
                            <h5>Nom</h5>
                        </div>
                        <div className="col-md-1">
                            <h5>Prénom</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Email</h5>
                        </div>
                        <div className="col-md-1">
                            <h5>Etat</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Message</h5>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>

                <div className="container" style={{ borderBottom: "2px solid #CECECE", padding: "1em" }}>
                    <div className="row">
                        <div className="col-md-1">
                            <p>nomuser</p>
                        </div>
                        <div className="col-md-1">
                            <p>prenomuser</p>
                        </div>
                        <div className="col-md-3">
                            <p>mailuser</p>
                        </div>
                        <div className="col-md-1">
                            <select>
                                <option value="pas">Pas lu</option>
                                <option value="lu">Lu</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                        <p>début du message</p>
                        </div>
                        <div className="col-md-2">
                        <Button variant="secondary" href="/savmessageadmin">Afficher</Button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default SavAdmin