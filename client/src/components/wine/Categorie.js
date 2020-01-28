import React, { Component } from 'react'
import NavWine from '../home/NavWine'
import API from '../../utils/API'
import { Image } from "semantic-ui-react";
import Banner from '../home/Banner'
import FilterWine from './FilterWine';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

class Categorie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: [],
      rating: 0,
      Pagecategorie: [],
      resultMap: []
    };
    this.reloadDisplay = this.reloadDisplay.bind(this)
    this.ratingReload = this.ratingReload.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.updateCat(id)

  }

  orderAsc() {
    var resultMap = []
    const Pagecategories = this.state.Pagecategorie;

    Pagecategories.sort(function (a, b) {
      return a.price - b.price;
    });
    Pagecategories.forEach(function (Pagecategories) {
    })
    Pagecategories.map(Pagecategorie => {

      resultMap.push(
        <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
          <Image src={Pagecategorie.picture} />
          <h3>{Pagecategorie.title}</h3>
          <p>{Pagecategorie.description}</p>
          <p>Note :</p> <Rating name="read-only" value={Pagecategorie.note} precision={0.5} readOnly />
          <h6 style={{ textAlign: 'right' }}>{Pagecategorie.price} €</h6>
          <Button variant="outlined" color="secondary" >
            <Link to={"../produit/" + Pagecategorie.id} className="nav-link">
              Voir plus
           </Link>
          </Button>
          <Button variant="outlined" color="primary" onClick={() => this.submitCartForm(Pagecategorie.id)}>
            Ajouter au panier
           </Button>
        </div>
      )
    });
    this.setState({ resultMap })
  }

  orderDesc() {
    var resultMap = []
    const Pagecategories = this.state.Pagecategorie;

    Pagecategories.reverse(function (a, b) {
      return a.price - b.price;
    });
    Pagecategories.forEach(function (Pagecategories) {
    })
    Pagecategories.map(Pagecategorie => {

      resultMap.push(
        <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
          <Image src={Pagecategorie.picture} />
          <h3>{Pagecategorie.title}</h3>
          <p>{Pagecategorie.description}</p>
          <p>Note :</p> <Rating name="read-only" value={Pagecategorie.note} precision={0.5} readOnly />
          <h6 style={{ textAlign: 'right' }}>{Pagecategorie.price} €</h6>
          <Button variant="outlined" color="secondary" >
            <Link to={"../produit/" + Pagecategorie.id} className="nav-link">
              Voir plus
           </Link>
          </Button>
          <Button variant="outlined" color="primary" onClick={() => this.submitCartForm(Pagecategorie.id)}>
            Ajouter au panier
           </Button>
        </div>
      )
    });
    this.setState({ resultMap })
  }

  regionReload(region) {
    var resultMap = []
    const Pagecategories = this.state.Pagecategorie;

    Pagecategories.map(Pagecategorie => {
      if (Pagecategorie.region === region) {
        resultMap.push(
          <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
            <Image src={Pagecategorie.picture} />
            <h3>{Pagecategorie.title}</h3>
            <p>{Pagecategorie.description}</p>
            <p>Note :</p> <Rating name="read-only" value={Pagecategorie.note} precision={0.5} readOnly />
            <h6 style={{ textAlign: 'right' }}>{Pagecategorie.price} €</h6>
            <Button variant="outlined" color="secondary" >
              <Link to={"../produit/" + Pagecategorie.id} className="nav-link">
                Voir plus
           </Link>
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.submitCartForm(Pagecategorie.id)}>
              Ajouter au panier
           </Button>
          </div>
        )
      };
    });
    this.setState({ resultMap })
  }


  priceUpdate(value) {
    this.state.value = value;
  }

  reloadDisplay() {
    var resultMap = []
    const Pagecategories = this.state.Pagecategorie;

    Pagecategories.map(Pagecategorie => {
      if (Pagecategorie.price >= this.state.value[0] && Pagecategorie.price <= this.state.value[1]) {
        resultMap.push(
          <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
            <Image src={Pagecategorie.picture} />
            <h3>{Pagecategorie.title}</h3>
            <p>{Pagecategorie.description}</p>
            <p>Note :</p> <Rating name="read-only" value={Pagecategorie.note} precision={0.5} readOnly />
            <h6 style={{ textAlign: 'right' }}>{Pagecategorie.price} €</h6>
            <Button variant="outlined" color="secondary" >
              <Link to={"../produit/" + Pagecategorie.id} className="nav-link">
                Voir plus
           </Link>
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.submitCartForm(Pagecategorie.id)}>
              Ajouter au panier
          </Button>
          </div>
        )
      };
    });
    this.setState({ resultMap })
  }

  ratingReload(rating) {
    var resultMap = []
    const Pagecategories = this.state.Pagecategorie;
    Pagecategories.map(Pagecategorie => {
      if (Pagecategorie.note === rating) {
        resultMap.push(
          <div className="col-md-3" style={{ border: "black solid 2px", margin: "2%", padding: "1%", marginBottom: "10px" }}>
            <Image src={Pagecategorie.picture} />
            <h3>{Pagecategorie.title}</h3>
            <p>{Pagecategorie.description}</p>
            <p>Note :</p> <Rating name="read-only" value={Pagecategorie.note} precision={0.5} readOnly />
            <h6 style={{ textAlign: 'right' }}>{Pagecategorie.price} €</h6>
            <Button variant="outlined" color="secondary" >
              <Link to={"../produit/" + Pagecategorie.id} className="nav-link">
                Voir plus
           </Link>
            </Button>
            <Button variant="outlined" color="primary" onClick={() => this.submitCartForm(Pagecategorie.id)}>
              Ajouter au panier
            </Button>
          </div>
        )
      };
    });
    this.state.resultMap = resultMap
  }

  submitCartForm(id) {
    var cart = {};
    var verifStorage = localStorage.getItem('cart_id');
    if (verifStorage) {
      cart = JSON.parse(localStorage.getItem("cart_id"));
      if (cart[id]) {
        cart[id] += 1;
      } else {
        cart[id] = 1;
      }

      localStorage.setItem("cart_id", JSON.stringify(cart));
    }
    else {
      cart[id] = parseInt(this.state.valueinputnumber);
      localStorage.setItem("cart_id", JSON.stringify(cart));
    }
    this.props.handleChangeCart()
  }


  updateCat(id) {
    API.getPageCategorie(id).then((res) => {
      this.setState({ Pagecategorie: res.data }, () => { this.reloadDisplay() })

    }).catch(err => {
      console.log("error test", err)
    })
  }



  render() {

    return (
      <div>
        <NavWine updateCat={this.updateCat.bind(this)} />
        <Banner />
        <div className="row" style={{ marginTop: "1%" }}>
          <aside className="col-md-2 ListingProducts">
            <FilterWine
              priceUpdate={this.priceUpdate.bind(this)}
              reloadDisplay={this.reloadDisplay.bind(this)}
              ratingReload={this.ratingReload.bind(this)}
              orderAsc={this.orderAsc.bind(this)}
              orderDesc={this.orderDesc.bind(this)}
              regionReload={this.regionReload.bind(this)}
            />
          </aside>

          <div className="col-md-10 produits">
            <div className="row" style={{ marginTop: "5%" }}>
              {this.state.resultMap}
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default Categorie