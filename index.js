import express from "express";
import cors from "cors";

const USERS = [
  {
    username: 'bobesponja', 
    avatar: "https://conteudo.imguol.com.br/c/parceiros/c3/2020/06/14/bob-esponja-a-um-personagem-lgbt-confirma-nickelodeon-revelaaao-acontece-durante-mas-do-orgulho-1592150312289_v2_900x506.jpg" 
  },
  {
    username: 'patrick', 
    avatar: "https://www.torredevigilancia.com/wp-content/uploads/2020/08/patrick-star-wallpaper-810x608.jpg" 
  }
];
const TWEETS = [
  {
    username: "bobesponja",
    tweet: "eu amo o Patrick"
  },
  {
    username: "patrick",
    tweet: "eu amo o Bob Esponja"
  },
  {
    username: "bobesponja",
    tweet: "que d+!!!"
  },
  {
    username: "patrick",
    tweet: "salamaleico"
  }
];

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
  USERS.push(req.body);
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  res.status(201).send("Ok");
});

app.post("/tweets", (req, res) => {
  TWEETS.push(req.body);
  const { username, tweet } = req.body;
  if (!username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }
  res.status(201).send("OK");
  console.log(TWEETS);
});

app.get("/tweets", (req, res) => {
  TWEETS.forEach((tweet) => {
    const user = USERS.find((user) => user.username === tweet.username);
    tweet.avatar = user.avatar;
  });
  const newTweets = TWEETS.slice(-10)
  res.status(201).send(newTweets);
});

app.listen(5000);
