const express = require("express");
const app = express();
const hbs = require("hbs")
const path = require("path")
const port = process.env.PORT || 3000;
//public static path
const staticpath = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs');
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticpath))
// routing
app.get("", (req, res)=>{
    res.render("index")
})
app.get("/about", (req , res)=>{
    res.render("about")
})
app.get("/contact", (req ,res)=>{
    res.render("welcome to contavt  home")
})
app.get("/wheather", (req , res)=>{
    res.render("wheather")
})
app.get("*", (req , res)=>{
    res.render("404error" , {
        errormsg: "oops!page was not found"
    })
})
app.listen(port , ()=>{
    console.log(`listening at the port ${port}`)
})