

const express=require('express');
const bodyParser=require('body-parser');
const app=express();
let items=[];
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",(req,resp)=>{
        
        let today=new Date();
        let day=today.toISOString().split('T')[0];
        resp.render("list",{ 
            toDay:day,  
            newItems:items
        });
        

});
app.post("/",(req,resp)=>{
        let item=req.body.newItem;
        items.push(item);
        resp.redirect("/");
        
        
        
        })
app.listen(3000,()=>{
        console.log("server is running on port 3000");
});