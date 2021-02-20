import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createUserAction} from "../store/actions/user";

export const Login = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const input = event.target;
        const value = input.value;

        setUser((user) => ({...user, [input.name]: value}));
    };

    const handleFormSubmit = () => {
        dispatch(createUserAction(user));
        props.history.push('/user_settings');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <h2>Fill the form</h2>
                <table className="login__content">
                    <tbody>
                    <tr>
                        <td className="login__data_names">First name</td>
                        <td><label><input name="firstName" type="text" placeholder="First name"
                                          value={user.firstName} onChange={handleChange}/></label></td>
                    </tr>
                    <tr>
                        <td className="login__data_names">Last name</td>
                        <td><label><input name="lastName" type="text" placeholder="Last name"
                                          value={user.lastName} onChange={handleChange}/></label></td>
                    </tr>
                    <tr>
                        <td className="login__data_names">Email</td>
                        <td><label><input name="email" type="email" placeholder="Email" value={user.email}
                                          onChange={handleChange}/></label></td>
                    </tr>
                    </tbody>
                </table>
                <button className="navigation_button" type="submit">Continue</button>
            </div>
        </form>);
}
