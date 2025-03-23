import express from 'express'

const app = express();


// import routes
import userRoute from '../routes/users';

app.use("/api/v1/users", userRoute)

export default app;
