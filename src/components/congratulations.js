import React from "react";
import {useSelector} from "react-redux";



export const Congratulations = () => {
    const users = useSelector(({resultsList}) => resultsList);

    return (<div>
        You win!!! Great result!!!
        {users.map(user=>(
            <div>{user.user.firstName} {user.user.lastName} ({user.user.email}) - {user.time}</div>
        ))}
    </div>);
}
