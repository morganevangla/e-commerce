import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from '../admin/NavbarAdmin.js'
import { Table } from 'react-bootstrap'

class IndexAdmin extends Component {


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <NavbarAdmin />
                    </div>
                    {/* Tableau général du site  */}
                    <div className="col-md-9">
                        <Table striped bordered hover variant="dark"  style={{ marginTop : "1%" }}>
                            <thead>
                                <tr>
                                    <th>Nombre de Visites</th>
                                    <th>Nombre de Commandes</th>
                                    <th>Ventes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3000</td>
                                    <td>2470</td>
                                    <td>53700 $</td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* état de mes commandes */}
                        <div>
                           <h1 style={{ margin : "auto" }}> ETAT DES COMMANDES</h1>
                            <Table triped bordered hover size="sm" responsive="sm">
                            <thead>
                                <tr>
                                    <th>Commandes en cours</th>
                                    <th>En attente de payement</th>
                                    <th>Commandes en cours de livraison</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>17</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default IndexAdmin