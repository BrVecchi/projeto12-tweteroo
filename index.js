import express from "express"
import cors from "cors"

const USERS = []
const TWEETS = []

const app = express()
app.use(cors())
app.use(express.json())

app.post("/sign-up", (req, res) => {
    USERS.push(req.body)
    const {username, avatar} = req.body
    if (!username || !avatar) {
        res.status(400).send("Todos os campos são obrigatórios!")
        return
    }
    res.status(201).send("Ok")
})

app.post("/tweets", (req, res) => {
    TWEETS.push(req.body)
    const {username, tweet} = req.body
    if (!username || !tweet) {
        res.status(400).send("Todos os campos são obrigatórios!")
    }
})




app.listen(5000)