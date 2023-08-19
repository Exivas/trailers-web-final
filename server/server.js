const express=require('express') 
const cors=require('cors')
const app = express()
const port = 3000
app.use(cors())
const search=require('./routers/search')
app.use('/api/trailers',search)

const post=require('./routers/post')
app.use('/api/post',post)

const put=require('./routers/put')
app.use('/api/put',put)

const Delete=require('./routers/delete')
app.use('/api/delete',Delete)

app.listen(port, () => {
    console.log(`listo en puerto:${port}....`)
})