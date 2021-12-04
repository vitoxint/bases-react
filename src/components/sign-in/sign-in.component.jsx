import React from "react";

import FormImput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password : ""

        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email : "" , password: ""});
        


    };

    handleChange = event => {
        const { value , name  } = event.target; // name , value

        this.setState({ [name] : value });

    };

    // design pattern: controlled input
    render(){
        return (
            <div className="sign-in">

                <h2>I already have account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormImput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormImput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>



                </form>
            </div>

        );
    }
}

export default SignIn;