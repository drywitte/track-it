import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("/api/users");
    },

    getUserWorkouts: function(userid) {
        return axios.get(`/api/workouts/${userid}`);
    },

    postWorkoutTemplate: function(body) {
        return axios.post('/api/templates/create', body);
    },

    getWorkoutTemplates: function() {
        return axios.get('/api/templates');
    }
};