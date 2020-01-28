import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "bootswatch/dist/journal/bootstrap.min.css"
import './NavbarAdmin.css'


class NavbarAdmin extends Component {

    render() {
        return (
            <nav className="flex-column">
                <nav className="navbar-nav inline-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item admin">
                            <Link to="/IndexAdmin">
                                Index
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ProduitsAdmin">
                                Produits
                            </Link>
                        </li>
                        <li className="nav-item admin">
                            <Link to="/InscritsAdmin">
                                Inscrits
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/LivraisonAdmin">
                                Livraison
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/SavAdmin">
                                SAV
                            </Link>
                        </li>
                    </ul>
                </nav>
            </nav>
        )
    }
}

export default withRouter(NavbarAdmin)