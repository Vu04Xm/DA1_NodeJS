const newRouter= require('./New');
function route(app){
app.use('/news',newRouter)

app.get('/', (req, res) => {
  res.render('home'); 
});
app.get('/search',(req, res)=>{
  res.render('search');
})

}
module.exports= route;