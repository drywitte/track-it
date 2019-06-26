const axios = require("axios")

let user_id;

test('successful signup', () => {
    return axios.post("http://localhost:3000/api/users/signup", {
        email: "test",
        password: "1234"
    }).then(res => {
        return expect(res.status).toBe(200)
    }
    );
});

// test('delete user', () => {
//     return axios.delete("http://localhost:3000/api/users/signup", {
//         email: "test",
//         password: "1234"
//     }).then(res => {
//         return expect(res.status).toBe(200)
//     }
//     );
// });

test('password too short to signup', () => {
    return axios.post("http://localhost:3000/api/users/signup", {
        email: "test",
        password: 1
    })
    .catch(res => {
        expect(res.response.status).toBe(422)
    })
});