const express = require('express');
const app = express();
const margOroute = require('./routes/margOroute');

app.set("view engine", "pug");

app.get('/', (req, res) => {
    /* let obj = {
        Paths: [
            '/',
            '/xyz',
            '/aboutxyz',
            '/about_xyz',
            '/about-xyz',
            '/capital-letters/abc',
            '/capital-letters/asdf',
            '/margot/bio',
            '/margot/contact',
            '/margeaux/bio',
            '/margeaux/contact',
            '/about',
            '/about',
            '/foo',
            '/foo',
            '/about-foo',
            '/about-foo',
            '/about_foo',
            '/about_foo',
            '/about2',
            '/about2',
            '/About',
            '/About',
            '/ABOUT',
            '/ABOUT',
        ]
    };
    
    res.render("home", obj); */
    res.send("Hello from Express!")
});

app.get(/(xyz)$/, (req, res) => {
    res.send("That's all I wrote.");
});

app.get('^(/capital-letters)/:id(\\w+)', (req, res) => {
    res.send(req.params.id.toUpperCase());
});

app.use('/margot|/margeaux', margOroute);

app.get("/about/foo", (req,res) => {
    res.statusCode = 404;
    res.end();
});

app.all('*', (req, res) => {
    let obj = {
        path: req.path,
        method: req.method,
        randNum: Math.floor(Math.random() * 10)
    }

    res.render('other', obj);
})

const port = 8081;
app.listen(port, () => {`Server is live on ${port}`});
