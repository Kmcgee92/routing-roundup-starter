const express = require("express")
const { render } = require("pug")
const router = express.Router()

router.get("/bio", (req, res) => {
    const obj = {
        h1Text: "Hello from Express!"
    }
    res.render("home", obj)
})

router.get("/contact", (req, res) => {
    const obj = {
        h1Text: "Hello from Express!"
    }
    res.render("home", obj)
})
