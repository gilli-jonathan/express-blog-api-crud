const express = require('express')
const app = express()
const PORT = 3000
// const posts = require('./posts')

//import post router
const postsRouter = require('./routers/postsRoute')

app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
})

app.use('/posts', postsRouter)


app.get('/', (req, res)=> {

    res.json('ciao')
})


