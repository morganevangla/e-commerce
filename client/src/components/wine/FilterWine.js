import React, { Component } from 'react'
import { Accordion, Card, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "react-input-range/lib/css/index.css"
import RangeSlider from './Filters/price'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

class FilterWine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
      region: [],
      alliance: [],
      rating: 0
    };
  }

  updateValue(value) {
    this.props.priceUpdate(value);
  }

  updateRating(rating){
    this.props.ratingReload(rating)
  }

  updateRegion(region){
    this.props.regionReload(region)
  }

  handleChangeRegion = (e) => {
    this.setState({
      [e.target.region]: e.target.value
    })
  }

  render() {
    return (
      <Accordion>
        <Form action="">

          {/* __________________TRIER PAR  ____________________*/}
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Trier par
      </Accordion.Toggle>
           </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <select>
                    <option>Trier par</option>
                    <option value="Prix croissant" onClick={this.props.orderAsc}>Prix croissant</option>
                    <option value="Prix decroissant" onClick={this.props.orderDesc}>Prix decroissant</option>
                  </select>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Form>

        {/* __________________FILTRES PAR PRIX ____________________*/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Prix
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Form method="get">
                <div>
                <RangeSlider updateValue={this.updateValue.bind(this)}/>
                <Button variant="outlined" color="secondary" onClick={this.props.reloadDisplay}>
        Valider
      </Button>
                </div>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* __________________FILTRES PAR ALLIANCES ____________________*/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Alliance
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul className="Filter-nav">

                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Agneau
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Charcuterie
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Coquillages et crustacés
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Foie gras
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Fromage corsé
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      Fromage doux
                    </Link>
                  </Form>
                </li>
                <li style={{ listStyle: "none" }}>
                  <Form action="#" method="get">
                    <Link style={{ textDecoration: "none" }} to="#" className="Filter-link">
                      viande rouge
                    </Link>
                  </Form>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


        {/* __________________FILTRES PAR REGIONS ____________________*/}

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Région
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul className="Filter-nav">
              <li style={{ listStyle: "none" }}>
                <p><Link onClick={this.props.reloadDisplay}> Toute les régions</Link></p>
                </li>
                <li style={{ listStyle: "none" }}>
                <p><Link onClick={(e) => this.updateRegion("Languedoc-Roussillon",e)}> Languedoc-Roussillon</Link></p>
                </li>
                <li style={{ listStyle: "none" }}>
                <p><Link onClick={(e) => this.updateRegion("Sud-Ouest",e)}> Sud-Ouest</Link></p>
                </li>
                <li style={{ listStyle: "none" }}>
                <p><Link onClick={(e) => this.updateRegion("Bordeaux",e)}> Bordeaux</Link></p>
                </li>
                <li style={{ listStyle: "none" }}>
                <p><Link onClick={(e) => this.updateRegion("Rhône",e)}> Rhône</Link></p>
                </li>
                <li style={{ listStyle: "none" }}>
                <p><Link onClick={(e) => this.updateRegion("Italie",e)}> Italie</Link></p>
                </li>
                <li style={{ listStyle: "none" }}>
                <p><Link onClick={(e) => this.updateRegion("Espagne",e)}> Espagne</Link></p>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

         {/* __________________FILTRES PAR NOTES ____________________*/}

         <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Notes
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul className="Filter-nav">
                <li style={{ listStyle: "none" }}>
                  <div>
                  <p><Link onClick={(e) => this.updateRating(5,e)}><Rating name="read-only" value={5} readOnly size="small" /> 5 étoiles</Link></p>
                  <p><Link onClick={(e) => this.updateRating(4,e)}><Rating name="read-only" value={4} readOnly size="small" /> 4 étoiles</Link></p>
                  <p><Link onClick={(e) => this.updateRating(3,e)}><Rating name="read-only" value={3} readOnly size="small" /> 3 étoiles</Link></p>
                  <p><Link onClick={(e) => this.updateRating(2,e)}><Rating name="read-only" value={2} readOnly size="small" /> 2 étoiles</Link></p>
                  <p><Link onClick={(e) => this.updateRating(1,e)}><Rating name="read-only" value={1} readOnly size="small" /> 1 étoile</Link></p>
                  <p><Link onClick={(e) => this.updateRating(0,e)}><Rating name="read-only" value={0} readOnly size="small" /> Pas d'avis</Link></p>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}

export default FilterWine