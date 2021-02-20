import {Link} from "react-router-dom";
import React from "react";

export const Rules = () => {
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
};

