import React, { Component, Fragment } from 'react'
import NavWine from '../home/NavWine'
import './profile.css'
import API from "../../utils/API"
import Button from '@material-ui/core/Button'





export default class ModifProfile extends Component {

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {},
          user:[]
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.submitModifProfileForm = this.submitModifProfileForm.bind(this);
    
      };

      componentDidMount(){
        const email = JSON.parse(localStorage.getItem('usertoken'));
        API.getProfile(email).then((res) =>{
            this.setState({ user: res.data })
        }).catch(err =>{
            console.log("Profile ",err)
        })
    }
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
      }

      submitModifProfileForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
          const info = this.state.user;
          let fields = {};
          {info.map(user => {
            return (
              fields["ID"] = `${user.id}`
            )})}
          fields["Picture"] = "";
          fields["Phone"] = "";
          fields["Email"] = "";
          fields["Password"] = "";
          fields["Adress"] = "";
          fields["State"] = "";
          fields["Code_zip"] = "";
          fields["From"] = "";
          this.setState({ fields: fields });
          API.editProfile(this.state.fields).then(res => {
            alert("Compte modifié !");
            window.location = "/profile"
          }).catch(err => console.log('erreur reat', err))
        }
      }
      
      validateForm() {
        const parameter = this.state.user;

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        

        if(!fields["Picture"]){
          {parameter.map(user => {
            return (
          fields["Picture"] = `${user.picture}`
            )})}
        }

        if(!fields["Phone"]){
          {parameter.map(user => {
            return (
          fields["Phone"] = `0${user.tel}`
            )})}
        }

        if(!fields["Email"]){
          {parameter.map(user => {
            return (
          fields["Email"] = `${user.email}`
            )})}
        }

        if (typeof fields["Email"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["Email"])) {
            formIsValid = false;
            errors["Email"] = "*Merci de renseigner un Email valide";
          }
        }

        if(!fields["Password"]){
          fields["Password"] = "";
          fields["Password2"] ="";
        }
        
        if (fields["Password"] !== fields["Password2"]) {
          
          if (!fields["Password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%&]).*$/)) {
            formIsValid = false;
            errors["Password"] = "*Votre mot de passe doit contenir une lettre en majuscule et un caractère spéciaux, minimum 8 caractères.";
          }

          formIsValid = false;
          errors["Password2"] = "Les mots de passe ne sont pas identiques"
        }
        
        if(!fields["Code_zip"]){
          {parameter.map(user => {
            return (
          fields["Code_zip"] = `${user.postal}`
            )})}
        }

    
        if(!fields["Adress"]){
          {parameter.map(user => {
            return (
          fields["Adress"] = `${user.adresse}`
            )})}
        }

        if(!fields["From"]){
          {parameter.map(user => {
            return (
          fields["From"] = `${user.ville}`
            )})}
        }


        if(!fields["State"]){
          {parameter.map(user => {
            return (
          fields["State"] = `${user.pays}`
            )})}
        }
    
    
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    
      }

      updateCat(){
        console.log("dummy Update")
    }

    render() {
        const info = this.state.user;
        return (
            <div>
                <NavWine  updateCat={this.updateCat.bind(this)}/>
          {info.map(user => {
                          return (
                            <Fragment>
                <div className="container">
                    <div className="row">
                            <h3 className="titre">Bienvenue {user.prenom}</h3>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                    <div className="col-md-12">

                        <form method="post" name="ModifProfileForm" onSubmit={this.submitModifProfileForm}>
                        <div className="row">
                        <div className="col-md-6">

                                <label className="ModifElement">Photo :</label>

                                <input type="url" placeholder={`${user.picture}`} name="Picture" value={this.state.fields.Picture} onChange={this.handleChange}/>
                                <div className="errorMsg">{this.state.errors.Picture}</div>

                                <label className="ModifElement">Mail :</label>

                                <input type="email" placeholder={`${user.email}`} readonly="readonly"/>{/* mettre l'email actuel dans le placeholder */}


                                <label className="ModifElement">Mot de Passe :</label>

                                <input type="password" placeholder="Nouveau mot de passe" name="Password" value={this.state.fields.Password} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.Password}</div>
                                <input type="password" placeholder="Confirmation du nouveau mot de passe" name="Password2" value={this.state.fields.Password2} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.Password2}</div>
                            </div>

                            <div className="col-md-6">

                                <label className="ModifElement">N° de téléphone :</label>

                                <input type="tel" placeholder={`0${user.tel}`} readonly="readonly"/>

                                <input type="tel" placeholder="nouveau tel" name="Phone" value={this.state.fields.Phone} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.Phone}</div>

                                <label className="ModifElement">Adresse :</label>
                                <input type="text" placeholder={`${user.adresse}`} readonly="readonly"/> {/* mettre l'adresse actuelle dans le placeholder */}

                                <input type="text" placeholder="Nouvelle adresse" name="Adress" value={this.state.fields.Adress} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.Adress}</div>

                                <label className="ModifElement">Code postal :</label>
                                <input type="integer" placeholder={`${user.postal}`} readonly="readonly"/> {/* mettre l'adresse actuelle dans le placeholder */}

                                <input type="integer" name="Code_zip" value={this.state.fields.Code_zip} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.Code_zip}</div>

                                <label className="ModifElement">Ville :</label>
                                <input type="text" placeholder={`${user.ville}`} readonly="readonly"/> {/* mettre l'adresse actuelle dans le placeholder */}

                                <input type="text" name="From" value={this.state.fields.From} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.From}</div>

                                <label className="ModifElement">Pays :</label>
                                <p>{user.pays}</p>

                                {/* mettre par défaut le pays qu'il avait selectionner pendant son inscription */}
                                <select name="State" value={this.state.fields.State} onChange={this.handleChange}>
                                    <option>Sélectionner un pays </option>
                                    <option value="France">France </option>
                                    <option value="Afghanistan">Afghanistan </option>
                                    <option value="Afrique_Centrale">Afrique_Centrale </option>
                                    <option value="Afrique_du_sud">Afrique_du_Sud </option>
                                    <option value="Albanie">Albanie </option>
                                    <option value="Algerie">Algerie </option>
                                    <option value="Allemagne">Allemagne </option>
                                    <option value="Andorre">Andorre </option>
                                    <option value="Angola">Angola </option>
                                    <option value="Anguilla">Anguilla </option>
                                    <option value="Arabie_Saoudite">Arabie_Saoudite </option>
                                    <option value="Argentine">Argentine </option>
                                    <option value="Armenie">Armenie </option>
                                    <option value="Australie">Australie </option>
                                    <option value="Autriche">Autriche </option>
                                    <option value="Azerbaidjan">Azerbaidjan </option>
                                    <option value="Bahamas">Bahamas </option>
                                    <option value="Bangladesh">Bangladesh </option>
                                    <option value="Barbade">Barbade </option>
                                    <option value="Bahrein">Bahrein </option>
                                    <option value="Belgique">Belgique </option>
                                    <option value="Belize">Belize </option>
                                    <option value="Benin">Benin </option>
                                    <option value="Bermudes">Bermudes </option>
                                    <option value="Bielorussie">Bielorussie </option>
                                    <option value="Bolivie">Bolivie </option>
                                    <option value="Botswana">Botswana </option>
                                    <option value="Bhoutan">Bhoutan </option>
                                    <option value="Boznie_Herzegovine">Boznie_Herzegovine </option>
                                    <option value="Bresil">Bresil </option>
                                    <option value="Brunei">Brunei </option>
                                    <option value="Bulgarie">Bulgarie </option>
                                    <option value="Burkina_Faso">Burkina_Faso </option>
                                    <option value="Burundi">Burundi </option>
                                    <option value="Caiman">Caiman </option>
                                    <option value="Cambodge">Cambodge </option>
                                    <option value="Cameroun">Cameroun </option>
                                    <option value="Canada">Canada </option>
                                    <option value="Canaries">Canaries </option>
                                    <option value="Cap_vert">Cap_Vert </option>
                                    <option value="Chili">Chili </option>
                                    <option value="Chine">Chine </option>
                                    <option value="Chypre">Chypre </option>
                                    <option value="Colombie">Colombie </option>
                                    <option value="Comores">Colombie </option>
                                    <option value="Congo">Congo </option>
                                    <option value="Congo_democratique">Congo_democratique </option>
                                    <option value="Cook">Cook </option>
                                    <option value="Coree_du_Nord">Coree_du_Nord </option>
                                    <option value="Coree_du_Sud">Coree_du_Sud </option>
                                    <option value="Costa_Rica">Costa_Rica </option>
                                    <option value="Cote_d_Ivoire">Côte_d_Ivoire </option>
                                    <option value="Croatie">Croatie </option>
                                    <option value="Cuba">Cuba </option>
                                    <option value="Danemark">Danemark </option>
                                    <option value="Djibouti">Djibouti </option>
                                    <option value="Dominique">Dominique </option>
                                    <option value="Egypte">Egypte </option>
                                    <option value="Emirats_Arabes_Unis">Emirats_Arabes_Unis </option>
                                    <option value="Equateur">Equateur </option>
                                    <option value="Erythree">Erythree </option>
                                    <option value="Espagne">Espagne </option>
                                    <option value="Estonie">Estonie </option>
                                    <option value="Etats_Unis">Etats_Unis </option>
                                    <option value="Ethiopie">Ethiopie </option>
                                    <option value="Falkland">Falkland </option>
                                    <option value="Feroe">Feroe </option>
                                    <option value="Fidji">Fidji </option>
                                    <option value="Finlande">Finlande </option>
                                    <option value="Gabon">Gabon </option>
                                    <option value="Gambie">Gambie </option>
                                    <option value="Georgie">Georgie </option>
                                    <option value="Ghana">Ghana </option>
                                    <option value="Gibraltar">Gibraltar </option>
                                    <option value="Grece">Grece </option>
                                    <option value="Grenade">Grenade </option>
                                    <option value="Groenland">Groenland </option>
                                    <option value="Guadeloupe">Guadeloupe </option>
                                    <option value="Guam">Guam </option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernesey">Guernesey </option>
                                    <option value="Guinee">Guinee </option>
                                    <option value="Guinee_Bissau">Guinee_Bissau </option>
                                    <option value="Guinee equatoriale">Guinee_Equatoriale </option>
                                    <option value="Guyana">Guyana </option>
                                    <option value="Guyane_Francaise ">Guyane_Francaise </option>
                                    <option value="Haiti">Haiti </option>
                                    <option value="Hawaii">Hawaii </option>
                                    <option value="Honduras">Honduras </option>
                                    <option value="Hong_Kong">Hong_Kong </option>
                                    <option value="Hongrie">Hongrie </option>
                                    <option value="Inde">Inde </option>
                                    <option value="Indonesie">Indonesie </option>
                                    <option value="Iran">Iran </option>
                                    <option value="Iraq">Iraq </option>
                                    <option value="Irlande">Irlande </option>
                                    <option value="Islande">Islande </option>
                                    <option value="Israel">Israel </option>
                                    <option value="Italie">italie </option>
                                    <option value="Jamaique">Jamaique </option>
                                    <option value="Jan Mayen">Jan Mayen </option>
                                    <option value="Japon">Japon </option>
                                    <option value="Jersey">Jersey </option>
                                    <option value="Jordanie">Jordanie </option>
                                    <option value="Kazakhstan">Kazakhstan </option>
                                    <option value="Kenya">Kenya </option>
                                    <option value="Kirghizstan">Kirghizistan </option>
                                    <option value="Kiribati">Kiribati </option>
                                    <option value="Koweit">Koweit </option>
                                    <option value="Laos">Laos </option>
                                    <option value="Lesotho">Lesotho </option>
                                    <option value="Lettonie">Lettonie </option>
                                    <option value="Liban">Liban </option>
                                    <option value="Liberia">Liberia </option>
                                    <option value="Liechtenstein">Liechtenstein </option>
                                    <option value="Lituanie">Lituanie </option>
                                    <option value="Luxembourg">Luxembourg </option>
                                    <option value="Lybie">Lybie </option>
                                    <option value="Macao">Macao </option>
                                    <option value="Macedoine">Macedoine </option>
                                    <option value="Madagascar">Madagascar </option>
                                    <option value="Madère">Madère </option>
                                    <option value="Malaisie">Malaisie </option>
                                    <option value="Malawi">Malawi </option>
                                    <option value="Maldives">Maldives </option>
                                    <option value="Mali">Mali </option>
                                    <option value="Malte">Malte </option>
                                    <option value="Man">Man </option>
                                    <option value="Mariannes du Nord">Mariannes du Nord </option>
                                    <option value="Maroc">Maroc </option>
                                    <option value="Marshall">Marshall </option>
                                    <option value="Martinique">Martinique </option>
                                    <option value="Maurice">Maurice </option>
                                    <option value="Mauritanie">Mauritanie </option>
                                    <option value="Mayotte">Mayotte </option>
                                    <option value="Mexique">Mexique </option>
                                    <option value="Micronesie">Micronesie </option>
                                    <option value="Midway">Midway </option>
                                    <option value="Moldavie">Moldavie </option>
                                    <option value="Monaco">Monaco </option>
                                    <option value="Mongolie">Mongolie </option>
                                    <option value="Montserrat">Montserrat </option>
                                    <option value="Mozambique">Mozambique </option>
                                    <option value="Namibie">Namibie </option>
                                    <option value="Nauru">Nauru </option>
                                    <option value="Nepal">Nepal </option>
                                    <option value="Nicaragua">Nicaragua </option>
                                    <option value="Niger">Niger </option>
                                    <option value="Nigeria">Nigeria </option>
                                    <option value="Niue">Niue </option>
                                    <option value="Norfolk">Norfolk </option>
                                    <option value="Norvege">Norvege </option>
                                    <option value="Nouvelle_Caledonie">Nouvelle_Caledonie </option>
                                    <option value="Nouvelle_Zelande">Nouvelle_Zelande </option>
                                    <option value="Oman">Oman </option>
                                    <option value="Ouganda">Ouganda </option>
                                    <option value="Ouzbekistan">Ouzbekistan </option>
                                    <option value="Pakistan">Pakistan </option>
                                    <option value="Palau">Palau </option>
                                    <option value="Palestine">Palestine </option>
                                    <option value="Panama">Panama </option>
                                    <option value="Papouasie_Nouvelle_Guinee">Papouasie_Nouvelle_Guinee </option>
                                    <option value="Paraguay">Paraguay </option>
                                    <option value="Pays_Bas">Pays_Bas </option>
                                    <option value="Perou">Perou </option>
                                    <option value="Philippines">Philippines </option>
                                    <option value="Pologne">Pologne </option>
                                    <option value="Polynesie">Polynesie </option>
                                    <option value="Porto_Rico">Porto_Rico </option>
                                    <option value="Portugal">Portugal </option>
                                    <option value="Qatar">Qatar </option>
                                    <option value="Republique_Dominicaine">Republique_Dominicaine </option>
                                    <option value="Republique_Tcheque">Republique_Tcheque </option>
                                    <option value="Reunion">Reunion </option>
                                    <option value="Roumanie">Roumanie </option>
                                    <option value="Royaume_Uni">Royaume_Uni </option>
                                    <option value="Russie">Russie </option>
                                    <option value="Rwanda">Rwanda </option>
                                    <option value="Sahara Occidental">Sahara Occidental </option>
                                    <option value="Sainte_Lucie">Sainte_Lucie </option>
                                    <option value="Saint_Marin">Saint_Marin </option>
                                    <option value="Salomon">Salomon </option>
                                    <option value="Salvador">Salvador </option>
                                    <option value="Samoa_Occidentales">Samoa_Occidentales</option>
                                    <option value="Samoa_Americaine">Samoa_Americaine </option>
                                    <option value="Sao_Tome_et_Principe">Sao_Tome_et_Principe </option>
                                    <option value="Senegal">Senegal </option>
                                    <option value="Seychelles">Seychelles </option>
                                    <option value="Sierra Leone">Sierra Leone </option>
                                    <option value="Singapour">Singapour </option>
                                    <option value="Slovaquie">Slovaquie </option>
                                    <option value="Slovenie">Slovenie</option>
                                    <option value="Somalie">Somalie </option>
                                    <option value="Soudan">Soudan </option>
                                    <option value="Sri_Lanka">Sri_Lanka </option>
                                    <option value="Suede">Suede </option>
                                    <option value="Suisse">Suisse </option>
                                    <option value="Surinam">Surinam </option>
                                    <option value="Swaziland">Swaziland </option>
                                    <option value="Syrie">Syrie </option>
                                    <option value="Tadjikistan">Tadjikistan </option>
                                    <option value="Taiwan">Taiwan </option>
                                    <option value="Tonga">Tonga </option>
                                    <option value="Tanzanie">Tanzanie </option>
                                    <option value="Tchad">Tchad </option>
                                    <option value="Thailande">Thailande </option>
                                    <option value="Tibet">Tibet </option>
                                    <option value="Timor_Oriental">Timor_Oriental </option>
                                    <option value="Togo">Togo </option>
                                    <option value="Trinite_et_Tobago">Trinite_et_Tobago </option>
                                    <option value="Tristan da cunha">Tristan de cuncha </option>
                                    <option value="Tunisie">Tunisie </option>
                                    <option value="Turkmenistan">Turmenistan </option>
                                    <option value="Turquie">Turquie </option>
                                    <option value="Ukraine">Ukraine </option>
                                    <option value="Uruguay">Uruguay </option>
                                    <option value="Vanuatu">Vanuatu </option>
                                    <option value="Vatican">Vatican </option>
                                    <option value="Venezuela">Venezuela </option>
                                    <option value="Vierges_Americaines">Vierges_Americaines </option>
                                    <option value="Vierges_Britanniques">Vierges_Britanniques </option>
                                    <option value="Vietnam">Vietnam </option>
                                    <option value="Wake">Wake </option>
                                    <option value="Wallis et Futuma">Wallis et Futuma </option>
                                    <option value="Yemen">Yemen </option>
                                    <option value="Yougoslavie">Yougoslavie </option>
                                    <option value="Zambie">Zambie </option>
                                    <option value="Zimbabwe">Zimbabwe </option>
                                </select>
                                <div className="errorMsg">{this.state.errors.State}</div>
                                <Button type="submit" variant="outlined" color="primary" className="valModif">VALIDER LES MODIFICATIONS</Button>

                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                </Fragment>
                          )})}  
            </div>

        );
    }
};

