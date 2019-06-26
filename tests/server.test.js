const axios = require("axios")

test('try signup', () => {
    return axios.get("http://localhost:3000/api/users/signup", {
        email: "test",
        password: "1234"
    }).then(res => 
        // console.log(res)
        expect(res.status).toBe(200)
    );
});