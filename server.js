const express = require('express')
const app = express()
const PORT = 3000
// const posts = require('./posts')

//body-parsing
app.use(express.json());


app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
})


//import post router
const postsRouter = require('./routers/postsRoute')
app.use('/posts', postsRouter)


app.get('/', (req, res)=> {

    res.json('ciao')
})


