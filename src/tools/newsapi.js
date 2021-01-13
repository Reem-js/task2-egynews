const request=require('request')



const newsegy=(callback)=>{
const newsurl='http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-13&sortBy=publishedAt&apiKey=997d49d30fef47de8c5273f24a34139f'

request({url:newsurl,json:true},(error,response)=>{
if(error){
    callback('error has occured',undefined)
}
else if(response.body.code){
    callback('error :your API key is invalid',undefined)

}
else if(response.body.totalResults==0){ 
    callback('error :your date you entered is wrong',undefined)
}
else{
    callback(undefined,response.body.articles)
}
})
}



module.exports=newsegy;