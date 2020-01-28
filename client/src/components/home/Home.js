import React, { Component } from 'react'
import Banner from './Banner';
import NavWine from './NavWine'
import './Home.css'
import SlideHome from './Slide-home';
import API from '../../utils/API'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"



class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        };
        this.displayCard = this.displayCard.bind(this)
    }


    componentDidMount() {
        API.getImage().then((res) => {
            this.setState({ products: res.data })
        }).catch(err => {
            console.log("error test", err)
        })
    }

    displayCard() {
        var elem = [];
        var products = this.state.products;

        if (products.length > 0) {
            for (let index = 0; index < 9; index++) {
                var random_nbr = Math.floor(Math.random() * products.length);
                elem.push(<div className="col-md-3 produit-home">
                    <img className="img-wine" alt={products[random_nbr].title} src={products[random_nbr].picture} />
                    <Button variant="outlined" color="secondary" >
                        <Link to={"../produit/"} className="nav-link">
                            Voir plus
           </Link>
                    </Button>
                </div>);
                // console.log(elem)
            }


            return elem;
        } else {
            return;
        }
    }

    render() {
 

        return (
            <div>
                <NavWine />
                <SlideHome />
                <Banner />
                <div className="container">
                    <div className="row row-produits" style={{ marginTop: "5%" }}>
                        {this.displayCard()}
                    </div>
                </div>


                <div className="container">
                <div className="row">
                    <div className="col-md-12 qsm">
                        <h1>Qui Sommes nous ? </h1>
                        <p>Fondé par cinq amis, l'entreprise Pinwar est née alors qu'Alexandre, Elise, Morgane, Alexandre et Marion était encore en études. Ils partagaient cette
                            passion du vin et décidèrent de réaliser ce rêve<br /> un peu fou qu'est d'ouvrir leur propre e-cave à vin.
                            Aujourd'hui, l'entreprise Pinwar c'est des années d'expertises, une grande quantité de vin, de l'écoute, et surtout, de la passion.
                            Pour ces cinq amis, il ne leur<br /> suffisait pas de simplement faire le lien entre le producteur et l'acheteur. En effet, ils ont fait le tour du monde à
                            la recherche des meilleurs vins.
                            Mettant leur savoir-faire à profit, Pinwar cherche, <br />découvre et harmonise pour le plaisir de vos papilles. </p>
                        <p style={{ fontSize: "18px", fontWeight: "bold", fontStyle: "italic" }}>Voulant offrir le meilleur de passionnés à passionnés.</p>
                        <p>En quelques dates, Pinwar, c'est: <br />
                            2006: rencontre des cinq amis<br />
                            2008: création de l'e-cave, et découverte du monde et des vins<br />
                            2015: création de la première cave à vin, à Rennes<br />
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home