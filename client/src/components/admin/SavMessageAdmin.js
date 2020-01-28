import React, { Component } from 'react'
import "bootswatch/dist/journal/bootstrap.min.css"
import NavbarAdmin from '../admin/NavbarAdmin.js'
import './sav.css'

class SavMessageAdmin extends Component {


    render() {
        return (
            <div>
                <NavbarAdmin />


                <div className="container aviscontainer" id="avis" style={{ backgroundColor: "grey", marginBottom: "3%" }}>

                    {/* BOX COMMENTAIRES  */}

                    <div className="comments-container">
                        <ul id="comments-list" className="comments-list">
                            <li>
                                <div className="comment-main-level">
                                    {/* <!-- Avatar --> */}
                                    <div className="comment-avatar">
                                        <img src="https://www.writeups.org/wp-content/uploads/Buffy-the-Vampire-Slayer-Early-Seasons-Sarah-Michelle-Gellar-b.jpg" alt="photoprofile" />
                                    </div>

                                    {/* <!-- Commentaire --> */}
                                    <div className="comment-box">
                                        <div className="comment-head">
                                            <h6 className="comment-name">Nom Prénom</h6>
                                            <span>date du message</span>
                                        </div>
                                        <div className="comment-content">
                                        
                                            <p>messagemessagemessagemessagemessagemessagemessagemessagemessemessagessage
                                            messagemessagemessagemessagemessagemessagemessagemessagemevmessagemesse
                                            messagemessagemessagemessagemessagemessagemessagemessemessagemessagemessage
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit="" onReset="">
                        <label>

                            <textarea placeholder="Votre réponse ici…" value="" onChange="" />
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            </div>


        )
    }
}
export default SavMessageAdmin