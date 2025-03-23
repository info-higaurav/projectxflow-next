import { Request, Response, Router } from "express";
import { health } from "../../controllers/users";

const userRoute = Router();

userRoute.route("/health").get(health)

export default userRoute;