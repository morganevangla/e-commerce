import React from "react";
import API from "../../utils/API";



export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserLoginForm = this.submituserLoginForm.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submituserLoginForm = async (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            
            let fields = {};
            fields["Email"] = "";
            fields["Password"] = "";
            this.setState({ fields: fields });
            // console.log(this.state.fields.Email)
            API.login(this.state.fields).then(res => {
                localStorage.setItem('usertoken',JSON.stringify(res.data))
                this.props.history.push('/')
                // console.log(res.data[0]);
            }).catch(err => alert('veuillez vous inscrire pour vous connecter', err ),
            
            )
        }
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

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

        if (!fields["Password"]) {
            formIsValid = false;
            errors["Password"] = "*Merci de renseigner un mot de passe.";
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
                    <h3>Se connecter</h3>
                    <form method="post" name="userLoginForm" onSubmit={this.submituserLoginForm} >
                        <label>Email :</label>
                        <input type="email" name="Email" value={this.state.fields.Email} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.Email}</div>

                        <label>Mot de passe</label>
                        <input type="password" name="Password" value={this.state.fields.Password} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.Password}</div>

                        <input type="submit" className="button" value="Se connecter" />
                    </form>
                </div>
            </div>
        );
    }
};

