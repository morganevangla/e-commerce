import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import "bootswatch/dist/journal/bootstrap.min.css"
import API from "../../utils/API"
import "./Slide.css"



// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
class SlideHome extends Component {

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

  render() {
    const images = this.state.image;

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        paritialVisibilityGutter: 50
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        paritialVisibilityGutter: 30
      }
    };

    return (
      <div >
        {/* CAROUSEL LIMIT AFFICHAGE DE BOUTEILLE !!!!!!*/}

        <Carousel
          className="col-md-8"
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
        >
          {images.map(image => {
            return (
              <div className="divslide">
                <div id="vinslide" className="vinslide" style={{ margin: "6%" }}>
                  <Image
                    key={image.id}
                    draggable={false}
                    style={{ width: `80% !important`, height: `80% !important`, margin: "6%" }}
                    src={image.picture}
                  />
                </div>
                <div className="desc-home col-md-7">
                  <div className="content-desc">
                    <p >{image.title}</p>
                    <p>{image.price} €</p>
                    <p>{image.description}</p>
                    <div className="btn-slide">
                      <Button variant="outlined" className="btn-slidehome" >
                        <Link to={"produit/" + image.id} className="nav-link">
                          Voir Plus
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  };
}


export default SlideHome;

