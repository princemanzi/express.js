const express = require ('express')

const App = express()

App.get('/', (req, res) => {
    console.log("Here")
    res.status(500).json({ message: "error"})
})

App.listen(3000)