import React from "react";
import {Link} from "react-router-dom";

export class UserSettings extends React.Component {
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

    render() {
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
