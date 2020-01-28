import React, { Component } from 'react'
import './Register.css';
import API from "../../utils/API";


class Register extends Component {

  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["First_name"] = "";
      fields["Last_name"] = "";
      fields["Picture"] = "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg";
      fields["Phone"] = "";
      fields["Email"] = "";
      fields["Anniversary"] = "";
      fields["Password"] = "";
      fields["Adress"] = "";
      fields["State"] = "";
      fields["Code_zip"] = "";
      fields["From"] = "";
      this.setState({ fields: fields });
      API.signup(this.state.fields).then(res => {
        alert("Bonjour ! vous êtes maintenant inscrit !");
        this.props.history.push('/login')
      }).catch(err => console.log('erreur reat', err))
    }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    if (!fields["Picture"]) {
      fields["Picture"] = "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
    }

    if (!fields["First_name"]) {
      formIsValid = false;
      errors["Firstname"] = "*Merci de renseginer votre prénom.";
    }

    if (typeof fields["Last_name"] !== "undefined") {
      if (!fields["Last_name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["last name"] = "*Merci de renseigner que des caractères.";
      }
    }

    if (!fields["State"]) {
      formIsValid = false;
      errors["State"] = "*Merci de renseigner un pays";
    }

    if (!fields["Email"]) {
      formIsValid = false;
      errors["Email"] = "*Merci de renseigner un Email valide";
    }

    if (typeof fields["Email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["Email"])) {
        formIsValid = false;
        errors["Email"] = "*Merci de renseigner un Email valide";
      }
    }

    if (!fields["Phone"]) {
      formIsValid = false;
      errors["Phone"] = "*Merci de renseigner un numéro de télephone";
    }

    if (typeof fields["Phone"] !== "undefined") {
      if (!fields["Phone"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["Phone"] = "*Merci de renseigner un numéro de télephone valide";
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

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
 
    
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>S'inscrire</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label>Prénom :</label>
            <input type="text" name="Last_name" value={this.state.fields.Last_name} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Last_name}</div>

            <label>Nom :</label>
            <input type="text" name="First_name" value={this.state.fields.First_name} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.First_name}</div>

            <label>Photo :</label>
            <input type="url" placeholder="https:/liendelaphoto.fr" name="Picture" value={this.state.fields.Picture} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Picture}</div>

            <label>Email :</label>
            <input type="email" name="Email" value={this.state.fields.Email} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Email}</div>

            <label>Mot de passe</label>
            <input type="password" name="Password" value={this.state.fields.Password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Password}</div>
            <input type="password" placeholder="Confirmation du mot de passe" name="Password2" value={this.state.fields.Password2} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Password2}</div>

            <label>Mobile :</label>
            <input type="tel" name="Phone" value={this.state.fields.Phone} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Phone}</div>

            <label>Anniversaire :</label>
            <input type="date" name="Anniversary" value={this.state.fields.Anniversary} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Anniversary}</div>

            <label>Adresse :</label>
            <input type="text" name="Adress" value={this.state.fields.Adress} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Adress}</div>

            <label>Pays :</label>
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

            <label>Code postal :</label>
            <input type="integer" name="Code_zip" value={this.state.fields.Code_zip} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Code_zip}</div>

            <label>Ville :</label>
            <input type="text" name="From" value={this.state.fields.From} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.From}</div>

            <input type="submit" className="button" value="S'inscrire" />
          </form>
        </div>
      </div>

    );
  }


}

export default Register