import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import "bootswatch/dist/journal/bootstrap.min.css"
import API from "../../utils/API"
import { Button } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
import "./Slide.css"



// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
class Slide extends Component {

  constructor(props) {
    super(props)

    this.state = {
      image: []
    };
  }

  componentDidMount() {
    API.getImage().then((res) => {
      this.setState({ image: res.data })
    }).catch(err => {
      console.log("error test", err)
    })
  }
  handleClick(id) {
    this.props.history.push("../produit/" + id)
    if (this.props.updateLink) {
        this.props.updateLink(id)
    }
}

  render() {
    const images = this.state.image;

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        paritialVisibilityGutter: 60
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        paritialVisibilityGutter: 50
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5,
        paritialVisibilityGutter: 30
      }
    };

    return (
      <Carousel
        partialVisbile

        itemClass="image-item"
        responsive={responsive}
        infinite={true}
      >
        {images.map(image => {
          return (
            <figure id="vinslide" className="vinslide" style={{ margin: "4%" }}>
              <Image
                key={image.id}
                draggable={false}
                style={{ width: `50%`, height: `50%`, margin: "6%" }}
                src={image.picture}
              />
              <figcaption id="desc" className="desc">
                <p>{image.description}</p>
                <Button variant="outlined" color="secondary" >
                  <Link to={"../produit/" + image.id} className="nav-link" onClick={() => this.handleClick(image.id)}>
                    En voir plus
                  </Link>
                </Button>
              </figcaption>
            </figure>
          );
        })}
      </Carousel>
    );
  };
}


export default withRouter(Slide);

