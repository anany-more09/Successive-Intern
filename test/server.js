const express = require('express')
const app = express()
const {connection} = require('./db')
const userRouter = require('./src/routes/user')
require("dotenv").config();

const PORT = process.env.PORT || 3000

app.use(express.json())
const connectionURL = process.env.connectionURL
app.use('/api/user', userRouter)

connection(connectionURL)
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server is running at port: ${PORT}`);    
    })
    
})
.catch((error) => {
    console.log(`Failed to connect databse`);
     
})


