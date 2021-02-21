import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCardDesignAction, setComplexityAction} from "../store/actions/gameSettings";

export const UserSettings = () => {
    const [gameSettings, setGameSettings] = useState({
        cardDesign: "",
        complexity: ""
    });

    const dispatch = useDispatch();
    const cardDesign = useSelector((state) => state.gameSettings.cardDesign);
    const complexity = useSelector((state) => state.gameSettings.complexity);

    const setCardDesign = design => () => {
        dispatch(setCardDesignAction(design));
    }

    const setComplexity = complexity => () => {
        dispatch(setComplexityAction(complexity));
    }
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        setGameSettings((settings) => ({...settings, [name]: value}));
    }

    return (<form>
        <div>
            <h2>Choose settings</h2>
            <h3>Card design:</h3>
            <div className="cards_design">
                <div onClick={setCardDesign(1)}
    className={`card_design card_design_1 ${cardDesign === 1 ? 'active' : ''}`}/>
                <div onClick={setCardDesign(2)}
    className={`card_design card_design_2 ${cardDesign === 2 ? 'active' : ''}`}/>
                <div onClick={setCardDesign(3)}
    className={`card_design card_design_3 ${cardDesign === 3 ? 'active' : ''}`}/>
            </div>
            <h3>Complexity (number of cards):</h3>
            <div className="settings__complexity_position">
                <div className="settings__complexity">
                    <label>
                        <input type="radio" checked={complexity === "easy"} onClick={setComplexity("easy")}/><a
                        className="settings__complexity_hover">Easy (6 cards)</a>
                    </label>
                    <label>
                        <input type="radio" checked={complexity === "middle"} onClick={setComplexity("middle")}/><a
                        className="settings__complexity_hover">Middle (12 cards)</a>
                    </label>
                    <label>
                        <input type="radio" checked={complexity === "hard"} onClick={setComplexity("hard")}/><a
                        className="settings__complexity_hover">Hard (20 cards)</a>
                    </label>
                </div>
            </div>
            <Link to="/main_game_page" className="navigation_button">Next</Link>
        </div>
    </form>);
}
