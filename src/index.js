import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {render} from "@testing-library/react";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Rules} exact={true}/>
                <Route path="/login" component={Login}/>
                <Route path="/user_settings" component={userSettings}/>
                <Route path="/main_game_page" component={MainGamePage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

const Rules = () => {
    return (<div>
        <h2>Welcome!</h2>
        <p>I have a interesting game for you.)<br/>
            Try to find and open all pairs of identical cards on the playing field in a short time.<br/>
            Good Luck)</p>

        <div className="rules__navigation_buttons">
            <Link to="/login" className="navigation_button">Login </Link>
            <Link to="/user_settings" className="navigation_button">Change user settings</Link>
            <Link to="/user_settings" className="navigation_button">Skip registration (if logged)</Link>
            <Link to="/main_game_page" className="navigation_button">Start game</Link>
        </div>

    </div>);
}


class Login extends React.Component {
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

class userSettings extends React.Component{
    state = {
        cardDesign: "",
        complexity: ""
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return (<form>
            <div>
                <h2>Choose settings</h2>
                <h3>Card design:</h3>
                <div className="cards_design">
                    <div className="card_design card_design_1"></div>
                    <div className="card_design card_design_2"></div>
                    <div className="card_design card_design_3"></div>
                </div>
                <h3>Complexity (number of cards):</h3>
                <div className="settings__complexity_position">
                    <div className="settings__complexity">
                        <label>
                            <input type="radio"/><a className="settings__complexity_hover">Easy (6 cards)</a>
                        </label>
                        <label>
                            <input type="radio"/><a className="settings__complexity_hover">Middle (12 cards)</a>
                        </label>
                        <label>
                            <input type="radio"/><a className="settings__complexity_hover">Hard (20 cards)</a>
                        </label>
                    </div>
                </div>
                <Link to="/main_game_page" className="navigation_button">Next</Link>
            </div>
        </form>);
    }
}

class MainGamePage extends Login {

    componentDidMount() {
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        const email = localStorage.getItem('email');
        this.setState({firstName, lastName, email});
    }

    render() {
        return (<div>
            <div className="main_page__user_data">
                <div> Player: {this.state.firstName} {this.state.lastName} ({this.state.email})</div>
                <div>Time:</div>
            </div>
            game
        </div>);
    }
}

const Congratulations = () => {
    return (<div>
        You win!!! Great result!!!
    </div>);
}

ReactDOM.render(<App/>, document.getElementById('game_rules'));