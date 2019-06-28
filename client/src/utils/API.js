import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("/api/users");
    },

    getUser: function(userId) {
        return axios.get(`/api/users/user/${userId}`)
    },

    getCurrentUser: function() {
        return axios.get("/api/users/isLoggedIn");
    },

    updateUser: function(userid, body) {
        return axios.put(`/api/users/user/${userid}`, body)
    },

    getUserWorkouts: function(userid) {
        return axios.get(`/api/workouts/${userid}`);
    },

    getUserWorkoutIds: function(userid) {
        return axios.get(`/api/workouts/ids/${userid}`);
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
    },

    getLogout: function() {
        return axios.get("/api/users/logout");
    }
};