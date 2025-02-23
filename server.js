const express = require ('express')

const App = express()
App.set("view engine", "ejs")

App.get('/', (req, res) => {
    console.log("Here")
    // res.download("server.js")
    res.render("index", { text:"World"})
})

App.listen(3000)