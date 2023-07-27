import express from "express";
import { User } from "./models/user.model.js";
import bodyParser from "body-parser";


const app = express()
const PORT = process.env.PORT || 5000
//app.use(json())

app.use("/", express.static("public"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/users', async function(req,res){
    const users = await User.findAll();
    return {
        status: true,
        result: users
    }
})

app.post("/users", async function (req, res) {
    const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
    res.json({
        status: true,
        result: user
    })
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`))

