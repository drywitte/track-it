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
    },

    postWorkoutInstance: function(body) {
        return axios.post('/api/workouts/create', body)
    },

    postLogin: function(body) {
        return axios.post("/api/users/login", body);
    },

    postSignup: function(body) {
        return axios.post("/api/users/signup", body);
    }
};