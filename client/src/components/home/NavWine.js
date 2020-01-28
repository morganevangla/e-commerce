import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import API from "../../utils/API"
import Button from '@material-ui/core/Button';


class NavWine extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorie: [],
            wine: [],
            updateCat: this.props.updateCat,
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        API.getImage().then((res) => {
            this.setState({ wine: res.data })
        }).catch(err => {
            console.log("error test", err)
        })
        API.getCategorie().then((res) => {
            this.setState({ categorie: res.data })
        }).catch(err => {
            console.log("error test", err)
        })
    }

    handleClick(id) {
        this.props.history.push(`/categorie/${id}`)
        if (this.props.updateCat) {
            this.props.updateCat(id)
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        var link = this.state.value;
        var id;
        var wines = this.state.wine;
        wines.map(function (wine) {
            if (wine.title === link) {
                return (
                    id = wine.id
                );
            }
        })

        
        this.props.history.push("/produit/"+id);
        event.preventDefault();
    }

    render() {
        const categories = this.state.categorie;
        const wines = this.state.wine;

        return (
            <nav className="navbar navbar-expand-lg navwine">
                <Form onSubmit={this.handleSubmit} className="form-inline my-5 my-lg-0 formrecherche">
                    <input onChange={this.handleChange} list="wine" className="form-control md-2" placeholder="Search" />
                    <datalist id="wine">
                        {wines.map(function (wine, j) {
                            return (
                                <Fragment key={j}>
                                    <option value={wine.title} />
                                </Fragment>
                            );
                        })
                        }
                    </datalist>
                    <Button variant="outlined" color="primary" className=" md-1 rechercher" type="submit">Rechercher</Button>
                </Form>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav winenav">
                        {categories.map(function (categorie, k) {
                            return (
                                <li key={k} className="nav-item col-md-3">
                                    <Fragment key={k} >
                                        <Link to={`/categorie/${categorie.id}`} className="nav-link" onClick={() => this.handleClick(categorie.id)}>
                                            {categorie.title}
                                        </Link>
                                    </Fragment>
                                </li>
                            );
                        }.bind(this))
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavWine)