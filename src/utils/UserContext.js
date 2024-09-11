import { createContext } from "react";

const UserContext = createContext(
    {
        loggedinUser: 'Deafult'
    }
);

export default UserContext;
