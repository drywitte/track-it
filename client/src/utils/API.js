import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("/api/users");
    },

    getUserWorkouts: function() {
        return axios.get("/api/workouts/:userid")
    }
};