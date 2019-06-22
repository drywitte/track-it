import React from "react";

const UserContext = React.createContext({
    isAuthed: false,
    userId: null,
    setAuth: () => {}
});

export default UserContext;
