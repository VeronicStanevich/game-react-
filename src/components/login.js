import React from "react";

export class Login extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: ''
    };

    handleChange = (event) => {
        const input = event.target;
        const value = input.value;

        this.setState({[input.name]: value});
    };

    handleFormSubmit = () => {
        const {firstName, lastName, email} = this.state;
        const results = JSON.parse(localStorage.getItem('users')) || [];
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        results.push({
            firstName,
            lastName,
            email
        });
        localStorage.setItem('userResultHistory', JSON.stringify(results));

        this.props.history.push('/user_settings');
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <h2>Fill the form</h2>
                    <table className="login__content">
                        <tbody>
                        <tr>
                            <td className="login__data_names">First name</td>
                            <td><label><input name="firstName" type="text" placeholder="First name"
                                              value={this.state.firstName} onChange={this.handleChange}/></label></td>
                        </tr>
                        <tr>
                            <td className="login__data_names">Last name</td>
                            <td><label><input name="lastName" type="text" placeholder="Last name"
                                              value={this.state.lastName} onChange={this.handleChange}/></label></td>
                        </tr>
                        <tr>
                            <td className="login__data_names">Email</td>
                            <td><label><input name="email" type="email" placeholder="Email" value={this.state.email}
                                              onChange={this.handleChange}/></label></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="navigation_button" type="submit">Continue</button>
                    {/*<Link to="/user_settings" className="navigation_button">Continue</Link>*/}
                </div>
            </form>);
    }
}
