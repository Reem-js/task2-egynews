
const newsegy=require('../src/tools/newsapi')
const express=require('express')
const app=express()
const port=3000
const path=require('path')
const hbs=require('hbs')

// set up hbs engine , andpartials path & views path (dynamicsfiles)  preparation

const partialspath=path.join(__dirname,'../templates/partials')
const viewspath=path.join(__dirname,'../templates/views')
app.set('view engine','hbs')
app.set('views',hbs)
app.set('views',viewspath)
hbs.registerPartials(partialspath)

///////////////////////////////////////////////////////////////////////////

newsegy((error,data)=>{
app.get('/',(req,res)=>{

    
// render index page 
res.render('index',{news:data , name:'Reem Monier'})
})


// render 404 page
app.get('/404',(req,res)=>{
res.render('404',{msg:'error 404: page not found',name:'Reem Monier'})
})
})




// listening server 

app.listen(port,()=>console.log('server listing at 3000'))


