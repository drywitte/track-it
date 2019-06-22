import React from "react";

const UserContext = React.createContext({
    isAuthed: false,
    user: {}
});

export default UserContext;
