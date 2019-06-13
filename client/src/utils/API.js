import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("/api/users");
    },

    getUserWorkouts: function(userid) {
        return axios.get(`/api/workouts/${userid}`)
    }
};