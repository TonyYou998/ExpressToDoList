

const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port = process.env.PORT || 4000;
const date=require(__dirname+"/date.js");
console.log(date);
let items=[];
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",(req,resp)=>{
        let day=date.getDate();
      
        resp.render("list",{ 
            toDay:day,  
            newItems:items
        });
        

});
app.get("/work",(req,resp)=>{
        resp.render("list",{
                toDay:day,
                newItems:items
                });

})
app.get("/about",(req,resp)=>{
        resp.render("about")

})
app.post("/",(req,resp)=>{
        let item=req.body.newItem;
        console.log(req.body.newItem);
        items.push(item);
        resp.redirect("/");
        
        
        
})
app.listen(port, () => {
                console.log("Started at 4000");
         });