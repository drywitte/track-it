import React from "react";

const UserContext = React.createContext({
    isAuthed: false,
    userId: null,
    setAuth: () => {}
});

export const withUser = Component => props => (
    <UserContext.Consumer>
        {
            userValues => <Component {...props} {...userValues } />
        }
    </UserContext.Consumer>
);

export default UserContext;
