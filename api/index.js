const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json())

const users = [
    {
        id: "1",
        username: "john",
        password: "john1",
        isAdmin: true,
    },
    {
        id: "2",
        username: "jane",
        password: "jane1",
        isAdmin: false,
    },
]

app.post("/api/login", (req, res) => {
    const {username, password} = req.body

    const user = users.find((u) => {
        return u.username === username && u.password === password;
    })

    if (user) {
        res.json(user)
    } else {
        res.status(400).json("Username or password incorrect")
    }
})
app.listen(5000, () => console.log("backend")) 