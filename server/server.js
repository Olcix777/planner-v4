const express = require("express")
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
app.use(cors());

app.use(express.json());

const mongoUrl =  "mongodb+srv://user:adam123@cluster0.dfi875d.mongodb.net/?retryWrites=true&w=majority"

const JWT_SECRET = "123123123012405430"
mongoose
.connect(mongoUrl, {
    useNewUrlParser: true
})
.then (()=> {
    console.log("Connected to database");
})
.catch((e)=> console.log(e));

require("./schemas/userDetails");

const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { email,nick, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      email,
      nick,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});


app.post('/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.post("/userinfo", async (req,res) => {
    const { email } = req.body;
    try {
        User.findOne({email: email}).then((data) => {
            res.send({ status: "ok", data: data})
            console.log(data)
        })
        .catch((error) => {
            res.send({status: "error", data: error})
            console.log("nie")
        })
    } catch (error) {
        
    }
})


app.post("/event", async (req,res) => {
    const { email, title, descryption, StartDate, EndDate } = req.body;
    try {
        
       
    

        User.findOne({email: email}).then(async (data) => {
            await  User.updateOne({email: email}, { $push: { events: { title, descryption, StartDate, EndDate}} })
    
            res.send({ status: "ok", data: data})
            console.log("działa")
        })
        .catch((error) => {
            res.send({status: "error", data: error})
            console.log("niedziała")
        })
    } catch (error) {
        
    }
})





app.listen(5000,() => {
    console.log("hello world")
})
