import dotenv from 'dotenv'
import app from './app'
import { connect } from '../config/db-connection'

dotenv.config({
    path:"./.env"
})

const port = process.env.PORT || 5000

connect()
.then((res)=>{
    console.log(res.connection.host)
    app.listen(port ,()=>{
        console.log("Server is running " + port)
    })
})
.catch((err)=>{
    console.log(err)
    process.exit(1)
})
