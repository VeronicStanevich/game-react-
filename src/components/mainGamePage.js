import {Login} from "./login";
import React from "react";

export class MainGamePage extends React.Component {

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
