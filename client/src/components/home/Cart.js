import React, { Component } from 'react'
import API from '../../utils/API'
import './cart.css'


class Cart extends Component {


    constructor(props){
        super(props)
        this.state = {
          panier: []
        };
      }
    
      componentDidMount() {
        API.getImage().then((res) => {
          this.setState({ panier: res.data })
        }).catch(err => {
    console.log("error test", err)
        })
      }
    
render(){
    const resultPanier = this.state.panier;
    return(
    <div className="modal" id="cartModal" role="dialog" aria-labelledby="cartModal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title" id="myModalLabel"><i className="glyphicon glyphicon-shopping-cart"></i>Mon panier</h4>
                </div>
                    <div className="modal-body">
                        <div className="table-responsive">
                            <table className="table">
                            <tbody>
                            {resultPanier.map(paniers => { return( 
                            <tr>
                                <td><img className="attachment-shop_catalog" width="30" height="30" alt="logo panier" src={paniers.picture}/></td>
                                <td>{paniers.title} </td>
                                <td>{paniers.price}  €</td>
                                <td>x1</td>
                            </tr>
                                );
                             })}
                             </tbody>
                            </table>
                        </div>
                            <p className="total-price lead text-right">Total : 390.00 €</p>
                    </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" type="button" data-dismiss="modal">Fermer</button>
                            <button className="btn btn-primary" type="button">Finaliser ma commande </button>
                        </div>
                </div>
            </div>
        </div>
    )}
}
export default Cart