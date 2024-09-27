const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000
const db = process.env.db

dotenv.config();


app.use(express.json({ limit: '10mb' }))
app.use(cors({
    origin: 'https://school-mangement-crm-aditya-shivhare.vercel.app'
  }));

mongoose
    .connect('mongodb+srv://adityashivhare7291:jq1QfSZQvyEaPxCl@cluster0.cvliz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})